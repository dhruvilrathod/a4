import { Component } from '@angular/core';
import myData from '../assets/data/A4.json';
import { MyDetailsInterFace } from './myInterfaces/mydetails-interface';
import { ArtDetailsInterface } from './myInterfaces/art-interface';
import { NationFeaturedInterface } from './myInterfaces/nation-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4doejane';
  data: MyDetailsInterFace = myData.myDetails;
  nation: NationFeaturedInterface[] = myData.nationsFeatured;
  artdetails: ArtDetailsInterface[] = myData.artDetails;

  ngOnInit() {
    console.log('oninit called');
    console.log(myData.myDetails.A4Name);
    console.log(myData.nationsFeatured);
    console.log(this.nation);
    console.log(this.artdetails);
  }
}
