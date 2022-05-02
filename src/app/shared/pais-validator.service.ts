import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from "@angular/forms";
import { delay, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PaisValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    //console.log('hey');

    return this.http
      .get<any[]>(`https://restcountries.com/v2/name/${control.value}`)
      .pipe(
        delay(2000),
        map((r) => {
          console.log(r.length);
          return r.length > 0 ? null : { paisCorrecto: true };
        })
      );
  }
}
