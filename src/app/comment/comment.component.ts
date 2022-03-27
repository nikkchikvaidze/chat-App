import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserComment, CurrentUser, Reply } from '../interfaces.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() user: UserComment[] | undefined;
  @Input() currentUser: CurrentUser | undefined;
  @Output() deleteComment: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteReply: EventEmitter<Reply> = new EventEmitter<Reply>();
  @Output() replyUser: EventEmitter<UserComment> =
    new EventEmitter<UserComment>();
  constructor() {}

  replyUserComment(user: UserComment) {
    this.replyUser.emit(user);
  }

  editComment = false;
  editReply = false;

  commentPlusBtn(user: UserComment) {
    user.score++;
    this.sortComments();
  }

  commentMinusBtn(user: UserComment) {
    if (user.score > 0) {
      user.score--;
    } else {
      user.score = 0;
    }
    this.sortComments();
  }

  replyPlusBtn(reply: Reply) {
    reply.score++;
  }

  replyMinusBtn(reply: Reply) {
    if (reply.score > 0) {
      reply.score--;
    } else {
      reply.score = 0;
    }
  }

  deleteUserComment(user: UserComment) {
    this.deleteComment.emit(user.id);
  }

  deleteUserReply(user: Reply) {
    this.deleteReply.emit(user);
  }

  editUserComment() {
    this.editComment = true;
  }
  updateUserComment() {
    this.editComment = false;
  }

  editUserReply() {
    this.editReply = true;
  }

  updateUserReply() {
    this.editReply = false;
    console.log(this.user);
  }

  sortComments() {
    this.user?.sort((a: UserComment, b: UserComment) => {
      return b.score - a.score;
    });
  }

  ngOnInit(): void {}
}
