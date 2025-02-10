import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1738844802479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       console.log("Running migration: Creating usernew table");
        await queryRunner.query(`
            CREATE TABLE "usernew" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(100) NOT NULL,
                "email" VARCHAR(100) UNIQUE NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
