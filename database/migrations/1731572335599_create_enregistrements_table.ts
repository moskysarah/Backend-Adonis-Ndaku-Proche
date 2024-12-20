import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enregistrements'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstName').notNullable()
      table.string('name').notNullable()
      table.string('postName').nullable()
      table.string('sexe').notNullable()
      table.date('dateDeNaissance').notNullable()
      table.string('lieu-de-naissance').notNullable()
      table.string('firstName-papa').notNullable()
      table.string('name-papa').notNullable()
      table.string('postName-papa').nullable()
      table.string('sexe-papa').notNullable()
      table.date('dateDeNaissance-papa').notNullable()
      table.string('profession-papa').nullable()
      table.string('nationalité-papa').notNullable()
      table.string('firstName-maman').notNullable()
      table.string('name-maman').notNullable()
      table.string('postName-maman').nullable()
      table.string('sexe-maman').notNullable()
      table.date('dateDeNaissance-maman').notNullable()
      table.string('profession-maman').nullable()
      table.string('nationalité-maman').notNullable()
      table.string('certificat-de-naissance-enfant').notNullable()
      table.string('certificat-de-naissance-papa').notNullable()
      table.string('certificat-de-naissance-maman').notNullable()
      table.integer('user_id').nullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('nouveauNés_id').nullable()
      table.foreign('nouveauNés_id').references('nouveau_nés.id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}