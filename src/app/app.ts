import { Component } from "@angular/core";
import { Servers } from "./servers/servers";

@Component({
  selector:"app-root",
  templateUrl:"./app.html",
  styleUrls:['./app.css'],
  imports:[Servers]
})
export class App{
}