import { Injectable } from "@nestjs/common";
import { CreatePetDto } from "./create-pet.dto";

@Injectable()
export class PetsService {
    private pets: CreatePetDto[] = [];
    
    getPets(): string[] {
        return ['cat', 'dog', 'bird'];
    }

    createPet(createPetDto: CreatePetDto) {
        const newPet = {
            ...createPetDto,
            id: Math.random().toString(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.pets.push(newPet);
        return newPet;
    }
}
