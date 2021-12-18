import { Component, Input, OnInit } from '@angular/core';
import { ArtDetailsInterface } from 'src/app/myInterfaces/art-interface';
import { NationFeaturedInterface } from 'src/app/myInterfaces/nation-interface';

@Component({
  selector: 'app-nation',
  templateUrl: './nation.component.html',
  styleUrls: ['./nation.component.css']
})
export class NationComponent implements OnInit {

  @Input() nationDetails!: NationFeaturedInterface[];
  @Input() artDetails!: ArtDetailsInterface[];

  arr1: any;
  public selectedNation!: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.nationDetails[1].nation);
    
  }
  nationSelected(e: any){
    this.arr1 = [];
    console.log('nation selected function called');
    console.log(e.target.innerText);
    this.selectedNation = e.target.innerText;
    for(var i=0; i<this.artDetails.length; i++){
      if(this.artDetails[i].nation == e.target.innerText){
        this.arr1.push(this.artDetails[i]);
      }
    }
    console.log(this.arr1);
  }

}
