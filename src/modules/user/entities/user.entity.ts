import { AuditableEntity } from 'src/shared/entities/auditable'
import {} from 'src/shared/entities'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { DocumentType } from '../enums/documentType'
import { State, City } from 'src/shared/enums'

@Entity({ schema: 'public' })
export class User extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  documentType: DocumentType

  @Column('varchar')
  documentNumber: string

  @Column('varchar')
  name: string

  @Column('varchar')
  email: string

  @Column('varchar')
  phone: string

  @Column('varchar')
  birthday: Date

  @Column('varchar')
  password: string

  @Column('varchar')
  city: City

  @Column('varchar')
  state: State
}
