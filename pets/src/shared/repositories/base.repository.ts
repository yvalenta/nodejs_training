import { ReadOnlyRepository } from "./read-only.repository";
import { WriteOnlyRepository } from "./write-only.repository";

export interface BaseRepository<T, QueryT> extends WriteOnlyRepository<T>, ReadOnlyRepository<T, QueryT> {
}
