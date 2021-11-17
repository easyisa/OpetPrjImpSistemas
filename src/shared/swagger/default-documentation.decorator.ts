import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

export function DefaultCreateEntityDocumentation(entity: string, summary = '') {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiCreatedResponse({
      description: `${entity} foi criado com sucesso.`
    }),
    ApiBadRequestResponse({ description: 'Requisição errada do frontend' }),
    ApiNotFoundResponse({
      description: `O ${entity} informado não existe ou já foi criado.`
    }),
    ApiUnauthorizedResponse({ description: 'Não autenticado.' })
  )
}

export function DefaultUpdateEntityDocumentation(entity: string, summary = '') {
  return applyDecorators(
    ApiOperation({ summary }),
    ApiNoContentResponse({
      description: `${entity} foi atualizada com sucesso.`
    }),
    ApiBadRequestResponse({ description: 'Requisição errada do frontend' }),
    ApiNotFoundResponse({
      description: `O ${entity} informado não existe ou já foi criado.`
    }),
    ApiUnauthorizedResponse({ description: 'Não autenticado.' })
  )
}
