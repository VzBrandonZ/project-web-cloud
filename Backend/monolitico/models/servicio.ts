import mongoose from "mongoose";

import { IServicio } from "./../interfaces/index";

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const servicioSchema: mongoose.Schema = new Schema<IServicio>(
  {
    nombre: {
      type: String,
      require: true,
    },
    descripcion: {
      type: String,
      require: true,
    },
    precio: {
      type: Number,
      require: true,
    },
    
  },
  {
    versionKey: false,
  }
);

// Exportar el modelo
const Servicio = mongoose.model<IServicio>("Servicio", servicioSchema);

export { Servicio };
