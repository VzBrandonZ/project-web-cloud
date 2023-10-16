import { Request, Response } from "express";
import { Usuario } from "../models/index";
import { IUsuario } from "../interfaces"

// Obtener usuarios
const obtenerUsuarios =async (req:Request, res:Response) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}


// Consultar un usuario por su id
const obtenerUsuario = async (req:Request, res:Response) => {
    const { id } = req.params;
    const usuario:IUsuario|null = await Usuario.findById(id)
    res.json(usuario);
}

// Registrar un usuario en la base de datos
const crearUsuario = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const usuario = new Usuario(body);
    const nuevoUsuario = await usuario.save();
    return res.status(201).json(nuevoUsuario);
}

// Actualizar un usuario por su id
const actualizarUsuario = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const usuarioModificado = await Usuario.findByIdAndUpdate(id, body, {new:true});
    res.json(usuarioModificado);
}

// Eliminar un usuario por su id
const eliminarUsuario = async (req:Request, res:Response) => {
    const { id } = req.params;
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    res.json(usuarioEliminado);
}

// Inicio de sesión al sistema
const login = async (req:Request, res:Response) => {
    const { nombref, passwordf } = req.params;
    const query = {
        nombre: nombref,
        password: passwordf,
        estado: true 
    };
    const usuarioEncontrado:IUsuario|null = await Usuario.findOne(query)
    if (usuarioEncontrado == null) {
        return res.json({error: 'Usuario no encontrado'});
    }
    return res.json(usuarioEncontrado);
}

// Módulos a exportar
export {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    login
}