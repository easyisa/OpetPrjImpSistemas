import { AuditableEntity } from 'src/shared/entities'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Club } from './club.entity'
import { PositionEnum } from './enum/position'

@Entity({ schema: 'public' })
export class Athlete extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('timestamp')
  birthday: Date

  @Column('varchar')
  position: PositionEnum

  @ManyToOne(() => Club)
  @JoinColumn({ name: 'club_id', referencedColumnName: 'id' })
  public club: Club
}
