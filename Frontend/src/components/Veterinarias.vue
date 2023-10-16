<template>
  <div class="container">
    <div>
      <p class="card-title text-center" style="font-size: 2.5rem">LISTA DE VETERINARIAS</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="col"
        v-for="(veterinaria, index) in veterinarias"
        :key="index"
        style="cursor: pointer"
      >
        <div class="card h-100" style="background-color:#EDEDED">
          <img src="../assets/vets/local.png" class="card-img-top"
          style="height: 14rem; width: 50%; margin-left: auto; margin-right: auto; display: block;"/>
          <!-- <p class="card-img-top text-center"> {{ veterinaria.nombre }} </p> -->
          <div class="card-body text-center">
            <h5 class="card-title">
              Nombre de la veterinaria
            </h5>
            <p class="card-text">{{ veterinaria.nombre }}</p>
            <h5 class="card-title">
              Dirección de la veterinaria
            </h5>
            <p class="card-text">{{ veterinaria.direccion }}</p>
            <h5 class="card-title">
              Teléfono
            </h5>
            <p class="card-text">{{ veterinaria.telefono }}</p>
            <h5 class="card-title">
              Correo
            </h5>
            <p class="card-text">{{ veterinaria.correo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IVeterinaria } from "../interfaces/IVeterinaria";
import { obtenerVeterinarias } from "../services/VeterinariaService";

export default defineComponent({
  name: "lista-veterinarias",
  data() {
    return {
      veterinarias: [] as IVeterinaria[],
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
  },
  mounted() {
    this.cargarVeteriarias();
  },
});
</script>
