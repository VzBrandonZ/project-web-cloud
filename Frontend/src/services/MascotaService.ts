import { IMascota } from "@/interfaces/IMascota";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const obtenerMascotas = async (): Promise<AxiosResponse<IMascota[]>> =>
  await axios.get("/mascotas/");

export const obtenerMascota = async (
  id: string
): Promise<AxiosResponse<IMascota>> => await axios.get(`/mascotas/${id}`);

export const crearMascota = async (mascota: IMascota): Promise<AxiosResponse> =>
  await axios.post("/mascotas/", mascota);

export const actualizarMascota = async (
  id: string,
  newMascota: IMascota
): Promise<AxiosResponse<IMascota>> =>
  await axios.put(`/mascotas/${id}`, newMascota);

export const eliminarMascota = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/mascotas/${id}`);

