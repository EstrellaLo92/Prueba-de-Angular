import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ss: SharedService,
    private rr: Router
  ) {}
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, , Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  ngOnInit(): void {}

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    //console.log('holalogin');
    const x = this.miFormulario.value;
    //console.log(x.password);
    this.ss.log(x.email, x.password).subscribe((r) => {
      if (r.length !== 0) {
        console.log('hear');
        localStorage.setItem('user', x.email);
        this.rr.navigate(['/auth/dashboard']);
      }
    });
    this.miFormulario.markAllAsTouched();
  }
}
