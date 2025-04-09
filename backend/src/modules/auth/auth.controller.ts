import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { UserRole } from "src/infraestructure/database/entities/users/users.entity";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('role') role: UserRole,
    ) {
        return this.authService.register(email, password, role);
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.authService.login(email, password);
    }

    @UseGuards(JwtAuthGuard)
    @Post('profile')
    getProfile(@Request() req) {
        return req.user;
    }    
}