export type zerfall = 'alpha' | 'betam' | 'neutron'

export interface isotop {
    isotop: string
    isotop_name: string
    isotop_symbol: string
    metastabil: boolean
    neutronen: number //neutrons
    masse: string //mass
    halbwertszeit: 'stable' | string //half-life
    zerfall: zerfall
}

export interface Element {
    element: {
        name: string //name
        symbol: string //short form (H, He, Os)
    }
    isotopes: isotop[]
}

export type file = Element[] //File defs
