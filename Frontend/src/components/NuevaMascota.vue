<template>
  <div class="container col-md-8 offset-2">
    <div class="card card-body">
      <form @submit.prevent="guardarMascota()">
        <h4 class="card-title my-3 text-center">Registrar Mascota</h4>
        <p class="placeholder-glow">
          <span class="placeholder col-12"></span>
        </p>
        <div class="row">
          <div class="col">
            <label for="textInput">Nombre de la mascota</label>
            <input class="form-control mb-3" placeholder="Ingrese aquí el nombre" type="text" v-model="mascota.nombre"
              autofocus />
          </div>
          <div class="col">
            <div class="col">
              <label for="textInput">Raza</label>
              <input class="form-control mb-3" placeholder="Ingrese aquí la raza" type="text" v-model="mascota.raza" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="col">
              <label for="textInput">Peso</label>
              <input class="form-control mb-3" placeholder="Ingrese aquí el peso" type="text" v-model="mascota.peso" />
            </div>
          </div>
          <div class="col">
            <div class="dropdown mb-1">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown">
                Dueño
              </button>
              <table class="dropdown-menu table-hover" aria-labelledby="dropdownMenuButton1">
                <tbody>
                  <tr v-for="(cliente, index) in clientes" :key="index" @click="llenar(cliente._id)"
                    style="cursor: pointer">
                    <td class="dropdown-item">
                      {{ cliente.nombre }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <input class="form-control mb-3" placeholder="Solo un valor númerico" type="text"
                v-model="clienteDB.nombre" />
            </div>
          </div>
        </div>

        <div class="row mt-2 mb-4">
          <div class="col">
            <button class="btn btn-success w-100 ">
              Registrar Mascota
            </button>
          </div>
          <div class="col">
            <router-link class="btn btn-primary w-100" to="/dashboar">Volver a dashboard</router-link>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMascota } from "../interfaces/IMascota";
import { crearMascota } from "../services/MascotaService";
import { ICliente } from "../interfaces/ICLiente";
import { obtenerCliente, obtenerClientes } from "../services/ClienteService";
export default defineComponent({
  name: "nueva-mascota",
  data() {
    return {
      mascota: {} as IMascota,
      clientes: [] as ICliente[],
      clienteDB: {} as ICliente,
    };
  },
  methods: {
    async guardarMascota() {
      try {
        const res = await crearMascota(this.mascota);
        console.log(res);
        this.$router.push({ name: "dashboar" });
      } catch (error) {
        console.error(error);
      }
    },
    async cargarClientes() {
      try {
        const res = await obtenerClientes();
        this.clientes = res.data;
        console.log(this.clientes);
      } catch (error) {
        console.error(error);
      }
    },
    async llenar(_id: string) {
      try {
        const { data } = await obtenerCliente(_id);
        this.clienteDB = data;
        //console.log(this.veterinariaDB);
        console.log(this.clienteDB);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.cargarClientes();
  },
});
</script>
