import { usersList } from './../mock-users/users';
import { User } from './../models/user';
import { Injectable, OnInit } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersList: User[] = usersList;
  private subjUsers = new Subject();
  filteredItems: User[];
  constructor() { }


  getUsers(): Observable<User[]> {
    return of(this.usersList);
  }

  findUser(query): void {
    this.usersList = this.usersList.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
    this.subjUsers.next(this.usersList);
  }

  sortUsers(val): void {
    const direction = !!parseInt(val, 10) ? -1 : 1;
    this.usersList = [...this.usersList.sort((a, b) => direction * (a.username > b.username ? 1 : -1))];
    this.subjUsers.next(this.usersList);
  }

  getUsersObserv(): any {
    return this.subjUsers.asObservable();
  }

  assignCopy(): void {
    this.filteredItems = [...this.usersList];
  }

  filterItem(value): void {
    if (!value) {
      this.assignCopy();
    }
    this.filteredItems = [...this.usersList.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )];
    this.subjUsers.next(this.filteredItems);
  }

}
