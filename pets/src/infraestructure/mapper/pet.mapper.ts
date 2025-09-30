import { PetEntity } from "src/domain/entities/pet.entity";

export class PetMapper {
    static toDomain(entity: PetEntity): PetEntity {
        return {
            id: entity.id,
            name: entity.name,
            type: entity.type,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt
        };
    }

    static toPersistence(entity: PetEntity): PetEntity {
        return {
            id: entity.id,
            name: entity.name,
            type: entity.type,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt
        };
    }
}
