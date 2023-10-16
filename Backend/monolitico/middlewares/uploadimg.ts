import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path = require("path");

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void
export const fileStorage = multer.diskStorage({});
export const fileFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype !== 'image/png' &&
        file.mimetype !== 'image/jpg' &&
        file.mimetype !== 'image/jpeg'
    ) {
        callback(null, false)
    } else {
        callback(null, true)
    }
}