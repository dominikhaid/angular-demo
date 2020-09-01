import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 518,
        name: 'Plantman',
        powerstats: {
          intelligence: '63',
          strength: '60',
          speed: '25',
          durability: '55',
          power: '61',
          combat: '25',
        },
        biography: {
          fullname: 'Samuel Smithers',
          'alter-egos': 'No alter egos found.',
          aliases: ['Blackheath'],
          'place-of-birth': 'London, England',
          'first-appearance': 'Strange Tales #113 (October, 1963)',
          publisher: 'Marvel Comics',
          alignment: 'bad',
        },
        work: {
          occupation: 'Professional Criminal, formerly Gardner',
          base:
            'A submarine somewhere in the Atlantic Ocean, formerly London, United Kingdom',
        },
        image: {
          url:
            'https://www.superherodb.com/pictures2/portraits/10/100/10487.jpg',
        },
      },
      {
        id: 70,
        name: 'Batman',
        powerstats: {
          intelligence: '100',
          strength: '26',
          speed: '27',
          durability: '50',
          power: '47',
          combat: '100',
        },
        biography: {
          fullname: 'Bruce Wayne',
          'alter-egos': 'No alter egos found.',
          aliases: ['Insider', 'Matches Malone'],
          'place-of-birth': 'Crest Hill, Bristol Township; Gotham County',
          'first-appearance': 'Detective Comics #27',
          publisher: 'DC Comics',
          alignment: 'good',
        },
        work: {
          occupation: 'Businessman',
          base:
            'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
        },
      },
      {
        id: 522,
        name: 'Poison Ivy',
        powerstats: {
          intelligence: '81',
          strength: '14',
          speed: '21',
          durability: '40',
          power: '100',
          combat: '40',
        },
        biography: {
          fullname: 'Pamela Isley',
          'alter-egos': 'No alter egos found.',
          aliases: ['-'],
          'place-of-birth': 'Seattle, Washington',
          'first-appearance': 'Batman #181 (June 1966)',
          publisher: 'DC Comics',
          alignment: 'bad',
        },
        work: { occupation: 'Criminal, Botanist', base: 'Gotham City' },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/757.jpg',
        },
      },
      {
        id: 142,
        name: 'Bumblebee',
        powerstats: {
          intelligence: '63',
          strength: '28',
          speed: '25',
          durability: '10',
          power: '47',
          combat: '35',
        },
        biography: {
          fullname: 'Karen Beecher',
          'alter-egos': 'No alter egos found.',
          aliases: ['-'],
          'place-of-birth': '-',
          'first-appearance': 'Teen Titans #45',
          publisher: 'DC Comics',
          alignment: 'good',
        },
        work: { occupation: '-', base: 'San Francisco, California' },
        image: {
          url:
            'https://www.superherodb.com/pictures2/portraits/10/100/1542.jpg',
        },
      },
      {
        id: 165,
        name: 'Catwoman',
        powerstats: {
          intelligence: '69',
          strength: '11',
          speed: '33',
          durability: '28',
          power: '27',
          combat: '85',
        },
        biography: {
          fullname: 'Selina Kyle',
          'alter-egos': 'No alter egos found.',
          aliases: [
            'The Cat',
            'Irena Dubrovna',
            'Elva Barr',
            'Sadie Kelowski',
            'Madame Moderne',
            'Marguerite Tone',
          ],
          'place-of-birth': 'Gotham City',
          'first-appearance': 'Detective Comics #569',
          publisher: 'DC Comics',
          alignment: 'good',
        },
        work: { occupation: 'Thief', base: 'Gotham City' },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/659.jpg',
        },
      },
      {
        id: 201,
        name: 'Daredevil',
        powerstats: {
          intelligence: '75',
          strength: '13',
          speed: '25',
          durability: '35',
          power: '61',
          combat: '100',
        },
        biography: {
          fullname: 'Matt Murdock',
          'alter-egos': 'No alter egos found.',
          aliases: [
            'Matt',
            'Jack Batlin',
            'Kingpin of Crime',
            'Laurent LeVasseur',
            'Michael "Mike" Murdock',
            'Scarlet Swashbuckler',
            'Nameless One',
            "Kingpin of Hell's Kitchen",
            'The Man Without Fear',
            'The Guardian Devil',
            'DD',
            'Red',
            'Hornhead',
            'Cooper Peyton',
            'Captain Universe',
          ],
          'place-of-birth': 'New York City, New York',
          'first-appearance': 'Daredevil #1 (April, 1964)',
          publisher: 'Marvel Comics',
          alignment: 'good',
        },
        work: {
          occupation: 'Adventurer, vigilante, Attorney at Law',
          base: "Hell's Kitchen, New York, New York, Shadowland (formerly)",
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/52.jpg',
        },
      },
      {
        id: 236,
        name: 'Elastigirl',
        powerstats: {
          intelligence: '63',
          strength: '32',
          speed: '33',
          durability: '95',
          power: '52',
          combat: '70',
        },
        biography: {
          fullname: 'Helen Parr',
          'alter-egos': 'No alter egos found.',
          aliases: ['Mrs Incredible'],
          'place-of-birth': '-',
          'first-appearance': 'The Incredibles (Movies, 2004)',
          publisher: 'Dark Horse Comics',
          alignment: 'good',
        },
        work: { occupation: '-', base: '-' },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/870.jpg',
        },
      },
      {
        id: 732,
        name: 'Ironman',
        powerstats: {
          intelligence: '100',
          strength: '85',
          speed: '58',
          durability: '85',
          power: '100',
          combat: '64',
        },
        biography: {
          fullname: 'Tony Stark',
          'alter-egos': 'No alter egos found.',
          aliases: [
            'Iron Knight',
            'Hogan Potts',
            'Spare Parts Man',
            'Cobalt Man II',
            'Crimson Dynamo',
            'Ironman',
          ],
          'place-of-birth': 'Long Island, New York',
          'first-appearance': 'Tales of Suspence #39 (March, 1963)',
          publisher: 'Marvel Comics',
          alignment: 'good',
        },
        work: {
          occupation:
            'Inventor, Industrialist; former United States Secretary of Defense',
          base: 'Seattle, Washington',
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
        },
      },
      {
        id: 370,
        name: 'Joker',
        powerstats: {
          intelligence: '100',
          strength: '10',
          speed: '12',
          durability: '60',
          power: '43',
          combat: '70',
        },
        biography: {
          fullname: 'Jack Napier',
          'alter-egos': 'No alter egos found.',
          aliases: [
            'Red Hood I',
            'Clown Prince of Crime',
            'Harlequin of Hate',
            'Jack Napier',
            'Joe Kerr',
            'Mr. J',
          ],
          'place-of-birth': '-',
          'first-appearance': 'Batman #1 (Spring 1940)',
          publisher: 'DC Comics',
          alignment: 'bad',
        },
        work: {
          occupation: '-',
          base: 'Arkham Asylum, Gotham City; Ha-Hacienda',
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/719.jpg',
        },
      },
      {
        id: 332,
        name: 'Hulk',
        powerstats: {
          intelligence: '88',
          strength: '100',
          speed: '63',
          durability: '100',
          power: '98',
          combat: '85',
        },
        biography: {
          fullname: 'Bruce Banner',
          'alter-egos': 'No alter egos found.',
          aliases: [
            'Annihilator',
            'Captain Universe',
            'Joe Fixit',
            'Mr. Fixit',
            'Mechano',
            'Professor',
            'Jade Jaws',
            'Golly Green Giant',
          ],
          'place-of-birth': 'Dayton, Ohio',
          'first-appearance': 'Incredible Hulk #1 (May, 1962)',
          publisher: 'Marvel Comics',
          alignment: 'good',
        },
        work: {
          occupation: 'Nuclear physicist, Agent of S.H.I.E.L.D.',
          base:
            '(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico',
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/83.jpg',
        },
      },

      {
        id: 526,
        name: 'Predator',
        powerstats: {
          intelligence: '63',
          strength: '30',
          speed: '25',
          durability: '85',
          power: '100',
          combat: '90',
        },
        biography: {
          fullname: 'Yautja',
          'alter-egos': 'No alter egos found.',
          aliases: ['Hunters', 'Yautja', 'Hish'],
          'place-of-birth': 'Yautja Prime',
          'first-appearance': 'Predator (1987)',
          publisher: 'Dark Horse Comics',
          alignment: 'bad',
        },
        work: { occupation: '-', base: '-' },
        image: {
          url:
            'https://www.superherodb.com/pictures2/portraits/10/100/10448.jpg',
        },
      },
      {
        id: 644,
        name: 'Superman',
        powerstats: {
          intelligence: '94',
          strength: '100',
          speed: '100',
          durability: '100',
          power: '100',
          combat: '85',
        },
        biography: {
          fullname: 'Clark Kent',
          'alter-egos': 'Superman Prime One-Million',
          aliases: [
            'Clark Joseph Kent',
            'The Man of Steel',
            'the Man of Tomorrow',
            'the Last Son of Krypton',
            'Big Blue',
            'the Metropolis Marvel',
            'the Action Ace',
          ],
          'place-of-birth': 'Krypton',
          'first-appearance': 'ACTION COMICS #1',
          publisher: 'Superman Prime One-Million',
          alignment: 'good',
        },
        work: {
          occupation: 'Reporter for the Daily Planet and novelist',
          base: 'Metropolis',
        },
        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/791.jpg',
        },
      },
      {
        id: 659,
        name: 'Thor',
        powerstats: {
          intelligence: '69',
          strength: '100',
          speed: '83',
          durability: '100',
          power: '100',
          combat: '100',
        },
        biography: {
          fullname: 'Thor Odinson',
          'alter-egos': 'Rune King Thor',
          aliases: [
            'Donald Blake',
            'Sigurd Jarlson',
            'Jake Olsen',
            'Donar the Mighty',
          ],
          'place-of-birth': 'Asgard',
          'first-appearance': 'Journey into Mystery #83 (August, 1962)',
          publisher: 'Rune King Thor',
          alignment: 'good',
        },
        work: {
          occupation: 'King of Asgard; formerly EMS Technician; Physician',
          base: 'New York, New York',
        },

        image: {
          url: 'https://www.superherodb.com/pictures2/portraits/10/100/140.jpg',
        },
      },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
