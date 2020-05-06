import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from "../services/auth-service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  signUpForm: FormGroup;
  isLoading: Boolean = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      staffId: new FormControl(null, [Validators.required]),
      password: new FormControl(null),
    });
  }
  onSubmit() {
    if (!this.signUpForm.valid) {
      return;
    }
    const staffId = this.signUpForm.value.staffId;
    const password = this.signUpForm.value.password;

    this.isLoading = true;
    this.authService.login(staffId, password).subscribe(
      (data) => {
        console.log(data);
        this.isLoading = false;
        this.router.navigate(["/albums"]);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.signUpForm.reset();
  }
}
