import { IVeterinaria } from "@/interfaces/IVeterinaria";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const obtenerVeterinarias = async (): Promise<AxiosResponse<IVeterinaria[]>> =>
  await axios.get("/locales/");

export const obtenerVeterinaria = async (
  id: string
): Promise<AxiosResponse<IVeterinaria>> => await axios.get(`/locales/${id}`);

export const crearVeterinaria = async (veterinaria: IVeterinaria): Promise<AxiosResponse> =>
  await axios.post("/locales", veterinaria);

export const actualizarVeterinaria = async (
  id: string,
  newVeterinaria: IVeterinaria
): Promise<AxiosResponse<IVeterinaria>> =>
  await axios.put(`/locales/${id}`, newVeterinaria);

export const eliminarVeterinaria = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/locales/${id}`);

