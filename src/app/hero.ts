export interface Hero {
  id: number;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    fullname: string;
    alignment: string;
  };
  work: {
    occupation: string;
  };
  image: {
    url: string;
  };
}
