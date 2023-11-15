export interface IPokemonListResponse {
  count: number,
  next: string,
  previous: null,
  results: Array<IPokemonListItem>
}

export interface IPokemonListItem {
  name: string,
  url: string,
}

export interface IPokemonDetails {
  sprites?: IPokemonSprite,
  [key: string]: any
}

interface IPokemonSprite {
  back_default: string,
  [key: string]: any
}
