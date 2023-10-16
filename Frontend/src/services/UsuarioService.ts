import { IUsuario } from "@/interfaces/IUsuario";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const obtenerUsuarios = async (): Promise<AxiosResponse<IUsuario[]>> =>
  await axios.get("/usuarios/");

export const obtenerUsuario = async (
  id: string
): Promise<AxiosResponse<IUsuario>> => await axios.get(`/usuarios/${id}`);

export const crearUsuario = async (usuario: IUsuario): Promise<AxiosResponse> =>
  await axios.post("/usuarios", usuario);

export const actualizarUsuario = async (
  id: string,
  newUsuario: IUsuario
): Promise<AxiosResponse<IUsuario>> =>
  await axios.put(`/usuarios/${id}`, newUsuario);

export const eliminarUsuario = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/usuarios/${id}`);

export const login = async (usuario:IUsuario): Promise<AxiosResponse> =>
  await axios.post(`/usuarios/${usuario.nombre}/${usuario.password}`, usuario);
