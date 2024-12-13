import {Injectable} from "@nestjs/common";
import {BlogPostRepository} from "@project/blog-post";

@Injectable()
export class BlogPostService {
  constructor(private readonly blogPostRepository: BlogPostRepository) {}
}
