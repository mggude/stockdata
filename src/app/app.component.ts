import { Component } from "@angular/core";
import { Stock } from "./stock.model";
import { APIService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "assessment3";

  stockData: Stock;

  constructor(private svc: APIService) {}

  ngOnInit() {
    this.svc.getStocks().subscribe(data => {
      this.stockData = data;
      console.log(this.stockData);
    });
  }
}
