import { MigrationInterface, QueryRunner } from "typeorm";

export class Sh1716770101214 implements MigrationInterface {
    name = 'Sh1716770101214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "room" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "capacity" numeric NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "room"`);
    }

}
