import { Component, OnInit } from '@angular/core';
import { User } from './model/user-data';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  users: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.dataService.getUsers().subscribe(result => {
      this.users = result
    });
  }

  deleteUser(user: User): void {
    this.dataService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  // editUser(user: User): void {
  //   localStorage.removeItem("editUserId");
  //   localStorage.setItem("editUserId", user.id.toString());
  //   this.router.navigate(['edit-user']);
  // };

  // addUser(): void {
  //   this.dataService.navigate(['add-user']);
  // };

}
