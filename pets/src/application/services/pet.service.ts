import { PetEntity } from "src/domain/entities/pet.entity";
import { PetRepository } from "../../domain/repositories/pet.repository";
import { PetQueryFilter } from "src/domain/types/pet-query-filter";
import { MongoRepository } from "typeorm";
import { PetOrmEntity } from "src/infraestructure/orm/pet.orm.entity";

export class PetService implements PetRepository {
    constructor(
        private readonly repository: MongoRepository<PetOrmEntity>
    ) {}

    async save(entity: PetEntity): Promise<PetEntity> {
        const ormEntity = this.toOrmEntity(entity);
        const savedEntity = await this.repository.save(ormEntity);
        return this.toDomainEntity(savedEntity);
    }

    async update(id: string, entity: PetEntity): Promise<PetEntity> {
        const ormEntity = this.toOrmEntity(entity);
        await this.repository.update(id, ormEntity);
        return this.findById(id);
    }

    async delete(id: string): Promise<PetEntity> {
        const entity = await this.findById(id);
        await this.repository.delete(id);
        return entity;
    }

    async findById(id: string): Promise<PetEntity> {
        const entity = await this.repository.findOne({ where: { id } });
        if (!entity) {
            throw new Error(`Pet with id ${id} not found`);
        }
        return this.toDomainEntity(entity);
    }

    async findAll(queryParams?: PetQueryFilter): Promise<PetEntity[]> {
        const records = await this.repository.find();
        return records.map(record => this.toDomainEntity(record));
    }

    private toOrmEntity(domainEntity: PetEntity): PetOrmEntity {
        const ormEntity = new PetOrmEntity();
        ormEntity.id = domainEntity.id;
        ormEntity.name = domainEntity.name;
        ormEntity.type = domainEntity.type;
        return ormEntity;
    }

    private toDomainEntity(ormEntity: PetOrmEntity): PetEntity {
        return {
            id: ormEntity.id,
            name: ormEntity.name,
            type: ormEntity.type,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
}