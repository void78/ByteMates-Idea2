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

const OtpForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, submitSucceeded} = props
  return (
    <div>
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="otp"
        type="password"
        component={renderField}
        label="OTP"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
    {submitSucceeded && <Redirect to='/home/profile'/>}
    </div>
  )
}

export default reduxForm({
  form: 'otpForm' // a unique identifier for this form
})(OtpForm)