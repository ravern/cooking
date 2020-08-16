import { useCallback, useState } from "react";

function useForm(props) {
  const { values: initialValues, onSubmit } = props;

  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);

  const setValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value,
      }));
    },
    [setValues]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await onSubmit(values);
      } catch (error) {
        setError(error);
      }
    },
    [values, onSubmit, setError]
  );

  const reset = useCallback(() => setValues(initialValues), [
    setValues,
    initialValues,
  ]);

  const onChange = (name) => (e) => {
    setValue(name, e.target.value);
  };

  return {
    error,
    setError,
    values,
    onSubmit: handleSubmit,
    onChange,
    setValue,
    reset,
  };
}

export default useForm;
