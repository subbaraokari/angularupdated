import { Component } from "@angular/core";
import { Servers } from "./servers/servers";
import { Dummy } from "./dummy/dummy";

@Component({
  selector:"app-root",
  templateUrl:"./app.html",
  styleUrls:['./app.css'],
  imports:[Servers,Dummy]
})
export class App{
}