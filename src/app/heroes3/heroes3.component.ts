import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes3',
  templateUrl: './heroes3.component.html',
  styleUrls: ['./heroes3.component.css']
})
export class Heroes3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
