import { IsNotEmpty, IsString } from 'class-validator'
import { AuditableEntity } from 'src/shared/entities'
import { City, State } from 'src/shared/enums'
import { AfterInsert, Column, Entity, getConnection, PrimaryGeneratedColumn } from 'typeorm'
import { AnimalSize, AnimalType, Gender } from '../enum'
import { AnimalLog } from './animalLog.entity'

@Entity({ schema: 'public' })
export class Animal extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
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

  @AfterInsert()
  async createLog() {
    const log = new AnimalLog()
    log.userId = this.id
    log.createdAt = new Date()
    getConnection().manager.save(log)
  }
}
