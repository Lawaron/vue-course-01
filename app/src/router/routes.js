export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginView.vue'),
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('@/views/auth/SignUpView.vue'),
  },
  {
    path: '/movies/create',
    name: 'CreateMovie',
    component: () => import('@/views/movies/CreateMovieView.vue'),
  },
]
