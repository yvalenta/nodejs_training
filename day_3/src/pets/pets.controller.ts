import { Controller, Get, Post, Body } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { CreatePetDto } from "./create-pet.dto";

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Get()
    getPets(): string[] {
        return this.petsService.getPets();
    }

    @Post()
    createPet(@Body() createPetDto: CreatePetDto) {
        return this.petsService.createPet(createPetDto);
    }
}