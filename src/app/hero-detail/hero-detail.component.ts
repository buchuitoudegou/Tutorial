import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  hero: Hero;
  getHero() {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(Number(id)).subscribe(hero => this.hero = hero);
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.getHero();
  }

}
