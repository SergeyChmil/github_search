import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DataService {

  constructor(private _http: Http) {
  }

  getDataAPI(val: string): Observable<any> {
    return this._http.get("https://api.github.com/search/repositories?q=$" + val)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "DataService said: server error, getDataAPI"));
  }
}
