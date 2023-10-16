<template>
<div class="container">
    <div>
      <h4 class="fw-bold text-center">Listado de Usuarios</h4> 
      <router-link class="btn btn-primary"  to="/panel"
                >Volver al panel</router-link
              >
    </div>
    <table class="table table-hover" id="table_id" >
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Cedula</th>
          <th scope="col">Teléfono</th>
          <th scope="col">pass</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(usuario, index) in usuarios"
          :key="index"
          @click="$router.push(`/panel/listausuarios/${usuario._id}`)"
          style="cursor: pointer"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.correo }}</td>
          <td>{{ usuario.cedula }}</td>
          <td>{{ usuario.telefono }}</td>
          <td>{{ usuario.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { IUsuario } from "../interfaces/IUsuario";
import { obtenerUsuarios } from "../services/UsuarioService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "lista-usuario",
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
