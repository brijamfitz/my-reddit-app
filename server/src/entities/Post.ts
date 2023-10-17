import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Post {
    @PrimaryKey()
    id!: number;

    @Property({ type: 'date', nullable: true })
    createdAt? = new Date();

    @Property({ type: 'date', onUpdate: () => new Date(), nullable: true })
    updatedAt?: Date = new Date();

    @Property({ type: 'text' })
    title!: string;
}
