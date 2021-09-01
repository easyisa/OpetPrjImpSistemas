import { PrimaryKey } from 'src/shared/entities'
import { AuditableEntity } from 'src/shared/entities/auditable'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Course } from './enum/course'
import { DocumentType } from './enum/documentType'

@Entity({ schema: 'user' })
export class User implements PrimaryKey, AuditableEntity {
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

  @CreateDateColumn({})
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date
}
