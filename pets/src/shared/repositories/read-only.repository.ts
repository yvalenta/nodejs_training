export interface ReadOnlyRepository<T, QueryT> {
    findById(id: string): Promise<T>;
    findAll(queryParams?: QueryT): Promise<T[]>;
}