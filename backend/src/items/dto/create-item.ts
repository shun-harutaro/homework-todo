import { IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    id: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    body: string;
}