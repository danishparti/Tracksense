import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {

    // Check if email already exists
    const existingUser =
      await this.usersRepository.findByEmail(createUserDto.email);

    if (existingUser) {
      throw new ConflictException(
        'Email already exists',
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(
      createUserDto.password,
      10,
    );

    // Create entity
    const user = new User();

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.passwordHash = passwordHash;
    user.phoneNumber = createUserDto.phoneNumber;
    user.profileImageUrl = createUserDto.profileImageUrl;

    // Defaults (your entity already sets most of these,
    // but setting them explicitly is also fine)
    user.isActive = true;
    user.isEmailVerified = false;

    return await this.usersRepository.create(user);
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.usersRepository.remove(id);
  }
}