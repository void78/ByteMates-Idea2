import React from 'react'
import { Field, reduxForm } from 'redux-form'
import submit from './submit'
import { Redirect } from 'react-router-dom'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const UserLoginForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = props
  return (
      <div className="text-center">
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Log In
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
    {submitSucceeded && <Redirect to='/otp'/>}
    </div>
  )
}

export default reduxForm({
  form: 'userLoginForm' // a unique identifier for this form
})(UserLoginForm)