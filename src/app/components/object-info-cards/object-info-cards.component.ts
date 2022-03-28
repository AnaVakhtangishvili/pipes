import { Component, OnInit } from '@angular/core';
import { User, UserStatus } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service.ts.service';

@Component({
  selector: 'app-object-info-cards',
  templateUrl: './object-info-cards.component.html',
  styleUrls: ['./object-info-cards.component.scss']
})
export class ObjectInfoCardsComponent implements OnInit {
  userData: User[] = [];
  btnVisibility = true;
  color = 'cyan';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  async getUsers() {
    this.userData = await this.userService.getUserData();
    this.btnVisibility = false;
    console.log(this.userData);
  }

  backgroundStyles(status: UserStatus) {
    return {
      'bg-deleted': status === UserStatus.deleted,
      'bg-active': status === UserStatus.active,
      'bg-inactive': status === UserStatus.inactive
    }
  }

}
