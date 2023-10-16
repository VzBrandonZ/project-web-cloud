import { Router } from 'express';

// Importar las validaciones
import { validarVeterinario } from '../validators/index';

// Importar las funciones del controlador de veterinarios
import { Veterinarios } from '../controllers';
const {
    obtenerVeterinarios,
    obtenerVeterinario,
    crearVeterinario,
    actualizarVeterinario,
    eliminarVeterinario
} = Veterinarios;

const router = Router();

// Rutas para el veterinario
router.get('/', obtenerVeterinarios);
router.get('/:id', obtenerVeterinario);
router.post('/', validarVeterinario, crearVeterinario);
router.put('/:id', validarVeterinario, actualizarVeterinario);
router.delete('/:id', eliminarVeterinario);

// Rutas a exportar
export { router }