import { CreateCommentDto } from "./create-comment.dto";
import { OmitType } from "@nestjs/swagger";

export class UpdateCommentDto extends OmitType(CreateCommentDto, ['profileId', 'postId'] as const)  {}
