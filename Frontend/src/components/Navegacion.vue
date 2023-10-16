<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
      <router-link class="navbar-brand" to="/">Veterinaria</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/servicios">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/veterinarias">Veterinarias</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registro">Crear Cuenta</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Ingresar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navegacion",
});
</script>