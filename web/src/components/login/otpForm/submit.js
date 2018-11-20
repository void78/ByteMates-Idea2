import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (values.otp !== '4321') {
      throw new SubmissionError({
        otp: 'Wrong Otp',
        _error: 'Login failed!'
      })
    }
  })
}

export default submit