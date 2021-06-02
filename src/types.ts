export type City = {
  name: string;
  country: string;
  flag: string;
  image: string;
}

export type Continent = {
  id: number;
  name: string;
  countries: number;
  languages: number;
  about: string;
  description: string;
  slide_image: string;
  cover_image: string;
  main_cities: City[];
}