import Schema from 'mongoose';

export interface ILocal {
    servicios:[Schema.Types.ObjectId],
    nombre: String,
    direccion: String,
    telefono: String,
    correo: String,
}