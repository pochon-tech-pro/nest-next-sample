import {
    Entity,
    Column,
    PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,
} from "typeorm";

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'int'})
    no = 0;

    @Column({type: 'varchar'})
    mail = '';

    @CreateDateColumn()
    createdAt: Date = new Date();

    @UpdateDateColumn()
    updatedAt: Date = new Date();

    @DeleteDateColumn()
    deletedAt: Date | null = null;
}