<template>
  <div class="card card-body">
    <form @submit.prevent="btnActualizar()">
      <h4 class="card-title my-3 text-center">Detalle del Servicio</h4>
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
              v-model="servicioActual.nombre"
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
              v-model="servicioActual.precio"
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
              v-model="servicioActual.descripcion"
            />
            <label for="floatingInput">Mínimo 5 caracteres</label>
          </div>
        </div>
      </div>

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
            to="/panel/listaservicios"
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
import { IServicio } from "../interfaces/IServicio";
import {
  eliminarServicio,
  obtenerServicio,
  actualizarServicio,
} from "../services/ServicioService";

export default defineComponent({
  name: "servicio",
  data() {
    return {
      servicioActual: {} as IServicio,
    };
  },
  methods: {
    async cargarServicio(id: string) {
      try {
        const { data } = await obtenerServicio(id);
        this.servicioActual = data;
      } catch (error) {
        console.error(error);
      }
    },
    async btnActualizar() {
      try {
        if (typeof this.$route.params.id === "string") {
          await actualizarServicio(this.$route.params.id, this.servicioActual);
          this.$router.push("/panel/listaservicios");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async btnEliminar() {
      try {
        if (typeof this.$route.params.id === "string") {
          eliminarServicio(this.$route.params.id);
          this.$router.push("/panel/listaservicios");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.cargarServicio(this.$route.params.id);
    }
  },
});
</script>
