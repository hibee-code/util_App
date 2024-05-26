import { MigrationInterface, QueryRunner } from "typeorm";

export class Sh1716743959159 implements MigrationInterface {
    name = 'Sh1716743959159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "utility" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "capacity" numeric NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "PK_a231216e3ba8155f6b027f8d731" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "utility"`);
    }

}
