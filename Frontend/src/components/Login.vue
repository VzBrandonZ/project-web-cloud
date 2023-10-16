<template>
  <div class="col-md-4 offset-4">
    <div class="card card-body">
      <h1 class="card-title my-1 text-center">Login</h1>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
      </p>
      <form @submit.prevent="enviarDatos()">
        <label for="textInput">Corre electrónico</label>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">ejemplo@ejemplo.com</label>
        </div>
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
        <div class="row mt-2 mb-4">
          <div class="col">
            <router-link class="btn btn-success w-100" to="/login"
              >ingresar</router-link
            >
          </div>
          <div class="col">
            <router-link class="btn btn-primary w-100" to="/registro"
              >registrarse</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IUsuario } from "../interfaces/IUsuario";
import { login } from "../services/UsuarioService";

export default defineComponent({
  name: "login",
  data() {
    return {
      usuario: {} as IUsuario,
    };
  },
  methods: {
    async enviarDatos() {
      try {
        const res = await login(this.usuario);
        console.log(res);

        this.$router.push({ name: "dashboar" });

      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
