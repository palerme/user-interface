import { IsEmail, IsStrongPassword } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string

    @Column()
    @IsStrongPassword({
        minLength: 3,
        minLowercase: 1,
        minNumbers: 2,
        minUppercase: 1,
        minSymbols: 1
    })
    password: string

    @Column({
        unique: true
    })
    @IsEmail()
    email: string;
}
