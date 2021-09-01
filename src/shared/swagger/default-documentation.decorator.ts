import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

export function DefaultCreateEntityDocumentation(entity: string, summary = '') {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiNoContentResponse({
      description: `${entity} foi criado com sucesso.`
    }),
    ApiBadRequestResponse({ description: 'Formato de id inválido' }),
    ApiNotFoundResponse({
      description: `O ${entity} informado não existe ou já foi criado.`
    }),
    ApiUnauthorizedResponse({ description: 'Não autenticado.' })
  )
}
