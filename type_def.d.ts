export type zerfall = 'alpha' | 'betam' | 'neutron'

export interface isotop {
    isotop: string
    isotop_name: string
    isotop_symbol: string
    metastabil: boolean
    neutronen: number
    masse: string
    halbwertszeit: 'stable' | string
    zerfall: zerfall
}

export interface Element {
    element: {
        name: string
        symbol: string
    }
    isotopes: isotop[]
}

export type file = Element[]
