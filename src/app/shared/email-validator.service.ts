import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    //console.log('hey');

    return this.http
      .get<any[]>(`http://localhost:3000/usuarios?q=${control.value}`)
      .pipe(
        delay(2000),
        map((r) => {
          return r.length === 0 ? null : { emailTomado: true };
        })
      );
  }
}
