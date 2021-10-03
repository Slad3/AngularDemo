import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timecomponent',
  templateUrl: './timecomponent.component.html',
  styleUrls: ['./timecomponent.component.css']
})
export class TimecomponentComponent implements OnInit {

	currentTime = 0
  constructor() { }

  ngOnInit(): void {

	setInterval(()=>{
		this.currentTime = Date.now()
		// document.getElementById("time").innerText = String()
	}, 300)
  }

}
