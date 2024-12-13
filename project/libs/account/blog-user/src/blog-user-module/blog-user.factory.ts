import {BlogUserEntity} from "./blog-user.entity";
import {Injectable} from "@nestjs/common";
import {AuthUser, EntityFactory} from "@project/shared-types";

@Injectable()
export class BlogUserFactory implements EntityFactory<BlogUserEntity>{
  public create(entityPlainData: AuthUser): BlogUserEntity {
    return new BlogUserEntity(entityPlainData)
  }
}
