import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator, registerValidator } from '../validators/auth.js'
import User from '../models/user.js'
import { log } from 'console';

export default class UsersController {
  async register({ request, response, auth  }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    log('validation successful, creating user');
    
    const user = await User.create(data)

    await auth.use('web').login(user)

    return response.redirect().toPath('/login')
} 

    async login({ request, response, auth }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator)

        const user = await User.verifyCredentials(email, password)
        await auth.use('web').login(user)

        return response.redirect().toPath('/')
    }

    async logout({ response, auth }: HttpContext) {
      await auth.use('web').logout()

      return response.redirect().toPath('/')
    }
    
}
