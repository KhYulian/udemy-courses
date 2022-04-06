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
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;

  suggestUserName(ev: Event) {
    const suggestedName = "Superuser";
    // if (this.signupForm.value.userData.username) return;
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(form.value);
  // }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secretQuestion = form.value.secret;
    this.user.answer = form.value.questionAnswer;
    this.user.gender = form.value.gender;

    this.submitted = true;
  }
}
