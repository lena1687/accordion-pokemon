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
  sprites: IPokemonSprite
}

interface IPokemonSprite {
  front_default: string
}
