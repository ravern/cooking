import useSWR from "swr";

export default function useRequest(key, fetcher) {
  const { data: swrData, error: swrError } = useSWR(key, fetcher);
  const { data, error } = swrData;
  return { data, error: swrError ?? error ?? undefined };
}
