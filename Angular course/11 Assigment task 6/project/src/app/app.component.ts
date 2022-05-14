import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild("form") form: NgForm;
  defaultSelectValue = "basic";

  user = {
    email: "",
    subscription: "",
    password: "",
  };

  submitted = false;

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.user.email = this.form.value.email;
    this.user.subscription = this.form.value.subscription;
    this.user.password = this.form.value.password;
    this.form.reset();
  }
}
