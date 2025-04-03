import express from 'express';
import certificateRoute from './certificateRoute'
const router = express.Router();

router.use('/certificate',certificateRoute)

export default router;