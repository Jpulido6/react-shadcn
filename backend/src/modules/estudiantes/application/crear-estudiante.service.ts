import { Estudiante } from "src/core/domain/entities/estudiantes.entity";
import { IEstudianteRepository } from "src/core/domain/interfaces/estudiantes.interface";
import { Injectable } from "@nestjs/common";



@Injectable()
export class CrearEstudianteService {
    constructor(
      private readonly studentRepository: IEstudianteRepository,
      // private readonly notificationService: INotificationService
    ) {}
  
    async execute(data: {
      firstName: string;
      lastName: string;
      email: string;
    }): Promise<Estudiante> {
      // Lógica de negocio antes de crear
      const existingStudent = await this.studentRepository.findByEmail(data.email);
      if (existingStudent) {
        throw new Error('Student with this email already exists');
      }
  
      const student = new Estudiante({
        ...data,
        enrollmentDate: new Date()
      });
  
      await this.studentRepository.save(student);
      
      // Enviar notificación
      // await this.notificationService.sendWelcomeEmail(student);
  
      return student;
    }
  }
  