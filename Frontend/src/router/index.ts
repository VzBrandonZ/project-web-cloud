import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  //  Rutas publicas
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/login",
    //alias: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/registro",
    alias: "/registro",
    name: "registro",
    component: () => import("../components/NuevaCuenta.vue"),
  },
  {
    path: "/veterinarias",
    alias: "/veterinarias",
    name: "lista-veterinarias",
    component: () => import("../components/Veterinarias.vue"),
  },
  {
    path: "/servicios",
    alias: "/servicios",
    name: "lista-servicios",
    component: () => import("../components/Servicios.vue"),
  },

  // Rutas solo para usuarios registrados
  {
    path: "/dashboar/",
    alias: "/dashboar/",
    name: "dashboar",
    component: () => import("../components/Dashboar.vue"),
  },
  {
    path: "/newmascota",
    alias: "/newmascota",
    name: "nueva-mascota",
    component: () => import("../components/NuevaMascota.vue"),
  },
  {
    path: "/newreservacion/",
    alias: "/newreservacion/",
    name: "form-reservacion",
    component: () => import("../components/FormReservacion.vue"),
  },

  // Rutas para administrar veterinarias, servicios y reservaciones
  {
    path: "/panel",
    alias: "/panel",
    name: "panel",
    component: () => import("../components/Panel.vue"),
  },
  {
    path: "/panel/newveterinaria",
    alias: "/panel/newveterinaria",
    name: "nueva-veterinaria",
    component: () => import("../components/NuevaVeterinaria.vue"),
  },
  {
    path: "/panel/listaveterinarias",
    alias: "/panel/listaeterinarias",
    name: "listaVeterinarias",
    component: () => import("../components/ListaVeterinarias.vue"),
  },
  {
    path: "/panel/listaveterinarias/:id",
    alias: "/veterinarias/:id",
    name: "veterinaria-details",
    component: () => import("../components/DetalleVeterinaria.vue"),
  },
  {
    path: "/panel/newservicio",
    alias: "/panel/newservicio",
    name: "nuevo-servicio",
    component: () => import("../components/NuevoServicio.vue"),
  },
  {
    path: "/panel/listaservicios",
    alias: "/panel/listaservicios",
    name: "listaServicios",
    component: () => import("../components/ListaServicios.vue"),
  },
  {
    path: "/panel/listaservicios/:id",
    alias: "/panel/listaservicios/:id",
    name: "servicios-details",
    component: () => import("../components/DetalleServicio.vue"),
  },
  // crear usuario
  {
    path: "/panel/listausuarios",
    alias: "/panel/listausuarios",
    name: "lista-usuarios",
    component: () => import("../components/ListaUsuarios.vue"),
  },
  {
    path: "/panel/listausuarios/:id",
    alias: "/panel/listausuarios/:id",
    name: "detalle-usuario",
    component: () => import("../components/DetalleUsuario.vue"),
  },
  {
    path: "/panel/listareservaciones",
    alias: "/panel/listareservaciones",
    name: "lista-reservaciones",
    component: () => import("../components/ListaReservaciones.vue"),
  },
  {
    path: "/panel/listareservaciones/:id",
    alias: "/panel/listareservaciones/:id",
    name: "detalle-reservaciones",
    component: () => import("../components/DetalleReservaciones.vue"),
  },
  {
    path: "/",
    alias: "/prueba",
    name: "prueba",
    component: () => import("../components/Prueba.vue"),
  },
  
];

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
