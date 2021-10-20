import { AuditableEntity } from 'src/shared/entities/auditable'
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Book } from './book.entity'

@Entity({ schema: 'public' })
export class Author extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('varchar')
  lastName: string

  @OneToMany(() => Book, (book: Book) => book.author)
  @JoinColumn({ name: 'id', referencedColumnName: 'author_id' })
  public book: Book[]
}
