import { Injectable } from "@nestjs/common";
import { CreatePetDto } from "./create-pet.dto";
import { UpdatePetDto } from "./update-pet.dto";

@Injectable()
export class PetsService {
    private pets: any[] = [];

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

    getPetById(id: string) {
        const pet = this.pets.find(pet => pet.id === id);
        if (!pet) {
            throw new Error('Pet not found');
        }
        return pet;
    }

    updatePet(id: string, updatePetDto: UpdatePetDto) {
        const petIndex = this.pets.findIndex(pet => pet.id === id);
        if (petIndex === -1) {
            throw new Error('Pet not found');
        }
        const updatedPet = {
            ...this.pets[petIndex],
            ...updatePetDto,
            updatedAt: new Date(),
        };
        this.pets[petIndex] = updatedPet;
        return updatedPet;
    }

    deletePet(id: string) {
        const petIndex = this.pets.findIndex(pet => pet.id === id);
        if (petIndex === -1) {
            throw new Error('Pet not found');
        }
        this.pets.splice(petIndex, 1);
    }
}
