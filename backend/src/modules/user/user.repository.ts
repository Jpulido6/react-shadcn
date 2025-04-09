import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/users.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) { }

    async create(user: User): Promise<User> {
        return this.repository.save(user);
    }

    async findOne(email: string): Promise<User | null> {
        return this.repository.findOne({ where: { email } });
    }


}