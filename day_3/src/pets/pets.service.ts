import { Injectable } from "@nestjs/common";

@Injectable()
export class PetsService {
    getPets(): string[] {
        return ['cat', 'dog', 'bird'];
    }
}
