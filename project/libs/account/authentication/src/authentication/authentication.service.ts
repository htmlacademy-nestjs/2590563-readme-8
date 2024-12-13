import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common";
import {BlogUserRepository} from "../../../blog-user/src/blog-user-module/blog-user.repository";
import {CreateUserDto} from "../dto/create-user.dto";
import {BlogUserEntity} from "../../../blog-user/src/blog-user-module/blog-user.entity";
import * as dayjs from "dayjs";
import {AuthUserError} from "./authentication.constant";
import {LoginUserDto} from "../dto/login-user.dto";

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserRepository) {}

  public async register(dto: CreateUserDto): Promise<BlogUserEntity> {
    const {
      email,
      login,
      name,
      password,
      avatarUrl
    } = dto;


    const blogUser = {
      email,
      login,
      name,
      avatarUrl,
      registerDate: dayjs().toDate(),
      passwordHash: '',
    };

    if(await this.blogUserRepository.findByEmail(email)) {
      throw new ConflictException(AuthUserError.EmailExists);
    }
    if(await this.blogUserRepository.findByLogin(login)) {
      throw new ConflictException(AuthUserError.LoginExists)
    }

    const userEntity = await new BlogUserEntity(blogUser).createPassword(password)

    this.blogUserRepository.save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AuthUserError.UserNotFound);
    }

    if (!(await existUser.comparePassword(password))) {
      throw new UnauthorizedException(AuthUserError.PasswordWrong);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const user = await this.blogUserRepository.findById(id);

    if (!user) {
      throw new NotFoundException(AuthUserError.UserNotFound);
    }

    return user;
  }
}
