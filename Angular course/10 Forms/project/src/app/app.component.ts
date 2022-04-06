import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";

  suggestUserName(ev: Event) {
    const suggestedName = "Superuser";
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(form.value);
  // }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }
}
