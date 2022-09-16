import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  submit() {
    if (this.form.invalid) return;
    this.submitted = true;

    const user = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    this.auth.registration(user).subscribe((res) => {
        this.form.reset();

        // TODO res OK
        this.router.navigateByUrl('login')
      },
      error => {
        this.submitted = false;
        alert("Something went wrong");
      })
  }

}
