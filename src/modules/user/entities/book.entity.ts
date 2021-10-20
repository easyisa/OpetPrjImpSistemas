import { AuditableEntity } from 'src/shared/entities/auditable'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Author } from './author.entity'

@Entity({ schema: 'public' })
export class Book extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  isbn: string

  @Column('varchar')
  pages: number

  @ManyToOne(() => Author)
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  public author: Author
}
