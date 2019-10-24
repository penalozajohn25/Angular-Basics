import { Component, OnInit } from '@angular/core';
import { Hero } from '../clases/hero';
import { HEROES } from '../clases/mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  public hero: string;
  public selectedHero:Hero =  {
    id: 0,
    name: ''
  };
  public heroClass: Hero = {
    id: 3,
    name: 'Windstorm2'
  };
  //public heroes       = HEROES;
  public heroes: Hero[];
  constructor(public heroService: HeroService) { }

  ngOnInit() {
    this.hero = 'Windstorm';
    this.getHeroes();
  }

  public onSelect(hero): void {
    this.selectedHero = hero;
  }

  public getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
