<template>
  <div class="container">
    <h5 class="card-title text-center">Detalles de la reservación</h5>
    <div class="row">
      <form>
        <div class="row ">
          <div class="col">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title mb-4">Mis Datos</h5>
                <p class="card-text"></p>
                <div class="row row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cedula"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div class="row row mb-1">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Teléfono"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Correo"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <div class="row row mb-2">
                  <div class="col">
                    <div class="dropdown mb-1">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                      >
                        Seleccione el servicio
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li><a class="dropdown-item" href="#">Mascota 1</a></li>
                        <li><a class="dropdown-item" href="#">Mascota 2</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="row row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre del servicio"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Precio"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div class="row row mb-1">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Descripción"
                      aria-label="First name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                      >
                        Seleccione la mascota
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li><a class="dropdown-item" href="#">Mascota 1</a></li>
                        <li><a class="dropdown-item" href="#">Mascota 2</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="row row mb-2">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre de la mascota"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div class="row row mb-1">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Raza"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Peso"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <div class="row row mb-2">
                  <div class="col">
                    <div class="dropdown mb-1">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                      >
                        Seleccione la veterinaria
                      </button>

                      <table
                        class="dropdown-menu table-hover"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <tbody>
                          <tr
                            v-for="(veterinaria, index) in veterinarias"
                            :key="index"
                            @click="llenar(veterinaria._id)"
                            style="cursor: pointer"
                          >
                            <td
                              class="dropdown-item"
                            >
                              {{ veterinaria.nombre }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="row row mb-2">
                  <div class="col">
                    <input 
                      type="text"
                      class="form-control"
                      placeholder="Nombre del local"
                      aria-label="First name"
                      v-model="veterinariaDB.nombre" disabled
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Dirección"
                      aria-label="Last name"
                      v-model="veterinariaDB.direccion" disabled
                    />
                  </div>
                </div>
                <div class="row row mb-1">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Télefono"
                      aria-label="First name"
                      v-model="veterinariaDB.telefono" disabled
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Correo"
                      aria-label="Last name"
                      v-model="veterinariaDB.correo" disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="btn btn-primary w-50 ">
          Guardar reservación
        </button> -->
        <router-link class="btn btn-danger w-50" to="/panel/listareservaciones"
          >Volver</router-link
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IVeterinaria } from "../interfaces/IVeterinaria";
import {
  obtenerVeterinarias, obtenerVeterinaria
} from "../services/VeterinariaService";

export default defineComponent({
  name: "form-reservacion",
  data() {
    return {
      veterinarias: [] as IVeterinaria[],
      veterinariaDB: {} as IVeterinaria,
      todo: [] as IVeterinaria []
    };
  },
  methods: {
    async cargarVeteriarias() {
      try {
        const res = await obtenerVeterinarias();
        this.veterinarias = res.data;
        console.log(this.veterinarias);
      } catch (error) {
        console.error(error);
      }
    },
    async llenar(_id: string){
      try {
        const {data} = await obtenerVeterinaria(_id);
        this.veterinariaDB = data;
        //console.log(this.veterinariaDB);
        console.log(this.veterinariaDB);

      } catch (error) {
        console.error(error);
      }
    }
    /* llenar(_id: string){
      console.log(_id)
    } */
  },
  mounted() {
    this.cargarVeteriarias();
  },
});
</script>
