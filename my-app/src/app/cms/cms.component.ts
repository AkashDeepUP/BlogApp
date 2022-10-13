import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Data } from '../models/data.model';
import { DataService } from "../services/data.service"
import { map } from "rxjs/operators"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

  description = new FormControl('')
  /*
    message="";
    postcomment:any[]=[];
 
   post() {
     this.postcomment.push(this.message);
     this.message="";
   } */


  data: Data = {
    id: "",
    description: ""
  }

  key: any = {

  }

  // [key: string]: any;

  getAll: any;

  posts: any = []

  deep:any=[]

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAll().subscribe({
      next: (res) => {
        return this.getAll = res
      },
      error: (e) => console.error(e)
    });

    this.get(this.data.id)
    this.delete(this.data.id)
    this.update(this.posts.id,this.posts.description)
  }

  post(): any {
    console.log("hello world");
    const data = {
      description: this.data.description,
    }

    this.ds.create(data)
      .subscribe({
        next: (res) => {
          return res
          [this.data.description = ""]
        },
        error: (e) => console.error(e)
      })
  };



  get(id: any): any {
    this.ds.get(this.data.id)
      .pipe(map(res => {
        // console.log(res)
        const dataArray = []
        for (this.key in res) {
          //console.log(res[this.key])
          //console.log(key)
          //console.log({...res[this.key]})
          //console.log(res.hasOwnProperty(this.key))
          if ((res.hasOwnProperty(this.key))) {
            dataArray.push({ BlogId: this.key, ...res[this.key] })
          }
          // dataArray.push({DataId:this.key, ...res[this.key]})

        }
        return dataArray
      }))
      .subscribe({
        next: (data) => {
          //this.currentTutorial = data;
          console.log(data);
          this.posts = data;
          //console.log(this.posts)
        },
        error: (e) => console.error(e)
      });
  };

  update(_id: any,data: any): any {
    //_id.isEdit=true
    
    console.log(_id)
  data= {
  description: this.data.description
 }
   // this.posts.description= "akash.description"
    console.log("Update method is working")
    this.ds.update(_id, data).subscribe({
      
      next: (data) => {
        console.log(data)
       // this.data.description = data.description? data.description: "Blog has updated successfully"
      },
      error: (err) => console.error(err)
    });

  };

  delete(_id: any): any {
    if (confirm("Do you want to delete this Blog?")) {
      console.log(_id)
      this.ds.delete(_id).subscribe({

        next: (res) => {
          console.log(res);

        },
        error: (e) => console.error(e)
      })
    }
  }
}
