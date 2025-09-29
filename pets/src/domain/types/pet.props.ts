import { BaseEntity } from "src/shared/domain/entities/base.entity";

export type PetProps = BaseEntity & {
    name: string;
    type: string;
};