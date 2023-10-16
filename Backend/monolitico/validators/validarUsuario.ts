import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarUsuario = [
    // Validar el nombre del usuario
    check('nombre')
        .trim()
        .exists()
        .isString()
        .isLength({min:5, max:20})
        .withMessage('El nombre debe tener un mínimo 5 y máximo de 20 caracteres'),
    // Validar la contraseña del usuario
    check('password')
        .trim()
        .exists()
        .isString()
        .isLength({min:6, max:25})
        .withMessage('La contraseña debe tener un mínimo 6 y máximo de 25 caracteres'),
    
    // Validar la cédula del cliente
    check('cedula')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('La cédula debe tener un mínimo y máximo de 10 caracteres'),

    // Validar el teléfono del cliente
    check('telefono')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('El número de teléfono debe tener un mínimo y máximo de 10 caracteres'),

    // Validar el correo del cliente
    check('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es inválido'),

    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]


export { validarUsuario }