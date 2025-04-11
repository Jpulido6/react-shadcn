import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './modules/auth/auth.controller';
import { StudentController } from './modules/estudiantes/presentation/estudiante.controller';
import { AuthService } from './modules/auth/auth.service';
import { CrearEstudianteService } from './modules/estudiantes/application/crear-estudiante.service';
import { User } from './core/domain/entities/users.entity';
import { Estudiante } from './core/domain/entities/estudiantes.entity';
import { AuthModule } from './modules/auth/auth.module';
import { UserController } from './modules/user/presentation/user.controller';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './infraestructure/database/entities/users/users.entity';
import { EstudianteEntity } from './infraestructure/database/entities/estudiantes/estudiantes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [   
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity], // Asegúrate de incluir UserEntity aquí
      synchronize: true, // Solo para desarrollo
    }),
    // AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
