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

@Module({

  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [() => (
        {
          port: parseInt(process.env.PORT!, 10) || 3000,
          database: {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT!, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [User,Estudiante],
          }
        }
      )],
    }),
    AuthModule
   
    // TypeOrmModule.forRootAsync({
    //   useFactory: async () => {
    //     return {
    //       type: 'postgres',      
    //       host: process.env.DB_HOST,
    //       port: parseInt(process.env.DB_PORT!, 10) || 5432,
    //       username: process.env.DB_USERNAME,
    //       password: process.env.DB_PASSWORD,
    //       database: process.env.DB_NAME,
    //       entities: [User, Estudiante],
    //       synchronize: true,
    //       logging: true,
    //     };
    //   },
    
    

    
  ],
  
  controllers: [AppController, AuthController, StudentController],
  providers: [AppService, AuthService, CrearEstudianteService],
})
export class AppModule { }
