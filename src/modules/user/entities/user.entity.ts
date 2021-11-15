import { AuditableEntity } from 'src/shared/entities/auditable'
import { City } from 'src/shared/entities/city'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { DocumentType } from '../enums/documentType'

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

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  public city: City
}
