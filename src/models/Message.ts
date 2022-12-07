import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Room } from './Room';

@Entity()
export class Message {

    @PrimaryGeneratedColumn("increment") id: number
    @Column() text: string

    @ManyToOne(() => User)
    @JoinTable() user: User

    @ManyToOne(() => Room, room => room.messages)
    room: Room

}