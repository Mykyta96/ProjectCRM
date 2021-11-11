import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fature } from '../interface/fature';
import { FatureService } from '../service/fature.service';

@Component({
  selector: 'app-info-fatture',
  templateUrl: './info-fatture.component.html',
  styleUrls: ['./info-fatture.component.css']
})
export class InfoFattureComponent implements OnInit {

  fatturaInfo!: Fature;


  constructor(private fatureService: FatureService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id){
        this.fatureService.getFattura(params.id)
          .subscribe(response => {
            this.fatturaInfo = response
            console.log(this.fatturaInfo)
          }
            )
      }
    })
  }

}
