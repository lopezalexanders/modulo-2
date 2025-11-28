import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
    obtenerSaludo(){
        return "Hola desde el servicio de usuarios";
    }
}
