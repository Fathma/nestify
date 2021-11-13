import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private Repo: Repository<User>) {}

  findByEmail(email: string){
    return this.Repo.find({email})
  }

  async createUser_(email: string, password: string, name: string, age: number){
    const user = this.Repo.create({email: email, password: password, name: name, age: age})

    return this.Repo.save(user)
  }

  getusers(){
    return this.Repo.find()
  }
}
