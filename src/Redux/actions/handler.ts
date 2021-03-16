export interface Color {

    id: number
    name: string
    hexadecimal: string

    r: number
    g: number
    b: number

    created_at: Date
}

export interface colorList {
  colors : Color[]
}

export interface AddFilter {
  name: string
  selected: string
}



