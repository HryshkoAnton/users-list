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
    this.usersService.getUsersObserv().subscribe(data => this.usersList = data);
  }

  getAllUsers(): void {
    this.usersService.getUsers().subscribe(data => this.usersList = data);
  }

  search(query): void {
    this.usersService.filterItem(query);
  }

  sort(direction): void {
    this.usersService.sortUsers(direction);
  }

}
