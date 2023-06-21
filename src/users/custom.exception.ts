import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateException extends HttpException {
  constructor(error: string) {
    super(
      {
        message: 'Erro ao Procurar Usuario',
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
      {
        cause: error,
      },
    );
  }
}
