<template>
  <div class="card card-body">
    <form @submit.prevent="guardarVeterinaria()">
      <h4 class="card-title text-center">Nueva Veterinaria</h4>
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
            v-model="veterinaria.nombre"
            autofocus
          />
        </div>
        <div class="col">
          <label for="textInput">Dirección</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí la dirección"
            type="text"
            v-model="veterinaria.direccion"
          />
        </div>
        <div class="col">
          <label for="textInput">Correo electrónico</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí el correo"
            type="text"
            v-model="veterinaria.correo"
          />
        </div>
        <div class="col">
          <label for="textInput">Número de contacto</label>
          <input
            class="form-control mb-3"
            placeholder="Ingrese aquí el número de contacto"
            type="text"
            v-model="veterinaria.telefono"
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
                    v-model="veterinaria.servicios"
                    disabled
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre del servicio"
                    aria-label="First name"
                    v-model="servicioDB.nombre"
                    disabled
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
            Guardar datos
          </button>
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
import { IServicio } from "../interfaces/IServicio";
import { IVeterinaria } from "../interfaces/IVeterinaria";
import { obtenerServicio, obtenerServicios } from "../services/ServicioService";
import { crearVeterinaria } from "../services/VeterinariaService";

export default defineComponent({
  name: "nuevaveterinaria",
  data() {
    return {
      /* veterinaria: {
        _id: "",
        nombre: "",
        direccion: "",
        telefono: "",
        correo: "",
        servicios: [""],
      } as IVeterinaria, */
      veterinaria: {
        nombre: "",
        direccion: "",
        telefono: "",
        correo: "",
        servicios: [``],
      } as IVeterinaria,
      servicios: [] as IServicio[],
      servicioDB: {} as IServicio,
    };
  },
  methods: {
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
        this.veterinaria.servicios.push(this.servicioDB._id);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async guardarVeterinaria() {
      try {
        //  borrar el primer dato antes de guardarlo
        this.veterinaria.servicios.shift();
        const res = await crearVeterinaria(this.veterinaria);
        console.log(res);
        this.$router.push({ name: "listaVeterinarias" });
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.cargarServicios();
  },
});
</script>
