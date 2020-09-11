import { UsersService } from './../service/users.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public usersList: User[];
  searchText;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersList = this.usersService.getUsers();
  }

  search(query): void {
    this.usersList = this.usersService.findUser(query);
  }

  sort(direction): void {
    this.usersList = this.usersService.sortUsers(direction);
  }

}
