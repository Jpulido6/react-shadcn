import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(JwtAuthGuard)
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err: any, user: any) {
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }

    
}
