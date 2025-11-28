import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('api/1/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  obtenerSaludo() {
    return this.usuariosService.obtenerSaludo();
  }
}
