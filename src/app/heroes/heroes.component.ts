import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  heroes: Hero[];
  loading = false;
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add({
    name = 'name',
    powerstats = {
      intelligence: '0',
      strength: '0',
      speed: '0',
      durability: '0',
      power: '0',
      combat: '0',
    },
    biography = { fullname: 'fullname', alignment: 'alignment' },
    work = { occupation: 'occupation' },
    image = { url: 'url' },
  }): void {
    name = name.trim();

    if (!name) {
      return;
    }

    // powerstats.intelligence = Number(powerstats.intelligence);
    // powerstats.strength = Number(powerstats.strength);
    // powerstats.speed = Number(powerstats.speed);
    // powerstats.durability = Number(powerstats.durability);
    // powerstats.power = Number(powerstats.power);
    // powerstats.combat = Number(powerstats.combat);

    this.heroService
      .addHero({
        name,
        powerstats,
        biography,
        work,
        image,
      } as Hero)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
