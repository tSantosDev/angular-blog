import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id:string = ""
  @Input()
  photoSmallCard:string = ""
  @Input()
  titleSmallCard:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
