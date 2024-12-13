import {Injectable} from "@nestjs/common";
import {EntityFactory, Post} from "@project/shared-types";

@Injectable
export class BlogPostFactory implements EntityFactory<BlogPostEntity> {
  public create(entityPlainData: Post): BlogPostEntity {
    return new BlogPostEntity(entityPlainData)
  }
}
