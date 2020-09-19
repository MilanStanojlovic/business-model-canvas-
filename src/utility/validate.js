const validate = (values, firstName, email, password) => {

  const errors = {};

  if (firstName) {
    if (!values.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }
  }

  if (email) {
    if (!values.email) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid.';
    }
  }

  if (password) {
    if (!values.password) {
      errors.password = 'Password is required.';
    } else if (values.password.length < 6) {
      errors.password = "Password needs to have at least 6 characters."
    }
  }

  return errors;
}

export default validate;