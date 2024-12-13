import {Injectable} from "@nestjs/common";
import {BaseMemoryRepository} from "@project/data-access";
import {BlogUserEntity} from "@project/blog-user";
import {BlogPostFactory} from "./blog-post.factory";

@Injectable
export class BlogPostRepository extends BaseMemoryRepository<BlogUserEntity> {
  constructor(entityFactory: BlogPostFactory) {
    super(entityFactory);
  }
}
