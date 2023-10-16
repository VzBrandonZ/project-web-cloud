<template>
  <div class="container">
    <div>
      <h4 class="fw-bold text-center">Lista de Servicios</h4> 
      <router-link class="btn btn-primary"  to="/panel"
                >Volver al panel</router-link
              >
    </div>
    <table class="table table-hover" id="table_id" >
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col text-center">Descripcion</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(servicio, index) in servicios"
          :key="index"
          @click="this.$router.push(`/panel/listaservicios/${servicio._id}`)"
          style="cursor: pointer"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ servicio.nombre }}</td>
          <td>{{ servicio.descripcion }}</td>
          <td>$ {{ servicio.precio }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { IServicio } from "../interfaces/IServicio";
import { obtenerServicios } from "../services/ServicioService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "lista-servicio",
  data() {
    return {
      servicios: [] as IServicio[],
    };
  },
  methods: {
    async cargarServicios() {
      try {
        const res = await obtenerServicios();
        this.servicios = res.data;
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
