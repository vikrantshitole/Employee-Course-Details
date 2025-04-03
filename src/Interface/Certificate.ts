export interface Certificate {
    Name: string,
    "PS NO": number,
    Certificate: string

}
export interface newCertificate {
    name: string,
    psno: number,
    certificate: string
    createdAt?: Date;
    updatedAt?: Date
}
