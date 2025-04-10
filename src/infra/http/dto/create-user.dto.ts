import { UploadedFile } from "src/core/interface/UploadedFile";

export interface CreateUserDTO {
    id?: string,
    email: string,
    name?: string,
    role: string,
    lastVisit: Date,
    isActive: Boolean,
    pictures: UploadedFile[],
}