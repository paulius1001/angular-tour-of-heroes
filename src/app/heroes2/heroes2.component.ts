import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes2',
  templateUrl: './heroes2.component.html',
  styleUrls: ['./heroes2.component.css']
})
export class Heroes2Component implements OnInit {

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
