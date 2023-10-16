####  TRABAJO AUTÓNOMO II PARCIAL
#####  TEMA:
######  RESERVACIÓN DE SERVICIOS VETERINARIOS
###### GRUPO: 7
###### INTEGRANTES: 
- Chávez Paz José Bautista
- Eras Veliz Eliana Romina 
- Lucas Mero Leixer Steeven
- Quimis Anchundia Manuel Alejandro


------------
##### EJECUCIÓN DEL PROYECTO
###### POR MEDIO DE DOCKER
1.  Ejecutar el comando ``npm install`` o ``npm i`` para instalar todas los paquetes necesarios
2. Ejecutar el comando ``docker-compose build`` para construir los contenedores.
3. Ejecutar el comando ``docker images`` para comprobar que se hallan creado o ir a Docker Desktop
4. Ejecutar el comando ``docker-compose up`` para levantar los dockers que contienen el servicio monolítico y los microservicios.

###### EN MODO DESARROLLO
1.  Ejecutar el comando ``npm install`` o ``npm i`` para instalar todas los paquetes necesarios del Servidor y del Cliente.
2. Ejecutar el comando ``npm run dev`` para levantar el servicio monolitico.
3. Ejecutar el comando ``npm run serve`` para levantar el cliente que consumira el servicio monolitico.


###### CONFIGURACIÓN PARA LAS PETICIONES AL SERVIDOR
Por medio de Axios se utilizo lo siguiente:
- Instancia de axios

```javascript
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:2500/v1/sexto/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;

```

- Ejemplo de configuracion de peticiones de una ruta

```javascript
import { IServicio } from "@/interfaces/IServicio";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const obtenerServicios = async (): Promise<AxiosResponse<IServicio[]>> =>
  await axios.get("/servicios/");

export const obtenerServicio = async (
  id: string
): Promise<AxiosResponse<IServicio>> => await axios.get(`/servicios/${id}`);

export const crearServicio = async (servicio: IServicio): Promise<AxiosResponse> =>
  await axios.post("/servicios/", servicio);

export const actualizarServicio = async (
  id: string,
  newServicio: IServicio
): Promise<AxiosResponse<IServicio>> =>
  await axios.put(`/servicios/${id}`, newServicio);

export const eliminarServicio = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/servicios/${id}`);


```

###### CAPTURAS DE ALGUNAS VISTAS
Panel de opciones

[![panel.jpg](https://i.postimg.cc/hvXRns5q/panel.jpg)](https://postimg.cc/ctGbMRWD)

Nueva Veterinaria 

[![new-Veterinaria.jpg](https://i.postimg.cc/sfLRmFMf/new-Veterinaria.jpg)](https://postimg.cc/yW056bh2)

Lista de veterinarias

[![listVet.jpg](https://i.postimg.cc/qqWVvKP6/listVet.jpg)](https://postimg.cc/4HvF8YNX)

Detalle de la veterinaria

[![detalle-Vet.jpg](https://i.postimg.cc/4dLRjqw5/detalle-Vet.jpg)](https://postimg.cc/dkyfyWbk)

Nuevo servicio

[![new-Servicio.jpg](https://i.postimg.cc/Dyb3YCGr/new-Servicio.jpg)](https://postimg.cc/bs85Z93r)

Lista de servicios

[![listServ.jpg](https://i.postimg.cc/Qtxr4hgC/listServ.jpg)](https://postimg.cc/qtYYgf5H)

Detalle de servicio 

[![detalle-Serv.jpg](https://i.postimg.cc/25xD7VZg/detalle-Serv.jpg)](https://postimg.cc/CZdXFMJ4)

