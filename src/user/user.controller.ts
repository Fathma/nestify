import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'
import { Serialize } from "../interceptors/serialize.inceptor"
import { UserDto } from './dtos/user.dto'

@Controller('users')
@Serialize(UserDto)
export class UserController {
  constructor(private userService: UserService){}

  @Get()
  getUsers() {

  }

  @Post()
  createUser(@Body() body: CreateUserDto){
    return this.userService.createUser(body.email, body.password, body.name, body.age)
  }
}
