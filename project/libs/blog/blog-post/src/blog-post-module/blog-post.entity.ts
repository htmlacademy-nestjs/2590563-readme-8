import {Entity, Post, PostState, PostType, StorableEntity} from "@project/shared-types";

export class BlogPostEntity extends Entity implements StorableEntity<Post> {
  public id: string;
  public postType: PostType;
  public state: PostState;
  public name: string;
  public url: string;
  public preview: string;
  public text: string;
  public quoteAuthorId: string;
  public quoteText: string;
  public description: string;

  public tags: string[];
  public authorId: string;
  public repostId: string;
  public createDate: Date;
  public publicationDate: Date;

  constructor(post?: Post) {
    super();
    this.populate(post);
  }

  public populate(post?: Post): void {
    if (!post) {
      return;
    }

    this.id = post.id ?? '';
    this.postType = post.postType;
    this.authorId = post.authorId;
    this.repostId = post.repostId ?? '';
    this.tags = post.tags ?? [];
    this.createDate = post.createDate;
    this.publicationDate = post.publicationDate;
    this.state = post.state;

    this.name = post.name ?? '';
    this.url = post.url ?? '';
    this.preview = post.preview ?? '';
    this.text = post.text ?? '';
    this.quoteAuthorId = post.quoteAuthorId ?? '';
    this.quoteText = post.quoteText ?? '';
    this.description = post.description ?? '';
  }

  toPOJO(): Post {
    return {
      id: this.id,
      postType: this.postType,
      authorId: this.authorId,
      repostId: this.repostId,
      tags: this.tags,
      state: this.state,
      createDate: this.createDate,
      publicationDate: this.publicationDate,
      name: this.name,
      url: this.url,
      preview: this.preview,
      text: this.text,
      quoteAuthorId: this.quoteAuthorId,
      quoteText: this.quoteText,
      description: this.description,
    };
  }
}
