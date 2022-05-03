import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "src/app/shared.service";
import { PaisValidatorService } from "src/app/shared/pais-validator.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ss: SharedService,
    private rr: Router,
    private pValidator: PaisValidatorService
  ) {
    //if (localStorage.getItem('user')) {
    //  this.usuario = JSON.parse(localStorage.getItem('user')!);
    //}
    console.log(this.miFormulario1.status);
    sessionStorage.removeItem("band");
    this.inicio();
  }
  habitantesPattern: number = 0;
  labelu: string = "";
  usuario: string = "";
  bandera = false;
  bandera1 = false;
  band = true;
  b = false;
  a = false;
  update = 0;
  updateText = "";
  ngOnInit(): void {}
  items: string[] = ["Food"];
  miFormulario: FormGroup = this.fb.group({
    email: [
      localStorage.getItem("user")!,
      [Validators.required, Validators.email],
    ],
    item: ["", [Validators.required]],
  });

  formulario: FormGroup = this.fb.group({
    item: ["", [Validators.required]],
  });
  //////////////////formulario-paises
  miFormulario1: FormGroup = this.fb.group({
    email: [
      localStorage.getItem("user")!,
      [Validators.required, Validators.email],
    ],
    nombre: ["", [Validators.required]],
    abreviatura: ["", [Validators.required]],
    habitantes: ["", [Validators.required]],
    continente: ["", [Validators.required]],
  });

  inicio() {
    this.ss.busqueda(localStorage.getItem("user")!).subscribe((r) => {
      this.labelu = r[0].username;
    });
    this.ss.obtenerUsuario(localStorage.getItem("user")!).subscribe((r) => {
      //console.log(r);
      let cont = 0;
      for (let value of r) {
        //console.log(value.item);
        this.items[cont] = value.item;
        cont++;
      }
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }
  submitFormulario() {
    this.a = false;
    const x = this.miFormulario.value;
    const y = x.item;
    //console.log(this.items.length, x.item);
    this.items[this.items.length] = x.item;
    this.ss
      .nuevoUsuario(this.miFormulario.value, false)
      .subscribe((r) => console.log(r));
    this.ss.obtenerUsuario(localStorage.getItem("user")!).subscribe((r) => {
      //console.log(r);
    });
    this.miFormulario.markAllAsTouched();
  }
  eliminar(it: string) {
    //console.log(it);
    this.ss.obtenerUsuario(it).subscribe((r) => {
      //console.log(r[0].id);
      this.ss.eliminarItem(r[0].id).subscribe((r) => {
        const a = this.items.indexOf(it);
        this.items.splice(a, 1);
        //console.log(this.items);
      });
    });
  }
  edit(it: string) {
    this.b = true;
    this.updateText = it;
    this.ss.obtenerUsuario(it).subscribe((r) => {
      console.log(r[0].id);
      this.update = r[0].id;
    });
  }
  upd() {
    const x = this.formulario.value;
    this.ss.updateItem(this.update, this.formulario.value).subscribe((r) => {
      this.b = false;
      const a = this.items.indexOf(this.updateText);
      this.items[a] = x.item;
    });
  }
  logout() {
    localStorage.removeItem("user");
    this.rr.navigate(["/menu"]);
  }
  ////////////////////////paises
  submitFormulario1() {
    this.bandera = false;
    console.log("hi");
    const x = this.miFormulario1.value;
    if (this.miFormulario.status === "VALID") {
      this.ss.pais(x.nombre).subscribe(
        (r) => {
          console.log("hear", r);
          this.ss
            .paisAgg(this.miFormulario1.value)
            .subscribe((r) => console.log(r));
          //this.miFormulario1.reset()
          //this.miFormulario1.touched = false;
          this.bandera1 = true;
        },
        (error) => {
          console.log("banderita");
          this.bandera = true;
        }
      );
    }
  }
  campoNoValido1(campo: string) {
    return (
      this.miFormulario1.get(campo)?.invalid &&
      this.miFormulario1.get(campo)?.touched
    );
  }
}
//ng-click="click(this)"
//json-server --watch db.json
