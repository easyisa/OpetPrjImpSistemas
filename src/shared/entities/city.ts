import { Animal } from 'src/modules/animals/entities/animal.entity'
import { Column, JoinColumn, OneToMany } from 'typeorm'

export class City {
  @Column('varchar')
  name: string

  @Column('varchar')
  state: string

  @OneToMany(() => Animal, (animal: Animal) => animal.city)
  @JoinColumn({ name: 'id', referencedColumnName: 'city_id' })
  public animal: Animal[]
}
