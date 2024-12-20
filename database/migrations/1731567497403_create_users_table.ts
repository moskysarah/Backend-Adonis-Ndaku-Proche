import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('first_name').notNullable()
      table.string('name').notNullable()
      table.string('post_name').nullable()
      table.enu('sexe', ['male', 'female']).defaultTo('male')
      table.date('date_de_naissance').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('avatar').nullable()
      table.string('telephone').notNullable()
      table.string('password').notNullable()
      table.enu('role', ['admin', 'parent']).defaultTo('parent')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}