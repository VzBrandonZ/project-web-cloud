<template>
  <div class="card card-body">
    <form @submit.prevent="btnActualizar()">
      <h4 class="card-title my-3 text-center">Detalle del Usuario</h4>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>
      <div class="row">
        <div class="col">
          <label for="textInput">Nombre del Usuario</label>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="usuarioActual.nombre"
            />
            <label for="floatingInput">Mínimo 5 caracteres</label>
          </div>
        </div>
        <div class="col">
          <div class="col">
            <label for="textInput">Corre electrónico</label>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="usuarioActual.correo"
              />
              <label for="floatingInput">Mínimo 5 caracteres</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="textInput">Cédula</label>
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="usuarioActual.cedula"
            />
            <label for="floatingInput">Solo 10 caracteres</label>
          </div>
        </div>
        <div class="col">
          <div class="col">
            <label for="textInput">Teléfono</label>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="usuarioActual.telefono"
              />
              <label for="floatingInput">Solo 10 caracteres</label>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="col">
            <label for="textInput">Contraseña</label>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="usuarioActual.password"
              />
              <label for="floatingInput">Mínimo 6 caracteres</label>
            </div>
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
import { IUsuario } from "../interfaces/IUsuario";
import {
  eliminarUsuario,
  obtenerUsuario,
  actualizarUsuario,
} from "../services/UsuarioService";

export default defineComponent({
  name: "usuario",
  data() {
    return {
      usuarioActual: {} as IUsuario,
    };
  },
  methods: {
    async cargarUsuario(id: string) {
      try {
        const { data } = await obtenerUsuario(id);
        this.usuarioActual = data;
      } catch (error) {
        console.error(error);
      }
    },
    async btnActualizar() {
      try {
        if (typeof this.$route.params.id === "string") {
          await actualizarUsuario(this.$route.params.id, this.usuarioActual);
          this.$router.push("/panel/listausuarios");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async btnEliminar() {
      try {
        if (typeof this.$route.params.id === "string") {
          eliminarUsuario(this.$route.params.id);
          this.$router.push("/panel/listausuarios");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.cargarUsuario(this.$route.params.id);
    }
  },
});
</script>
