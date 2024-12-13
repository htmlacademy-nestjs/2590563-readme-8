import {compare, genSalt, hash} from 'bcrypt'

import {SALT_ROUNDS} from "./blog-user.constant";
import * as dayjs from "dayjs";
import {AuthUser, Entity, StorableEntity} from "@project/shared-types";

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser>{
  public email: string;
  public login: string;
  public name: string;
  public avatarUrl: string;
  public registerDate: Date;
  public passwordHash: string;


  constructor(user?: AuthUser) {
    super();
    this.populate(user)
  }

  public populate(user?: AuthUser) {
    if(!user) {
      return
    }

    this.id = user.id ?? '';
    this.email = user.email;
    this.login = user.login ?? user.email;
    this.name = user.name ?? user.login;
    this.avatarUrl = user.avatarUrl ?? '';
    this.registerDate = user.registerDate;
    this.passwordHash = user.passwordHash;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      login: this.login,
      name: this.name,
      avatarUrl: this.avatarUrl,
      registerDate: this.registerDate,
      passwordHash: this.passwordHash,
    }
  }

  public async createPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
