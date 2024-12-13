import {Module} from "@nestjs/common";
import {BlogPostController} from "./blog-post.controller";
import {BlogPostService} from "./blog-post.service";

@Module({
  providers: [BlogPostController],
  exports: [BlogPostService]
})
export class BlogPostModule {}
