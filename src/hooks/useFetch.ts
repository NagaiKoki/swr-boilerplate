import useSWR, { KeyedMutator } from "swr";
import { Fetcher } from "swr/dist/types";

type FetchKeyType = `/todos/${number}`;

interface ArgsType<T> {
  key: FetchKeyType | null;
  fetcher: Fetcher<T> | null;
}

interface IResponse<T> {
  data: T | undefined;
  error: string | undefined;
  isValidating: boolean;
  mutate: KeyedMutator<T>;
}

export const useFetch = <T>({ key, fetcher }: ArgsType<T>): IResponse<T> => {
  const { data, error, isValidating, mutate } = useSWR<T, string>(key, fetcher);

  return {
    data,
    error,
    isValidating,
    mutate,
  } as const;
};
