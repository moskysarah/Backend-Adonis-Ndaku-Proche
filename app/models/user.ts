import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'first_name' })
  declare firstName: string

  @column()
  declare name: string

  @column({ columnName: 'post_name' })
  declare postName: string

  @column()
  declare sexe: 'male' | 'female'

  @column({ columnName: 'date_de_naissance' })
  declare dateDeNaissance: string

  @column()
  declare email: string

  @column({ columnName: 'telephone' })
  declare téléphone: string

  @column()
  declare avatar: string

  @column()
  declare password: string

  @column()
  declare adress_id: string

  @column()
  public role: 'admin' | 'parent' = 'parent' 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  
}