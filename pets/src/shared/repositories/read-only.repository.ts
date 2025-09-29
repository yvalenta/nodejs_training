export interface ReadOnlyRepository<T, QueryType> {
    findById(id: string): Promise<T>;
    findAll(queryParams?: QueryType): Promise<T[]>;
}