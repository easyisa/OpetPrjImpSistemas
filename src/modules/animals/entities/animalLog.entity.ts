import { AuditableEntity } from 'src/shared/entities'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ schema: 'public' })
export class AnimalLog extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  userId: string
}
