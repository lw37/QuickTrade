import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private _activedRoute:ActivatedRoute) { }

  ngOnInit() {
    let nom=this._activedRoute.snapshot.paramMap.get('nombre')
  }

}
