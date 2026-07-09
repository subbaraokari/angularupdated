import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"app-dummy",
    templateUrl:"./dummy.html",
    styleUrls:["./dummy.css"],
    imports:[FormsModule]
})
export class Dummy{
    username:string="Subbu"
    onNameChange(){
        this.username="Suresh"
    }
}