import { IsEAN, IsEmail, MinLength,IsString, IsNotEmpty } from "class-validator";

export class RegisterDto {

  @IsNotEmpty({ message: "raoleh kosong name" })
  @IsString({ message: "raoleh harus string" })
  name: string;

  @IsNotEmpty({ message: "raoleh kosong email" })
  @IsEmail({}, { message: "raoleh harus email" })
  email: string;

  @IsNotEmpty({ message: "raoleh kosong password" })
  @MinLength(8, { message: "raoleh minimal 8 karakter" })
  password: string;
}
