import { AuditableEntity } from 'src/shared/entities'
import { City, State } from 'src/shared/enums'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AnimalSize, AnimalType, Gender } from '../enum'

@Entity({ schema: 'public' })
export class Animal extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('varchar')
  mounths: string

  @Column('varchar')
  years: string

  @Column('varchar')
  type: AnimalType

  @Column('varchar')
  gender: Gender

  @Column('varchar')
  size: AnimalSize

  @Column('varchar')
  city: City

  @Column('varchar')
  state: State
}
