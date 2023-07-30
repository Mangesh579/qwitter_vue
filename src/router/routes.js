const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PageHome.vue"),
        name: "Home",
      },
      {
        path: "/about",
        component: () => import("pages/PageAbout.vue"),
        name: "About",
      },
    ],
  },

  // Replace the catch-all route with a custom parameter
  {
    path: "/:catchAll(.*)", // Matches all routes
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
