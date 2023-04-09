import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Quizzes",
      component: () =>
        import(/*chunkName: "Quizzes" */ "../views/QuizzesView.vue"),
      meta: {
        title: "Quizzes",
      },
    },
    {
      path: "/questions/:name/:id",
      name: "Subject",
      component: () =>
        import(/*chunkName: "Subject" */ "../views/SubjectView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // make the title from kebab case to title case
  const titleFromParams = to.params.name ?? `Home`;

  if (titleFromParams) {
    document.title = `${titleFromParams
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} - Quizzes`;
  }
  // Continue resolving the route
  next();
});
export default router;
