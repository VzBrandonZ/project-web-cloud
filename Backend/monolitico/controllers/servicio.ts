import { Request, Response } from "express";
import { Servicio } from "../models/index";
import { IServicio } from "../interfaces"

// Consultar los servicios registrados
const obtenerServicios =async (req:Request, res:Response) => {
    const servicios = await Servicio.find();
    res.json(servicios);
}


// Consultar un servicio por su id
const obtenerServicio = async (req:Request, res:Response) => {
    const { id } = req.params;
    const servicio:IServicio|null =
    await Servicio
            .findById(id)
            
    res.json(servicio);
}

// Registrar un servicio en la base de datos
const crearServicio = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const servicio = new Servicio(body);
    const nuevoServicio = await servicio.save();
    return res.status(201).json(nuevoServicio);
}

// Actualizar un servicio por su id
const actualizarServicio = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const servicioModificado = await Servicio.findByIdAndUpdate(id, body, {new:true});
    res.json(servicioModificado);
}

// Eliminar un servicio por su id
const eliminarServicio = async (req:Request, res:Response) => {
    const { id } = req.params;
    const servicioEliminado = await Servicio.findByIdAndDelete(id);
    res.json(servicioEliminado);
}

// Módulos a exportar
export {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    eliminarServicio
}