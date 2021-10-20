import { HttpException, HttpStatus } from '@nestjs/common'

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND)
  }
}

export class UnauthorizedPasswordException extends HttpException {
  constructor() {
    super('User unauthorized', HttpStatus.UNAUTHORIZED)
  }
}

export class UnauthorizedUnconfirmedPasswordException extends HttpException {
  constructor() {
    super('User unauthorized', HttpStatus.UNAUTHORIZED)
  }
}
