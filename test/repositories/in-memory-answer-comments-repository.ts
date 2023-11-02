import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository";
import { AnswerComments } from "@/domain/forum/enterprise/entities/answer-comments";

export class InMemoryAnswersCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComments[] = [];

  async findById(id: string): Promise<AnswerComments | null> {
    const answerComment = this.items.find((item) => item.id.toString() === id);

    if (!answerComment) {
      return null;
    }

    return answerComment;
  }

  async delete(answerComments: AnswerComments): Promise<void> {
    const itemIndex = this.items.findIndex(
      (item) => item.id === answerComments.id,
    );

    this.items.splice(itemIndex, 1);
  }

  async create(answerComment: AnswerComments) {
    this.items.push(answerComment);
  }
}