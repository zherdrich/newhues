export interface Results {
    results: Search[];
}

export interface Search {
    query: string;
    title: string;
    release_title: string;
    artist: string;
    genre: string;
    style: string;
    year: string;
    format: string;
    thumb: string;
}

export default interface Information {
    id: number,
    title: string,
    sourceUrl: string,
    servings: string,
    readyInMinutes: number,
  }
