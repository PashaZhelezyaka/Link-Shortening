export interface User {
  username: string
  password: string
}

export interface LinksInterface {
  counter: number
  id: number
  short: string
  target: string
}

export enum Order {
  none = "",
  asc_short = "asc_short",
  asc_target = "asc_target",
  asc_counter = "asc_counter",
  desc_short = "desc_short",
  desc_target = "desc_target",
  desc_counter = "desc_counter",
}
