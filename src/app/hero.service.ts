import { Injectable } from '@angular/core';
import { HEROES } from './mock-hero';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }
}
