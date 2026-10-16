import { IsInt, isInt, IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({ message: "raoleh kosong" })
    readonly title: string;

    @IsNotEmpty({ message: "raoleh kosong penulise" })
    readonly author: string;

    @IsNotEmpty({ message: "raoleh kosong isbn" })
    readonly isbn: string;

    @IsNotEmpty({ message: "raoleh kosong tahun terbit" })
    @IsInt({ message: "raoleh harus angka" })
    readonly publishedYear: number;

}