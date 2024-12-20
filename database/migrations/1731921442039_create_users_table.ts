import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('adress_id').nullable().after('password')

      table.foreign('adress_id').references('id').inTable('adresses').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['adress_id'])

      table.dropColumn('adress_id')
    })
  }
}
