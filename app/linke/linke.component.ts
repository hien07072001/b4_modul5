import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linke',
  templateUrl: './linke.component.html',
  styleUrls: ['./linke.component.css']
})
export class LinkeComponent implements OnInit {
  likes = 0;
  likeThis() {
    this.likes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
