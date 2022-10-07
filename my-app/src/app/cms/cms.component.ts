import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data.model';
import {DataService} from "../services/data.service"

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
 /*
   message="";
   postcomment:any[]=[];

  post() {
    this.postcomment.push(this.message);
    this.message="";
  } */

data:Data={
  description:""
}

getAll:any;



  constructor(private ds: DataService) { }

  ngOnInit(): void{
    this.ds.getAll().subscribe({
      next: (res) => {
         return this.getAll=res
      
      },
      error: (e) => console.error(e)
    })

    }


  post(): any{
     console.log("hello world");
     const data = {
      description: this.data.description,
    }

     this.ds.create(data)
      .subscribe({
        next: (res) => {
          return res
          [this.data.description=""]
        },
        error: (e) => console.error(e)
      })
}



}
