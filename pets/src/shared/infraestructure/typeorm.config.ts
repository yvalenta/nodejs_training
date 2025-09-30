import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { PetOrmEntity } from "../../infraestructure/orm/pet.orm.entity";

export const typeormConfig = (): TypeOrmModuleOptions => ({
    type: "mongodb",
    url: process.env.MONGO_URL,
    database: process.env.MONGO_DATABASE,
    //url: process.env.BD_URL,
    //database: process.env.BD_NAME,
    entities: [PetOrmEntity],
    synchronize: true,
})
