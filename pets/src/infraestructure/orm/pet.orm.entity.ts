import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity('pet')
export class PetOrmEntity {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    type: string;
}
