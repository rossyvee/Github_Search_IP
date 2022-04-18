import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:string = ""

  user = null

  constructor(private activatedRoute:ActivatedRoute, private apiService: ApiService) { 
    this.activatedRoute.params.subscribe(params=>this.username=params['username']
    )
    this.fetchUser()
    console.log("username: ", this.username);
  }

  ngOnInit(): void {

  }

  fetchUser(){
    this.apiService.fetchUser(this.username).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

}
