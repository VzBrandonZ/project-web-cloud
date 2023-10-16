import mongoose from "mongoose";

import { IUsuario } from "./../interfaces/index";

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const usuarioSchema: mongoose.Schema = new Schema<IUsuario>(
  {
    nombre: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    cedula: {
      type: String,
      require: true,
    },
    telefono: {
      type: String,
      require: true,
    },
    correo: {
      type: String,
      require: true,
    },
    mascotas: [
        {
            type: Schema.Types.ObjectId,
            ref: "Mascota",
            
        }
    ],
    reservaciones: [
        {
            type: Schema.Types.ObjectId,
            ref: "Reserva"
        }
    ],
    
  },
  {
    versionKey: false,
  }
);

// Exportar el modelo
const Usuario = mongoose.model<IUsuario>("Usuario", usuarioSchema);

export { Usuario };
