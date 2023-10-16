<template>
  <div class="container">
    <h1 class="text-center">Panel de administración</h1>
    <div class="row mt-1">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center m-4">Veterinarias</h5>
            <div class="d-grid gap-3">
              <router-link class="btn btn-primary" to="/panel/newveterinaria"
                >Nuevo</router-link
              >
              <router-link class="btn btn-primary" to="/panel/listaveterinarias"
                >Detalles</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center m-4">Servicios</h5>
            <div class="d-grid gap-3">
              <router-link class="btn btn-primary" to="/panel/newservicio"
                >Nuevo</router-link
              >
              <router-link class="btn btn-primary" to="/panel/listaservicios"
                >Detalles</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center m-4">Clientes</h5>
            <div class="d-grid gap-3">
              <router-link class="btn btn-primary" to="">Nuevo</router-link>
              <router-link class="btn btn-primary" to="/panel/listausuarios"
                >Detalles</router-link
              >
            </div>
          </div>
        </div>
      </div>

<div class="row mt-1">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center m-4">Reservaciones</h5>
            <div class="d-grid gap-3">
              <router-link class="btn btn-primary" to=""
                >Nuevo</router-link
              >
              <router-link class="btn btn-primary" to="/panel/listareservaciones"
                >Detalles</router-link
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUsuario } from "../interfaces/IUsuario";
export default defineComponent({
  name: "Opciones",
  data() {
    return {
      usuarios: [] as IUsuario[],
    };
  },
});
</script>
