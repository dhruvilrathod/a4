import { Component, Input, OnInit } from '@angular/core';
import { MyDetailsInterFace } from 'src/app/myInterfaces/mydetails-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() myDetails!: MyDetailsInterFace;

  public aboutMe: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.myDetails);
  }

  openDialog(): void{
    
  }
}
