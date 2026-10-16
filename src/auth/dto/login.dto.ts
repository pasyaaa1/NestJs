import { IsEmail, IsEmpty, IsNotEmpty, Min, MinLength } from "class-validator";

export class LoginDto {

  @IsNotEmpty({ message: "raoleh kosong email" })
  @IsEmail({}, { message: "raoleh harus email" })
  email: string;

  @IsNotEmpty({ message: "raoleh kosong password" })
  @MinLength(8, { message: "raoleh minimal 8 karakter" })
  password: string;
}
