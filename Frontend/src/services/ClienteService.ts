import { ICliente } from "@/interfaces/ICLiente";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const obtenerClientes = async (): Promise<AxiosResponse<ICliente[]>> =>
  await axios.get("/clientes/");

export const obtenerCliente = async (
  id: string
): Promise<AxiosResponse<ICliente>> => await axios.get(`/clientes/${id}`);

export const crearCliente = async (cliente: ICliente): Promise<AxiosResponse> =>
  await axios.post("/clientes/", cliente);

export const actualizarCliente = async (
  id: string,
  newCliente: ICliente
): Promise<AxiosResponse<ICliente>> =>
  await axios.put(`/clientes/${id}`, newCliente);

export const eliminarCliente = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/clientes/${id}`);

