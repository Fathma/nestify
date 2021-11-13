import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'
import { Serialize } from "../interceptors/serialize.inceptor"
import { UserDto } from './dtos/user.dto'
import { AuthService } from './auth.service'
@Serialize(UserDto)
@Controller('users')
export class UserController {
  constructor(private userService: UserService, private authService: AuthService){}

  @Get()
  getUsers() {
    return this.userService.getusers()
  }

  @Post()
  createUser(@Body() body: CreateUserDto){
    return this.authService.createUser(body.email, body.password, body.name, body.age)
  }
  
}
