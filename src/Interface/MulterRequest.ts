/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";

export interface MulterRequest extends Request {
    file: any;
}