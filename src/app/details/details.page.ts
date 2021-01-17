import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item:{};
  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.item=this._activeRoute.snapshot.paramMap.get("key"); 
    console.log(this.item)
    
  }

}
