import {IsNotEmpty, IsString} from "class-validator";

export class UpdateTaskDTO {
    @IsNotEmpty()
    @IsString()
    title: string;
}