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
/*
    TO ENTER DATA VIA POSTMAN:
    1. Select Body next to Headers and Pre-Request Script
    2. Select raw, select JSON from dropdown list to the right
    3. Enter data as such:
        {
            "taskString": "This is the first task to add",
            "assigned": "2021-03-19",
            "completed": true
        }
*/