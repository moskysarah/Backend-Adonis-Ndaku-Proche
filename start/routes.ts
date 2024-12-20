/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import ('#controllers/users_controller')

router.get('/', async ({ response }) => {
  return response.send({
    message: 'Bienvenue sur l\'API AdonisJS !',
    endpoints: {
      users: 'http://localhost:3333/users',
      login:'http://localhost:3333/login',
    }  
  })
})



router.group(() => {
  router.post('/register', [UsersController, 'register']).as('register.store')

  router.post('/login', [UsersController, 'login']).as('login.store')

  router.post('/logout', [UsersController, 'logout']).as('logout')

}).as('auth')