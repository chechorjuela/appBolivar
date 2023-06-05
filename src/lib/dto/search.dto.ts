interface SearchDto {
  q: string,
  type: Array<string>,
  market: string,
  limit: number | string,
  offset: number | string,
  include_external: string
}
