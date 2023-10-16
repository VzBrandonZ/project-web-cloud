<template>
  <div class="container">
    <div>
      <h4 class="fw-bold text-center">Lista de Reservaciones</h4> 
      <router-link class="btn btn-primary"  to="/panel"
                >Volver al panel</router-link
              >
    </div>
    <table class="table table-hover" id="table_id" >
      <thead class="table-light">
        <tr>
          <th class="encLista" scope="col">#</th>
          <th class="encLista" scope="col">Nombre</th>
          <th class="encLista" scope="col">Dirección</th>
          <th class="encLista" scope="col">Telefono</th>
          <th class="encLista" scope="col">Correo</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(veterinaria, index) in veterinarias"
          :key="index"
          @click="this.$router.push(`/panel/listareservaciones/${veterinaria._id}`)"
          style="cursor: pointer"
        >
          <th class="detLista" scope="row">{{ index + 1 }}</th>
          <td class="detLista">{{ veterinaria.nombre }}</td>
          <td class="detLista">{{ veterinaria.direccion }}</td>
          <td class="detLista">{{ veterinaria.telefono }}</td>
          <td class="detLista">{{ veterinaria.correo }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { IVeterinaria } from "../interfaces/IVeterinaria";
//import { IMascota } from "../interfaces/IMascota";
import { obtenerVeterinarias } from "../services/VeterinariaService";
//import { obtenerMascota } from "../services/MascotaServico";
import { defineComponent } from "vue";


export default defineComponent({
  name: "lista-veterinaria",
  data() {
    return {
      veterinarias: [] as IVeterinaria[],
      //mascotas: [] as IMascota[]
    };
  },
  methods: {
    async cargarVeterinarias() {
      try {
        const res = await obtenerVeterinarias();
        this.veterinarias = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    /* async cargarMascota(id: string) {
      try {
        const { data } = await obtenerMascota(id);
        this.mascotas = data;
      } catch (error) {
        console.error(error);
      }
    }, */
  },
  mounted() {
    this.cargarVeterinarias();
  },
});
</script>
<style>
  .encLista{
    text-align: center;
  }
  .detLista{
    text-align: center;
  }
</style>