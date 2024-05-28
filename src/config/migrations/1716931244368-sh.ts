import { MigrationInterface, QueryRunner } from "typeorm";

export class Sh1716931244368 implements MigrationInterface {
    name = 'Sh1716931244368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "room" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "capacity" numeric NOT NULL, "userId" bigint NOT NULL, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "room"`);
    }

}
