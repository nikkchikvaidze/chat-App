import { Component } from '@angular/core';
import { UserComment, Reply, CurrentUser, User } from './interfaces.model';
import * as data from 'src/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataFromJson = JSON.parse(JSON.stringify(data));

  currentUser: CurrentUser = this.dataFromJson.currentUser;

  users: UserComment[] = this.dataFromJson.comments.sort(
    (a: UserComment, b: UserComment) => {
      return b.score - a.score;
    }
  );

  commentHandler(content: string) {
    const newComment: UserComment = {
      content: content,
      createdAt: '5 seconds ago',
      id: this.generateMaxId(),
      replies: [],
      score: 0,
      user: this.currentUser,
    };
    this.users.push(newComment);
    this.sortComments();
  }

  deleteCommentHandler(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  deleteReplyHandler(user: Reply) {
    this.users.forEach((comment) => {
      if (comment.replies) {
        comment.replies.forEach((member) => {
          if (member.id === user.id) {
            let index = comment.replies.indexOf(member);
            comment.replies.splice(index, 1);
          }
        });
      }
    });
  }

  generateMaxId() {
    let maxId = 1;
    this.users.forEach((comment) => {
      if (comment.id > maxId) maxId = comment.id;

      comment.replies.forEach((reply) => {
        if (reply.id > maxId) maxId = reply.id;
      });
    });
    return ++maxId;
  }

  sortComments() {
    this.users.sort((a: UserComment, b: UserComment) => {
      return b.score - a.score;
    });
  }
}
