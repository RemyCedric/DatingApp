import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  username: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http //
      .get<User[]>('https://localhost:5001/api/users')
      .subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
