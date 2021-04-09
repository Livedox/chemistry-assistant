export interface IChemicalElement {
    readonly symbol: string
    readonly number: string
    readonly ar: string
    readonly oxidation: string[]
    readonly nameRu: string
    readonly nameLa: string
    readonly class: string
    readonly radioactive: boolean
}

export interface IColor {
    color?: string
    background?: string
}
export interface IColorOptions {
    s?: IColor
    p?: IColor
    d?: IColor
    fTop?: IColor
    fBottom?: IColor
}

export interface ISettingPeriodicTable extends IColorOptions {}