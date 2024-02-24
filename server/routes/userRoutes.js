import express from 'express'
import {
  createUserAccount,
  verifyUserLogin,
  verifyEmailConfirmation,
  resendEmailConfirmation,
} from '../controllers/userControllers.js'

const router = express.Router()

router.put('/create', createUserAccount)
router.post('/verify', verifyUserLogin)
router.get('/confirmation/:token', verifyEmailConfirmation)
router.get('/resend', resendEmailConfirmation)

export default router
