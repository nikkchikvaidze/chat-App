import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrentUser } from '../interfaces.model';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent implements OnInit {
  @Input() current: CurrentUser | undefined;
  @Output() onComment: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  content = '';

  reply = false;
  edit = false;

  sendComment(): void {
    if (this.content) {
      this.onComment.emit(this.content);
    }
    this.content = '';
  }
  ngOnInit(): void {}
}
