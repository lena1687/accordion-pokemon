export interface IPokemonListResponse {
  count: number,
  next: string,
  previous: null,
  results: Array<IPokemonListItem>
}

export interface IPokemonListItem {
  name: string,
  url: string,
  content?: string
}
