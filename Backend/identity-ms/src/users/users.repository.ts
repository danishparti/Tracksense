import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  async create(createUserDto: any) {
    return {
      message: 'Create User',
      data: createUserDto,
    };
  }

  async findAll() {
    return {
      message: 'Find All Users',
    };
  }

  async findOne(id: string) {
    return {
      message: `Find User ${id}`,
    };
  }

  async update(id: string, updateUserDto: any) {
    return {
      message: `Update User ${id}`,
      data: updateUserDto,
    };
  }

  async remove(id: string) {
    return {
      message: `Delete User ${id}`,
    };
  }
}