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

