import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repos } from 'src/app/interfaces/repos';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:string = ""

  loading:boolean = false

  userinfo:User = {};

  repos:Repos[] =[]

  constructor(private activatedRoute:ActivatedRoute, private apiService: ApiService) { 
    this.activatedRoute.params.subscribe(params=>this.username=params['username']
    )
    this.fetchUser()
    this.fetchRepo()
    console.log("username: ", this.username);
  }

  ngOnInit(): void {

  }

  fetchRepo(){
    this.loading = true
    this.apiService.fetchRepositories(this.username).subscribe({
      next:(data)=>{ // arrow function
        this.loading =false
        this.repos = data
        console.log(data)
      },
      error:(error)=>{  //anonymous function
        this.loading =false
        console.log(error)
      }
    })
  }
  

  fetchUser(){
    this.loading = true
    this.apiService.fetchUser(this.username).subscribe({
      next:(data)=>{ // arrow function
        this.loading =false
        this.userinfo = data
        console.log(data)
      },
      error:(error)=>{  //anonymous function
        this.loading =false
        console.log(error)
      }
    })
  }

}
