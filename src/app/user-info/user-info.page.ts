import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  userForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      company: ['', [Validators.required]],
    })
  }

  submit() {
    if(this.userForm.invalid) { 
      alert("Please enter all the required Details");
      return;
    }
    this.http.post('https://jsonplaceholder.typicode.com/users', this.userForm.value).subscribe(
      res => {
        if(res && res.hasOwnProperty('id')) alert("Form Submitted Successfully");
      }
    )
  }
}
