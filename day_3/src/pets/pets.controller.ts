import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { CreatePetDto } from "./create-pet.dto";
import { UpdatePetDto } from "./update-pet.dto";

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Get()
    getPets(): string[] {
        return this.petsService.getPets();
    }

    @Get(':id')
    getPetById(@Param('id') id: string) {
        return this.petsService.getPetById(id);
    }

    @Post()
    createPet(@Body() createPetDto: CreatePetDto) {
        return this.petsService.createPet(createPetDto);
    }

    @Put(':id')
    updatePet(
        @Param('id') id: string, 
        @Body() updatePetDto: UpdatePetDto
    ) {
        return this.petsService.updatePet(id, updatePetDto);
    }

    @Delete(':id')
    deletePet(@Param('id') id: string) {
        return this.petsService.deletePet(id);
    }
}