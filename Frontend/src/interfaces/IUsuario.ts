export interface IUsuario {
    id: string;
    nombre: string,
    password: string,
    cedula: String,
    telefono: String,
    correo: String,
    mascotas: string[],
    reservaciones:string[]
}