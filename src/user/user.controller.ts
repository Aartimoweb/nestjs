import { Body, Controller, Delete, Get, Post, Put ,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Post()
    create(@Body()body:{name:string,email:string}):Promise<User>{
        return  this.userService.create(body.name,body.email);
    }

    @Get()
    findAll():Promise<User[]>{
        return this.userService.findAll();
    }
    
    @Put(':id')
    update(
        @Param('id')id:number,
        @Body()body:{name:string;email:string},
    ):Promise<User>{
        return this.userService.update(id,body.name,body.email)
    }

    @Delete(':id')
    delete(@Param('id')id:number):Promise<string>{
        return this.userService.delete(id);
    }
}



