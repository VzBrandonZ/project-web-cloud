import { Request, Response } from "express";
import { Local } from "../models/index";
import { ILocal } from "../interfaces"

// Consultar los locales registrados
const obtenerLocales =async (req:Request, res:Response) => {
    const locales = await Local.find();
    res.json(locales);
}

// Consultar un local por su id
const obtenerLocal = async (req:Request, res:Response) => {
    const { id } = req.params;
    const local:ILocal|null =
    await Local
    .findById(id)
    res.json(local);
}

//  Registrar un local en la base de datos
const crearLocal = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const local = new Local(body);
    const nuevoLocal = await local.save();
    return res.status(201).json(nuevoLocal);
}

// Actualizar un local por su id
const actualizarLocal = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const localModificado = await Local.findByIdAndUpdate(id, body, {new:true});
    res.json(localModificado);
}

// Eliminar un local por su id
const eliminarLocal = async (req:Request, res:Response) => {
    const { id } = req.params;
    const localEliminado = await Local.findByIdAndDelete(id);
    res.json(localEliminado);
}

// Módulos a exportar
export {
    obtenerLocales,
    obtenerLocal,
    crearLocal,
    actualizarLocal,
    eliminarLocal
}