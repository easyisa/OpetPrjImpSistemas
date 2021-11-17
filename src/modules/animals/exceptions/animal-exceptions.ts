import { HttpException, HttpStatus } from '@nestjs/common'

export class AnimalNotFoundException extends HttpException {
  constructor() {
    super('Animal not found', HttpStatus.NOT_FOUND)
  }
}
