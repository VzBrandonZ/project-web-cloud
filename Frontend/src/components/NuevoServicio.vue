<template>
  <div class="card card-body">
    <form @submit.prevent="guardarServicio()">
      <h4 class="card-title my-3 text-center">Nuevo Servicio</h4>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>

      <div class="row">
        <div class="col">
          <label for="textInput">Nombre del servicio</label>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="servicio.nombre"
            />
            <label for="floatingInput">Mínimo 5 caracteres</label>
          </div>
        </div>
        <div class="col">
          <div class="col">
          <label for="textInput">Precio</label>
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="servicio.precio"
            />
            <label for="floatingInput">Solo valores numéricos</label>
          </div>
        </div>
         
      </div>
      <div class="row">
         <label for="textInput">Descripción del servicio</label>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="servicio.descripcion"
            />
            <label for="floatingInput">Mínimo 5 caracteres</label>
          </div>
        </div>
        
      </div>

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
import { crearServicio } from "../services/ServicioService";

export default defineComponent({
  name: "nurva-veterinaria",
  data() {
    return {
      servicio: {} as IServicio,
    };
  },
  methods: {
    async guardarServicio() {
      try {
        const res = await crearServicio(this.servicio);
        console.log(res);
         this.$router.push({ name: "listaServicios" });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
