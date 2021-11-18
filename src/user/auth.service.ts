import {Injectable, BadRequestException, NotFoundException} from '@nestjs/common'
import { User } from './user.entity'
import { UserService } from './user.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
export interface LoginSucess{
  user: User,
  token: string
}

@Injectable()
export class AuthService{
  constructor(private userService: UserService, private readonly jwtService: JwtService){}

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

  async login(email: string, password: string){
    const [user] = await this.userService.findByEmail(email)
  
    if(!user){
      throw new NotFoundException("User not found!");
    }
    let isMatch = bcrypt.compareSync(password, user.password)
    if(!isMatch){
      throw new BadRequestException("Login failed");
    }
    let token = this.jwtService.sign({user})
    let data:LoginSucess = {
      user: user,
      token: token
    }

    
    return data
  }
}