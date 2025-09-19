import { IsString, IsNumber, IsArray, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {
    @IsString()
    @ApiProperty({ description: 'Pet name', example: 'Buddy' })
    name: string;

    @IsString()
    @ApiProperty({ description: 'Pet breed', example: 'Golden Retriever' })
    breed: string;

    @IsNumber()
    @ApiProperty({ description: 'Pet age', example: 5 })
    age: number;

    @IsArray()
    @IsString({ each: true })
    @ApiProperty({ description: 'Pet diseases', example: ['Fleas', 'Ticks'] })
    @IsOptional()
    diseases: string[] = [];

    @IsArray()
    @IsString({ each: true })
    @ApiProperty({ description: 'Pet allergies', example: ['Fleas', 'Ticks'] })
    @IsOptional()
    allergies: string[] = [];

    @IsArray()
    @IsString({ each: true })
    @ApiProperty({ description: 'Pet vaccines', example: ['Fleas', 'Ticks'] })
    @IsOptional()
    vaccines: string[] = [];
}
