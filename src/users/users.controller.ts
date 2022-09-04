import { Body, Controller, Delete, Get, Param, Patch, Post, Query, NotFoundException, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.gto';
import { updateUserDto } from './dtos/update-user-dto';
import { UsersService } from './users.service';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';

@Controller('auth')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Post("/signup")
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body.email, body.password)
  }

  @UseInterceptors(SerializeInterceptor)
  @Get("/:id")
  async findUser(@Param("id") id: string) {
    console.log("handler is running");

    const user = await this.usersService.findOne(parseInt(id))
    if (!user) {
      throw new NotFoundException("user not found")
    }
    return user
  }


  @Get()
  findAllUsers(@Query("email") email: string) {
    return this.usersService.find(email)
  }


  @Delete("/:id")
  removeUser(@Param("id") id: string) {
    return this.usersService.remove(parseInt(id))
  }

  @Patch("/:id")
  updateUser(@Param("id") id: string, @Body() body: updateUserDto) {
    return this.usersService.update(parseInt(id), body)
  }

}
