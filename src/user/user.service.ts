import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async create(name:string,email:string):Promise<User>{
        const user = this.userRepository.create({name,email});
        return this.userRepository.save(user);
    }

    async findAll():Promise<User[]>{
        return this.userRepository.find()
    }

    async update(id:number,name:string,email:string):Promise<User>{
        const user = await this.userRepository.findOne({where:{id}});

        if(!user){
            throw new NotFoundException('user not found')
        }
        user.name  = name;
        user.email = email;
        return this.userRepository.save(user);
    }

    async delete(id: number):Promise<string>{
        const result = await this.userRepository.delete(id);

        if(result.affected === 0){
            throw new NotFoundException('user not found')
        }

        return "user delete successfully";
    }
}
