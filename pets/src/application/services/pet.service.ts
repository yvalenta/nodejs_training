import { PetProps } from "src/domain/types/pet.props";
import { PetRepository } from "../../domain/repositories/pet.repository";
import { PetQueryFilter } from "src/domain/types/pet-query-filter";

export class PetService implements PetRepository {
    constructor(
        private readonly repository: PetRepository
    ) {}

    async findById(id: string): Promise<PetProps> {
        return this.repository.findById(id);
    }

    async findAll(queryParams?: PetQueryFilter): Promise<PetProps[]> {
        return this.repository.findAll(queryParams);
    }

    async save(entity: PetProps): Promise<PetProps> {
        return this.repository.save(entity);
    }

    async update(id: string, entity: PetProps): Promise<PetProps> {
        return this.repository.update(id, entity);
    }

    async delete(id: string): Promise<PetProps> {
        return this.repository.delete(id);
    }
}