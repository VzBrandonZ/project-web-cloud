<template>
  <div class="card card-body">
    <form @submit.prevent="guardarUsuario()">
      <h4 class="card-title my-3 text-center">Nuevo Usuario</h4>
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
              v-model="usuario.nombre"
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
                v-model="usuario.correo"
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
              v-model="usuario.cedula"
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
                v-model="usuario.telefono"
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
                v-model="usuario.password"
              />
              <label for="floatingInput">Mínimo 6 caracteres</label>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-2 mb-4">
        <div class="col">
          <button class="btn btn-success w-100 ">
            registrarse
          </button>
        </div>
        <div class="col">
          <router-link class="btn btn-primary w-100" to="/login"
            >ingresar</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUsuario } from "../interfaces/IUsuario";
import { crearUsuario } from "../services/UsuarioService";

export default defineComponent({
  name: "registro",
  data() {
    return {
      usuario: {} as IUsuario,
    };
  },
  methods: {
    async guardarUsuario() {
      try {
        const res = await crearUsuario(this.usuario);
        console.log(res);
        this.$router.push({ name: "login" });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
