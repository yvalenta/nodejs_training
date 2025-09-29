import { PetService } from "src/application/services/pet.service";
import { PetQueryFilter } from "src/domain/types/pet-query-filter";

export class GetPetUseCase {
    constructor(
        private readonly petService: PetService
    ) {}

    async execute(queryParams: PetQueryFilter) {
        return this.petService.findAll(queryParams);
    }
}