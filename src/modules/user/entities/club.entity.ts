import { AuditableEntity } from 'src/shared/entities'
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Athlete } from './athlete.entity'

@Entity({ schema: 'public' })
export class Club extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @OneToMany(() => Athlete, (athlete: Athlete) => athlete.club)
  @JoinColumn({ name: 'id', referencedColumnName: 'club_id' })
  public athlete: Athlete[]
}
