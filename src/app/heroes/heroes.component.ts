import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { 
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  heroes: Hero[];
  ngOnInit() {
    this.getHeroes();
  }

}
