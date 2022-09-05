import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  submit(){

    if(this.form.invalid) return;

    const user = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    this.auth.registration(user).subscribe((res)=>{
      console.log(res)
    })

  }

}
