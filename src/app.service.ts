import { Injectable } from '@nestjs/common';
import { Usuario } from './app.entity';

@Injectable()
export class AppService {
  products1 = 10;
  products2: number = 20;
  tabla: string[] = ['123132', '234234234', '234234234'];

  getHello(): string {
    return 'Hello World!';
  }

  getProductsCount(): string {
    // const sumatoria = this.products1 + this.products2;
    return 'Este es getCountProducts';
  }

  getUser(nombre: string, celular: number): Usuario {
    return { name: nombre, cellphone: celular };
  }

  getStatus(): void {
    console.table(this.tabla);
  }
}
