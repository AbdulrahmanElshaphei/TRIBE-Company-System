import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  onSubmit() {

    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === 'Admin@1234') {

      // نحفظ ان الادمن مسجل دخول
      localStorage.setItem('adminToken', 'adminLogged');

      // نحوله للداشبورد
      this.router.navigate(['/dashboard']);

    } else {

      this.errorMessage = '❌ اسم المستخدم أو كلمة المرور غير صحيحة';

    }

  }

}