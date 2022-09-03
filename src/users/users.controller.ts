import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.gto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Post("/signup")
  createUser(@Body() body: CreateUserDto) {
    console.log("🚀 ~ file: users.controller.ts ~ line 8 ~ UsersController ~ createUser ~ body", body)
    this.usersService.create(body.email, body.password)
  }
}
