import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/core/domain/entities/users.entity';
import { UserEntity, UserRole } from 'src/infraestructure/database/entities/users/users.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) { }

    async register(email: string, password: string, role: UserRole) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User(
            { id: 0, email, password: hashedPassword, role, name: email } // Cambia esto según tu lógica
        );        
        return this.userRepository.create(user);
        
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findOne(email);
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const payload = { sub: user.id, email: user.email, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
