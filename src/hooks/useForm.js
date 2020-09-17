import { useState, useEffect } from 'react';
import validate from '../utility/validate';

const useForm = (submitCallback, inputValues, validateInputs) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (validateInputs) {
      setErrors(validate(values));
    }
    setIsSubmitting(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitCallback();
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, submitCallback]);

  return {
    values,
    handleChange,
    handleSubmit,
    errors
  }
}

export default useForm;