import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'statistiques'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('statParAnnée').notNullable()
      table.string('nombresFilles').notNullable()
      table.string('nombresGarçons').notNullable()
      table.string('communesSurpeuplées').notNullable()

      table.integer('commune_id').nullable()
      table.foreign('commune_id').references('communes.id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}