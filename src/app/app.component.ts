import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search';
  placeDatas:any=[];
  place = {
    name: '',
  }
  placename='';
  constructor(private httpClient: HttpClient) { }

  searchPlace() {
    console.log(this.placename);
    // this.httpClient.get('https://developers.onemap.sg/commonapi/search?searchVal=kallang&returnGeom=Y&getAddrDetails=Y&pageNum=1').subscribe((data:any) => {
      this.httpClient.get('https://developers.onemap.sg/commonapi/search?searchVal='+this.placename+'&returnGeom=Y&getAddrDetails=Y&pageNum=1').subscribe((data:any) => {

      if ( data && data.results ){
        this.placeDatas=data.results

      // console.log(this.placeDatas);
      }

    });
  }

}
