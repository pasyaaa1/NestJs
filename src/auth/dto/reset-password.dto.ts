import { MinLength } from "class-validator";

export class ResetPasswordDto {
  token: string;

  @MinLength(8, { message: "raoleh minimal 8 karakter" })
  newPassword: string;
}
