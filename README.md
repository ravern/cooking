# Butler Events

Consumer website for the Butler platform.

## Development

Remember to set up the environment file before you begin development.

```
cp .env.example .env
```

In order to generate the appropriate TypeScript definitions for the resolvers, `apollo client:codegen` is used. Whenever the GraphQL schema is modified, the following command needs to be run to update the generated definitions.

```
yarn generate
```

You should then run the following command to begin development.

```
yarn dev
```
