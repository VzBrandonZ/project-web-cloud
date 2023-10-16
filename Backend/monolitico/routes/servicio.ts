import { Router } from 'express';

// Importar las validaciones
import { validarServicio } from '../validators/index';

// Importar las funciones del controlador de servicios
import { Servicio } from '../controllers';
const {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    eliminarServicio
} = Servicio;

const router = Router();

// Rutas para los servicios
router.get('/', obtenerServicios);
router.get('/:id', obtenerServicio);
router.post('/', validarServicio, crearServicio);
router.put('/:id', validarServicio, actualizarServicio);
router.delete('/:id', eliminarServicio);

// Rutas a exportar
export { router }