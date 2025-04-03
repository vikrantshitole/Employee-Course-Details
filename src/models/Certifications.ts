import mongoose from "mongoose";
import { newCertificate } from "../Interface/Certificate";
const Certification = {
    name: String,
    psno: Number,
    certificate: String,
    createdAt: Date,
    updatedAt: Date
}
const CertificateSchema = new mongoose.Schema<newCertificate>(Certification,{timestamps: true});

export default mongoose.model("Certification", CertificateSchema);
