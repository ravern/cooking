import { useCallback, useEffect, useState } from "react";

export type UseFormArgs<Values> = {
  initialValues: Values;
  onSubmit: (values: Values) => Promise<void> | void;
};

export type UseFormResult<Values> = {
  values: Values;
  setValue: (key: string, value: Values[keyof Values]) => void;
  error: Error | null;
  setError: (error: Error) => void;
  onChange: (
    key: string,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function useForm<Values>({
  initialValues,
  onSubmit,
}: UseFormArgs<Values>): UseFormResult<Values> {
  const [values, setValues] = useState<Values>(initialValues);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues, setValues]);

  const setValue = useCallback(
    (key: string, value: Values[keyof Values]) => {
      setValues((values) => ({
        ...values,
        [key]: value,
      }));
    },
    [setValues],
  );

  const handleChange = useCallback(
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof (values as { [key: string]: any })[key] !== "string") {
        return;
      }
      setValue(key, event.target.value as any as Values[keyof Values]);
    },
    [values, setValue],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const promise = onSubmit(values);
    if (promise instanceof Promise) {
      try {
        await promise;
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          throw error;
        }
      }
    }
  };

  return {
    values,
    setValue,
    error,
    setError,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
}
