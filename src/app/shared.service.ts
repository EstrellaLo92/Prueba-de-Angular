import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor(private http: HttpClient) {}

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    };
  }
  log(em: string, pass: string) {
    return this.http.get<any[]>(
      `http://localhost:3000/usuarios?q=${em}&r=${pass}`
    );
  }
  busqueda(em: string) {
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${em}`);
  }
  nuevoUsuario(campo1: any, band: any) {
    console.log(typeof campo1);
    let r;
    if (band) r = "usuarios";
    else r = "items";
    return this.http.post(`http://localhost:3000/${r}`, campo1);
  }
  nuevoItem(campo1: any) {
    console.log(typeof campo1);
    return this.http.post("http://localhost:3000/items", campo1);
  }
  obtenerUsuario(em: any) {
    console.log("ss");
    return this.http.get<any[]>(`http://localhost:3000/items?q=${em}`);
  }
  eliminarItem(campo1: any) {
    console.log(typeof campo1);
    return this.http.delete(`http://localhost:3000/items/${campo1}`);
  }
  updateItem(campo1: any, campo2: any) {
    console.log(typeof campo1);
    return this.http.patch(`http://localhost:3000/items/${campo1}`, campo2);
  }
  ///////////////////////////////////////////Paises
  pais(control: string) {
    return this.http.get<any[]>(
      `https://restcountries.com/v3.1/name/${control}`
    );
  }
  paisAgg(control: any) {
    return this.http.post("http://localhost:3000/paises", control);
  }
}
//json-server --watch db.json
