<template>
  <div class="container">
    <h1>Dashboar</h1>
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Mis Datos</h5>

            <p class="card-text"></p>
            <div class="row row mb-2">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  aria-label="First name"
                  disabled
                  v-model="usuarios.nombre"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Cedula"
                  aria-label="Last name"
                  v-model="usuarios.cedula"
                  disabled
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
                  v-model="usuarios.telefono"
                  disabled
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Correo"
                  aria-label="Last name"
                  disabled
                />
              </div>
            </div>

            <a href="#" class="btn btn-primary">Actualizar</a>
            {{ usuarios[0] }}
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Mis mascotas</h5>
            <p class="card-text">
              AQUI VA UN FORMULARIO CON UN LISTADO DE LAS MASCOTAS QUE DEBEN
              ESTAR CARGADOS CUANDO SE INICIA AL DASHBOAR
            </p>
            <router-link class="btn btn-primary" to="/newmascota"
              >Nueva Mascota</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Mis Reservaciones</h5>
            <p class="card-text">
              AQUI VA UN FORMULARIO CON UN LISTADO DE LAS RESERVACIONES QUE
              DEBEN ESTAR CARGADOS CUANDO SE INICIA AL DASHBOAR
            </p>
            <router-link class="btn btn-primary" to="/newreservacion"
              >Reservar</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUsuario } from "../interfaces/IUsuario";
import { obtenerUsuarios } from "../services/UsuarioService";
export default defineComponent({
  name: "Dashboar",
  data() {
    return {
      usuarios: [] as IUsuario[],
    };
  },
  methods: {
    async cargarUsuarios() {
      try {
        const res = await obtenerUsuarios();
        this.usuarios = res.data;
        console.log(this.usuarios);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.cargarUsuarios();
  },
});
</script>
