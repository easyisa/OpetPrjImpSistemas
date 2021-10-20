import { AuditableEntity } from 'src/shared/entities/auditable'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Course } from './enum/course'
import { DocumentType } from './enum/documentType'

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
  course: Course

  @Column('varchar')
  password: string
}
