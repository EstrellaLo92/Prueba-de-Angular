import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { SharedService } from "src/app/shared.service";
import { EmailValidatorService } from "src/app/shared/email-validator.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"],
})
export class RegistroComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ss: SharedService,
    private eValidator: EmailValidatorService,
    private rr: Router
  ) {}

  miFormulario: FormGroup = this.fb.group(
    {
      username: ["", [Validators.required, Validators.minLength(3)]],
      nombre: ["", [Validators.required, Validators.minLength(4)]],
      apellido: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, , Validators.email], [this.eValidator]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+]).{6,}$"
          ),
        ],
      ],
      password2: ["", [Validators.required]],
    },
    {
      validators: [this.ss.camposIguales("password", "password2")],
      //validators: [this.ss.log('email', 'password')],
    }
  );
  ngOnInit(): void {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    //console.log('hola');
    //console.log(this.miFormulario.value);
    //console.log(this.miFormulario.status);
    if (this.miFormulario.status === "VALID") {
      //console.log('hola');
      this.ss
        .nuevoUsuario(this.miFormulario.value, true)
        .subscribe((r) => this.rr.navigate(["/auth/login"]));
    }
    this.miFormulario.markAllAsTouched();
  }
}
