export interface Item{
    formula: string;
    names: string[];
    solubility: "Р" | "М" | "Н" | "-" | "?";
}
export interface Head{
    text: string;
    sup: string;
}

export interface Header {
    text: string;
    sup: string;
}

const leftHeaders: Header[] = [
    {
        text: "A/K",
        sup: ""
    },
    {
        text: "OH",
        sup: "-"
    },
    {
        text: "F",
        sup: "-"
    },
    {
        text: "Cl",
        sup: "-"
    },
    {
        text: "Br",
        sup: "-"
    },
    {
        text: "I",
        sup: "-"
    },
    {
        text: "S",
        sup: "2-"
    },
    {
        text: "HS",
        sup: "-"
    },
    {
        text: "SO₄",
        sup: "2-"
    },
    {
        text: "HSO₄",
        sup: "-"
    },
    {
        text: "SO₃",
        sup: "2-"
    },
    {
        text: "HSO₃",
        sup: "2-"
    },
    {
        text: "NO₃",
        sup: "-"
    },
    {
        text: "NO₂",
        sup: "-"
    },
    {
        text: "PO₄",
        sup: "3-"
    },
    {
        text: "HPO₄",
        sup: "2-"
    },
    {
        text: "CO₃",
        sup: "2-"
    },
    {
        text: "HCO₃",
        sup: "-"
    },
    {
        text: "CH₃COO",
        sup: "-"
    },
    {
        text: "SiO₃",
        sup: "2-"
    }
];

const topHeaders: Header[] = [
    {
        text: "H",
        sup: "+"
    },
    {
        text: "Li",
        sup: "+"
    },
    {
        text: "K",
        sup: "+"
    },
    {
        text: "Na",
        sup: "+"
    },
    {
        text: "NH₄",
        sup: "+"
    },
    {
        text: "Ba",
        sup: "2+"
    },
    {
        text: "Ca",
        sup: "2+"
    },
    {
        text: "Mg",
        sup: "2+"
    },
    {
        text: "Sr",
        sup: "2+"
    },
    {
        text: "Al",
        sup: "3+"
    },
    {
        text: "Cr",
        sup: "3+"
    },
    {
        text: "Fe",
        sup: "2+"
    },
    {
        text: "Fe",
        sup: "3+"
    },
    {
        text: "Mn",
        sup: "2+"
    },
    {
        text: "Zn",
        sup: "2+"
    },
    {
        text: "Ag",
        sup: "+"
    },
    {
        text: "Hg",
        sup: "2+"
    },
    {
        text: "Pb",
        sup: "2+"
    },
    {
        text: "Sn",
        sup: "2+"
    },
    {
        text: "Cu",
        sup: "2+"
    }
];

const data: Head[][] = [
    [{
        text: "H",
        sup: "+"
    }],
    [{
        text: "Li",
        sup: "+"
    }],
    [{
        text: "K",
        sup: "+"
    }],
    [{
        text: "Na",
        sup: "+"
    }],
    [{
        text: "NH₄",
        sup: "+"
    }],
    [{
        text: "Ba",
        sup: "2+"
    }],
    [{
        text: "Ca",
        sup: "2+"
    }],
    [{
        text: "Mg",
        sup: "2+"
    }],
    [{
        text: "Sr",
        sup: "2+"
    }],
    [{
        text: "Al",
        sup: "3+"
    }],
    [{
        text: "Cr",
        sup: "3+"
    }],
    [{
        text: "Fe",
        sup: "2+"
    }],
    [{
        text: "Fe",
        sup: "3+"
    }],
    [{
        text: "Mn",
        sup: "2+"
    }],
    [{
        text: "Zn",
        sup: "2+"
    }],
    [{
        text: "Ag",
        sup: "+"
    }],
    [{
        text: "Hg",
        sup: "2+"
    }],
    [{
        text: "Pb",
        sup: "2+"
    }],
    [{
        text: "Sn",
        sup: "2+"
    }],
    [{
        text: "Cu",
        sup: "2+"
    }],
];

export default { leftHeaders, topHeaders };