import { Component, OnInit } from '@angular/core';
import { WetherserviceService } from './services/wetherservice.service';
import { WetherData } from './model/wether.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private wetherseervice: WetherserviceService){}
  cityName: string = 'calicut'
  wetherData?: WetherData

  ngOnInit(): void {
    // this.getWeather(this.cityName);
    // this.cityName ='';
    this.wetherseervice.getWeather(this.cityName).subscribe({
      next: (response) =>{
        this.wetherData = response ;
        console.log(response)
      } 
    })

  }

  onsubmit(){
    // this.getWeather(this.cityName);
    // this.cityName ='';
  }


  // private getWeather(cityName:string) {
  //   this.wetherseervice.getWeather(cityName).subscribe({
  //     next: (response) =>{
  //       this.wetherData = response ;
  //       console.log(response)
  //     } 
  //   })
  // }
}
