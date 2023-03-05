import {
  createRouter,
  createWebHistory
} from "vue-router";
import QuizzesView from '../views/QuizzesView.vue'
import SubjectView from '../views/SubjectView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'Quizzes',
    component: QuizzesView
  }, {
    path: '/subject/:name/:id',
    name: 'Subject',
    component: SubjectView
  }, ]
})

export default router