import { Component, Input, OnInit } from '@angular/core';
import { ArtDetailsInterface } from 'src/app/myInterfaces/art-interface';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent implements OnInit {

  @Input() artDetails!: ArtDetailsInterface[];


  constructor() { }

  ngOnInit(): void {
    console.log(this.artDetails.length);
    console.log(this.artDetails[1].title); 
  }

}
