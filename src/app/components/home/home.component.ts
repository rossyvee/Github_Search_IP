import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {environment} from "../../../environments/environment"
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchResults:any[] =[]

  displayResponse:boolean = false

  title = 'Search github users';

  responseMessage:string = "Searching ...... kindly wait."

  ngOnInit(){
  }

  constructor(private apiService: ApiService){
    console.log(environment.apiUrl);
  }

  searchForm = new FormGroup({
    username: new FormControl('',[Validators.required])
  })

/*   
  arrow functions
  let functionName = ()=>{

  }

  normal function declaration

  function functionName(){

  }

*/

  onSubmit(){
    const username = this.searchForm.value.username
    this.displayResponse=true
    this.responseMessage = "Searching ...... kindly wait."
    this.apiService.searchUsername(username).subscribe({
      next:(data)=>{
        
        this.searchResults= data.items

        if(data.items && data.items.length >0 ){
          this.displayResponse =false
        }else{
          this.responseMessage = `No results found for username :  ${username}` 
        }

        console.log(data.items)
      },
      error:(error)=>{
        console.log(error)
      }
    })

    // this.searchForm.reset()
    
  }

}
