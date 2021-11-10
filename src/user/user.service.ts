import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private Repo: Repository<User>) {}
  createUser(email: string, password: string, name: string, age: number): Promise<User> {
    const user = this.Repo.create()
    
    user.email = email
    user.password = password
    user.name = name
    user.age = age

    return this.Repo.save(user)
  }
}
