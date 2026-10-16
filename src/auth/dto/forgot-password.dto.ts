import { IsEmail } from "class-validator";

export class ForgotPasswordDto {

  @IsEmail({}, { message: "raoleh harus email" })
  email: string;
}
