import express from 'express';
import upload from '../ulits/multer';
import { uploadCertificate } from '../controller/certificateController';
const router = express.Router();
router.post('/uploads',upload.single('file'),uploadCertificate)
export default router;