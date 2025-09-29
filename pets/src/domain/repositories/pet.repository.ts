import { PetProps } from "../types/pet.props";
import { BaseRepository } from "../../shared/repositories/base.repository";
import { PetQueryFilter } from "../types/pet-query-filter";

export interface PetRepository extends BaseRepository<PetProps, PetQueryFilter> {
    
}
