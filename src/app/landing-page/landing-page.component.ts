import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  products : any = [
    {
      image : "assets/images/download4.png",
      cart : "Chicken Supreme",
      details : "350"
    },
    {
      image :  "assets/images/download6.png",
      cart : "Nuggets + Fries Combo",
      details : "180"
    },
    {
      image : "assets/images/download3.png",
      cart : "Beef Burger + Fries combo",
      details : "350"
    },
    
    

  ]
}
