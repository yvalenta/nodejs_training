import { Controller, Get } from "@nestjs/common";
import { PetsService } from "./pets.service";

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Get()
    getPets(): string[] {
        return this.petsService.getPets();
    }
}