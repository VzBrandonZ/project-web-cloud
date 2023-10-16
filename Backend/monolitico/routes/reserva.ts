import { Router } from 'express';

// Importar las validaciones
import { validarReserva } from '../validators/index';

// Importar las funciones del controlador de reservaciones
import { Reserva } from '../controllers';
const {
    obtenerReservaciones,
    obtenerReservacion,
    crearReservacion,
    actualizarReservacion,
    eliminarReservacion
} = Reserva;

const router = Router();

// Rutas para la reservacion 
router.get('/', obtenerReservaciones);
router.get('/:id', obtenerReservacion);
router.post('/', validarReserva, crearReservacion);
router.put('/:id', validarReserva, actualizarReservacion);
router.delete('/:id', eliminarReservacion);

// Rutas a exportar
export { router }