import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends OnInit
{
  ngOnInit()
  {	  	
	<any>$.material.init();
	<any>$.material.ripples();
	<any>$.material.input();
	<any>$.material.checkbox();
	<any>$.material.radio();
  }
}
