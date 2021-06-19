import { useCallback } from "react";
import useSWR from "swr";

export default function useRequest(key, fetcher) {
  const { data: swrData, error: swrError, mutate } = useSWR(key, fetcher);
  const { data, error } = swrData ?? {};
  const refetch = useCallback(() => mutate(), [mutate]);
  return { data, error: swrError ?? error ?? undefined, mutate, refetch };
}
