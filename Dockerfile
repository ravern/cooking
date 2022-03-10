FROM node:alpine AS deps

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --network-timeout 100000

#############################

FROM node:alpine AS builder

ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG SUPABASE_STORAGE_HOSTNAME

ENV SUPABASE_URL ${SUPABASE_URL}
ENV SUPABASE_ANON_KEY ${SUPABASE_ANON_KEY}
ENV SUPABASE_STORAGE_HOSTNAME ${SUPABASE_STORAGE_HOSTNAME}

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

#############################

FROM node:alpine AS runner

ARG SUPABASE_URL
ARG SUPABASE_ANON_KEY
ARG SUPABASE_STORAGE_HOSTNAME

ENV SUPABASE_URL ${SUPABASE_URL}
ENV SUPABASE_ANON_KEY ${SUPABASE_ANON_KEY}
ENV SUPABASE_STORAGE_HOSTNAME ${SUPABASE_STORAGE_HOSTNAME}

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]
