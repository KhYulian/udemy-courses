import { Component, OnInit } from "@angular/core";

import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  inactiveUsers: string[] = [];
  activeUsers: string[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
