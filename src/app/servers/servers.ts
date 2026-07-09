import { UrlCodec } from "@angular/common/upgrade";
import { Component } from "@angular/core";
import { Server } from "./server/server";

@Component({
  selector:"app-servers",
  templateUrl:"./servers.html",
  styleUrls:["./servers.css"],
  imports:[Server]
})
export class Servers{

}