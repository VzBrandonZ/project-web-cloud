import { Router } from 'express';

// Importar las validaciones
import { validarUsuario } from '../validators/index';

// Importar las funciones del controlador para el usuario
import { Usuario } from '../controllers';
const {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    login
} = Usuario;

const router = Router();

// Rutas para el usuario
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', validarUsuario, crearUsuario);
router.put('/:id', validarUsuario, actualizarUsuario);
router.delete('/:id', eliminarUsuario);
router.post('/:nombref/:passwordf', login);

// Rutas a exportar
export { router }