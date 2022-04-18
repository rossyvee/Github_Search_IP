import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {environment} from "../environments/environment"
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github username search';

  searchResults:any[] =[]

  displayResponse:boolean = false

  responseMessage:string = "Searching ...... kindly wait."

  ngInit(){
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

    this.searchForm.reset()
    console.log(this.searchForm.value);
    
  }



}
