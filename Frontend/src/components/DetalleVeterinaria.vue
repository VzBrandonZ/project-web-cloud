<template>
  <div class="card card-body">
    <form @submit.prevent="btnActualizar()">
      <h4 class="card-title text-center">Detalle de la Veterinaria</h4>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>

      <div class="row">
        <div class="col">
          <label for="textInput">Nombre de la veterinaria</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí el nombre"
            type="text"
            v-model="veterinariaActual.nombre"
            autofocus
          />
        </div>
        <div class="col">
          <label for="textInput">Dirección</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí la dirección"
            type="text"
            v-model="veterinariaActual.direccion"
          />
        </div>
        <div class="col">
          <label for="textInput">Correo electrónico</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí el correo"
            type="text"
            v-model="veterinariaActual.correo"
          />
        </div>
        <div class="col">
          <label for="textInput">Número de contacto</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí el número de contacto"
            type="text"
            v-model="veterinariaActual.telefono"
          />
        </div>
      </div>

       <div class="row">
        <div class="col">
          <div class="card card-body">
            <div class="dropdown mb-1">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              >
                Seleccione los servicios
              </button>
              <table
                class="dropdown-menu table-hover"
                aria-labelledby="dropdownMenuButton1"
              >
                <tbody>
                  <tr
                    v-for="(servicio, index) in servicios"
                    :key="index"
                    @click="llenar(servicio._id)"
                    style="cursor: pointer"
                  >
                    <td class="dropdown-item">
                      {{ servicio.nombre }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row">
              <div class="row row mb-2">
                <div class="col">
                  <label for="textInput">Nombre del servicio</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="...cargando"
                    aria-label="First name"
                    v-model="servicioDB.nombre"
                    disabled
                  />
                </div>
                <div class="col">
                  <label for="textInput">Precio</label>

                  <input
                    type="textarea"
                    class="form-control"
                    placeholder="...cargando"
                    aria-label="First name"
                    v-model="servicioDB.precio"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="row row mb-2">
                <div class="col">
                  <label for="textInput">Descripción</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="...cargando"
                    aria-label="First name"
                    v-model="servicioDB.descripcion"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card card-body">
            Servicios seleccionados
            <div class="row">
              <div class="row row mb-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre del servicio"
                    aria-label="First name"
                    v-model="veterinariaActual.servicios"
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- botones -->
      <div class="row mt-2 mb-4">
        <div class="col">
          <button class="btn btn-success w-100 ">
            Actualizar datos
          </button>
        </div>
        <div class="col">
          <router-link
            @click="btnEliminar()"
            class="btn btn-danger w-100"
            to="/panel/listaveterinarias"
            >Eliminar
          </router-link>
        </div>
        <div class="col">
          <router-link class="btn btn-primary w-100" to="/panel"
            >Volver al panel</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IVeterinaria } from "../interfaces/IVeterinaria";
import { IServicio } from "../interfaces/IServicio";
import {
  eliminarVeterinaria,
  obtenerVeterinaria,
  actualizarVeterinaria,
} from "../services/VeterinariaService";
import { obtenerServicio, obtenerServicios } from "../services/ServicioService";

export default defineComponent({
  name: "veterinaria",
  data() {
    return {
      veterinariaActual: {} as IVeterinaria,
      servicios: [] as IServicio[],
      servicioDB: {} as IServicio
    };
  },
  methods: {
    async cargarVeterinaria(id: string) {
      try {
        const { data } = await obtenerVeterinaria(id);
        this.veterinariaActual = data;
      } catch (error) {
        console.error(error);
      }
    },
    async cargarServicios() {
      try {
        const res = await obtenerServicios();
        this.servicios = res.data;
        console.log(this.servicios);
      } catch (error) {
        console.error(error);
      }
    },
    async llenar(_id: string) {
      try {
        const { data } = await obtenerServicio(_id);
        this.servicioDB = data;
        //  agregar el dato extraido de la DB
        this.veterinariaActual.servicios.push(this.servicioDB._id);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async btnActualizar() {
      try {
        if (typeof this.$route.params.id === "string") {
        //this.veterinariaActual.servicios.shift();
          await actualizarVeterinaria(
            this.$route.params.id,
            this.veterinariaActual
          );
          this.$router.push("/panel/listaveterinarias");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async btnEliminar() {
      try {
        if (typeof this.$route.params.id === "string") {
          eliminarVeterinaria(this.$route.params.id);
          this.$router.push("/panel/listaveterinarias");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.cargarVeterinaria(this.$route.params.id);
      this.cargarServicios();
    }
  },
});
</script>
