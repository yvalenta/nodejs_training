import { PetProps } from "../types/pet.props";
import { BaseEntity } from "../../shared/domain/entities/base.entity";

export class PetEntity extends BaseEntity {
    readonly name: string;
    readonly type: string;
  constructor(
      props: PetProps
  ) {
    super({
        id: props.id,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt
    });
    this.name = props.name;
    this.type = props.type;
  }   
}