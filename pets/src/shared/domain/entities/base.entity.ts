import { BaseProps } from "../types/base.props";

export class BaseEntity {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;

    constructor(
        props: BaseProps
    ) {
        this.id = props.id || Math.random().toString();
        const now = new Date();
        this.createdAt = props.createdAt || now;
        this.updatedAt = props.updatedAt || now;
    }
}