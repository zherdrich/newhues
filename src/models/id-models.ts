export interface Results {
    results: Search[];
}

export interface Search {
    title: string;
    genre: string[];
    year: string;
    cover_image: string;
    id: number;
}

export default interface Information {
    id: number,
    title: string,
    sourceUrl: string,
    servings: string,
    readyInMinutes: number,
  }
