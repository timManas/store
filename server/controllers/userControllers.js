import mongoose from 'mongoose'

const createUserAccount = (req, res) => {
  res.send('Create User')
}

const verifyUserLogin = (req, res) => {
  res.send('Verify User Login')
}

const verifyEmailConfirmation = (req, res) => {
  res.send('Verify Email Token: ' + req.params.token)
}

const resendEmailConfirmation = (req, res) => {
  res.send('Resend Email Confirmation')
}

export {
  createUserAccount,
  verifyUserLogin,
  verifyEmailConfirmation,
  resendEmailConfirmation,
}
