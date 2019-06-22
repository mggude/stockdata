import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Stock } from "./stock.model";

@Injectable({
  providedIn: "root"
})
export class APIService {
  private url =
    "https://sandbox.iexapis.com/stable/ref-data/symbols?token=Tpk_9ef4a4e9b01d41aaab56e08a429923f8";

  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock> {
    return this.http.get<Stock>(this.url);
  }
}
