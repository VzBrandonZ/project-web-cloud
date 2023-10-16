<template>
  <div class="container">
    <div>
      <p class="card-title text-center" style="font-size: 2.5rem">LISTA DE SERVICIOS</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="col"
        v-for="(servicio, index) in servicios"
        :key="index"
        style="cursor: pointer"
      >
        <div class="card h-100" style="background-color:#EDEDED">
          <img src="../assets/servicios/servicio.png" class="card-img-top"
          style="height: 8rem; width: 70%; margin-left: auto; margin-right: auto; margin-top: 10px; display: block;"/>
          <!-- <p class="card-img-top text-center"> {{ veterinaria.nombre }} </p> -->
          <div class="card-body text-center" >
            <h5 class="card-title">
              Nombre del Servicio
            </h5>
            <p class="card-text">{{ servicio.nombre }}</p>
            <h5 class="card-title">
              Descripción
            </h5>
            <p class="card-text">{{ servicio.descripcion }}</p>
            <h5 class="card-title">
              Precio
            </h5>
            <p class="card-text">{{ servicio.precio }}</p>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IServicio } from "../interfaces/IServicio";
import { obtenerServicios } from "../services/ServicioService";

export default defineComponent({
  name: "lista-servicios",
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
        console.log(this.servicios);
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
