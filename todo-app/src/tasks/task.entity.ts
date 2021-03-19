import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskString: string;

    @Column()
    assigned: Date;

    @Column()
    completed: boolean;
}