import { Body, Controller, ForbiddenException, Post, Request, UseGuards } from "@nestjs/common";
import { CrearEstudianteService } from "../application/crear-estudiante.service";
import { CrearEstudianteDto } from "src/shared/dtos/estudiantes.dto";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";

@Controller('estudiantes')
export class StudentController {
  constructor(
    private readonly createStudentService: CrearEstudianteService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createStudent(
    @Body() createStudentDto: CrearEstudianteDto,
    @Request() req
  ) {
    // Validaciones adicionales basadas en rol
    if (req.user.role !== 'ADMIN') {
      throw new ForbiddenException('Solo administradores pueden crear estudiantes');
    }

    const student = await this.createStudentService.execute(createStudentDto);
    return {
      message: 'Estudiante creado exitosamente',
      data: student
    };
  }
}
