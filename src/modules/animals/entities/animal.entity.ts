import { AuditableEntity } from 'src/shared/entities'
import { City } from 'src/shared/entities/city'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
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

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  public city: City
}
