import { useState, useEffect } from 'react';
import { form } from '../enum/form';
import validate from '../utility/validate';

const useForm = (submitCallback, inputValues, formType) => {
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
    if (formType === form.SIGN_UP) {
      setErrors(validate(values, form.FULL_NAME, form.EMAIL, form.PASSWORD));
    }

    if (formType === form.SIGN_IN) {
      setErrors(validate(values, null, form.EMAIL, form.PASSWORD));
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