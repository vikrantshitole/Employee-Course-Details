import { Response } from "express";
import XLSX from 'xlsx'
import { MulterRequest } from "../Interface/MulterRequest";
import Certifications from "../models/Certifications";
import { Certificate, newCertificate } from "../Interface/Certificate";
export const uploadCertificate = async (req: MulterRequest, res: Response) => {
  try {
    
    const workbook = XLSX.readFile(req.file.path);
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    const payload: newCertificate[] = xlData.map((d: Certificate)=>({
      name: d.Name,
      psno:d["PS NO"],
      certificate: d.Certificate
  
    }))
    await  Certifications.insertMany(payload);
    res.status(201).send("File Uploaded and data inserted")
  } catch (error) {
    console.log(error);
    res.status(400).send("Error while Uploading the file and data inserted")
    
  }
}