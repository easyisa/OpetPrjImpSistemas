import { CreateUserDto } from 'src/modules/user/dtos/create-user-dto'
import { DocumentType } from 'src/modules/user/enums/documentType'
import { City, State } from 'src/shared/enums'

export const mockUserBody = (): CreateUserDto => {
  const userBody = new CreateUserDto()
  userBody.name = 'Jujuba'
  userBody.email = 'isabel@gmail.com'
  userBody.documentNumber = '42721258699'
  userBody.documentType = DocumentType.CPF
  userBody.birthday = new Date('1995-09-18')
  userBody.city = City.CURITIBA
  userBody.state = State.PR
  userBody.phone = '41998099879'
  userBody.password = 'isa123'
  return userBody
}
