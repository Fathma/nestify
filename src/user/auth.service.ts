import {Injectable, BadRequestException} from '@nestjs/common'
import { User } from './user.entity'
import { UserService } from './user.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService{
  constructor(private userService: UserService){}

  async createUser(email: string, password: string, name: string, age: number){
   const users = await this.userService.findByEmail(email)
  
    if(users.length){
      throw new BadRequestException("email in use!")
    }
    let salt = await bcrypt.genSalt(10) 
    let hash = await bcrypt.hash(password, salt)
    password = hash;
    return this.userService.createUser_(email, password, name, age)
          
    
  }
 
}