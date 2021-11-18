const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class init1637261696875 {
    name = 'init1637261696875'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
