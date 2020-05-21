import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  citta ='';
  ris='';

  constructor(private requestservice:RequestService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.requestservice.getWeatherData(this.citta).subscribe(
      data=> {
        this.ris = 'A ' +  data['name'] + ' è ' + data['weather'][0]['description'];
        console.log(data);
      },
      error=> {
        this.ris = 'Errore';
      }
    )
  }

}
