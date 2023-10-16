import { Router } from 'express';

// Importar las validaciones
import { validarCliente } from '../validators/index';

// Importar las funciones del controlador del cliente
import { Cliente } from '../controllers';
const {
    obtenerClientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
} = Cliente;

const router = Router();

// Rutas para el cliente
router.get('/', obtenerClientes);
router.get('/:id', obtenerCliente);
router.post('/', validarCliente, crearCliente);
router.put('/:id', validarCliente, actualizarCliente);
router.delete('/:id', eliminarCliente);

// Rutas a exportar
export { router }