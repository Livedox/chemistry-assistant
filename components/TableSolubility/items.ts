export interface Cell{
    formula: string | null;
    names: string[] | null;
    solubility: "Р" | "М" | "Н" | "-" | "?" | "";
    additionalInformation: string | null;
    color: string | null;
}

const data: Cell[][] = [
    [
      {
        formula: "",
        names: [],
        solubility: "",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiOH",
        names: [
          "Гидроксид лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KOH",
        names: [
          "Едкое кали"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaOH",
        names: [
          "Гидроксид натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄OH",
        names: [
          "Гидроксид аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(OH)₂",
        names: [
          "Баритовая вода"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(OH)₂",
        names: [
          "Гашеная известь",
          "Известковая вода/молоко"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(OH)₂",
        names: [
          "Гидроксид магния"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(OH)₂",
        names: [
          "Гидроксид стронция"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(OH)₃",
        names: [
          "Гидроксид алюминия"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(OH)₃",
        names: [
          "Гидроксид хрома"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(OH)₂",
        names: [
          "Гидроксид железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(OH)₃",
        names: [
          "Гидроксид железа (III)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(OH)₂",
        names: [
          "Гидроксид марганца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(OH)₂",
        names: [
          "Гидроксид цинка"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgOH",
        names: [
          "Гидроксид серебра"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(OH)₂",
        names: [
          "Гидроксид ртути"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(OH)₂",
        names: [
          "Гидроксид свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(OH)₂",
        names: [
          "Гидроксид олова"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(OH)₂",
        names: [
          "Гидроксид меди"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "HF",
        names: [
          "Фтороводород",
          "Плавиковая кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiF",
        names: [
          "Фторид лития"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KF",
        names: [
          "Фторид калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaF",
        names: [
          "Фторид натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄F",
        names: [
          "Фторид аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaF₂",
        names: [
          "Фторид бария"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CaF₂",
        names: [
          "Фторид кальция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgF₂",
        names: [
          "Фторид магния"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrF₂",
        names: [
          "Фторид стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AlF₃",
        names: [
          "Фторид алюминия"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CrF₃",
        names: [
          "Фторид хрома"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeF₂",
        names: [
          "Фторид железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₃",
        names: [
          "Фторид железа (III)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnF₂",
        names: [
          "Фторид марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnF₂",
        names: [
          "Фторид цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgF",
        names: [
          "Фторид серебра"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgF₂",
        names: [
          "Фторид ртути"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbF₂",
        names: [
          "Фторид свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnF₂",
        names: [
          "Фторид олова"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuF₂",
        names: [
          "Фторид меди"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "HCl",
        names: [
          "Хлороводород",
          "Соляная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiCl",
        names: [
          "Хлорид лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KCl",
        names: [
          "Хлорид калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaCl",
        names: [
          "Хлорид натрия",
          "Каменная/поваренная соль"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄Cl",
        names: [
          "Нашатырь"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaCl₂",
        names: [
          "Хлорид бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "СaCl₂",
        names: [
          "Хлорид кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgCl₂",
        names: [
          "Хлорид магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrCl₂",
        names: [
          "Хлорид стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AlCl₃",
        names: [
          "Хлорид алюминия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CrCl₃",
        names: [
          "Хлорид хрома"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeCl₂",
        names: [
          "Хлорид железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeCl₃",
        names: [
          "Хлорид железа (III)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnCl₂",
        names: [
          "Хлорид марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnCl₂",
        names: [
          "Хлорид цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgCl",
        names: [
          "Хлорид серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgCl₂",
        names: [
          "Хлорид ртути/сулема"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbCl₂",
        names: [
          "Хлорид свинца"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnCl₂",
        names: [
          "Хлорид олова"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuCl₂",
        names: [
          "Хлорид меди"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "HBr",
        names: [
          "Бромоводород"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiBr",
        names: [
          "Бромид лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KBr",
        names: [
          "Бромид калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaBr",
        names: [
          "Бромид натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄Br",
        names: [
          "Бромид аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaBr₂",
        names: [
          "Бромид бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "СaBr₂",
        names: [
          "Бромид кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgBr₂",
        names: [
          "Бромид магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrBr₂",
        names: [
          "Бромид стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AlBr₃",
        names: [
          "Бромид алюминия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CrBr₃",
        names: [
          "Бромид хрома"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeBr₂",
        names: [
          "Бромид железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeBr₃",
        names: [
          "Бромид железа (III)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnBr₂",
        names: [
          "Бромид марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnBr₂",
        names: [
          "Бромид цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgBr",
        names: [
          "Бромид серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgBr₂",
        names: [
          "Бромид ртути"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbBr₂",
        names: [
          "Бромид свинца"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnBr₂",
        names: [
          "Бромид олова"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "СuBr₂",
        names: [
          "Бромид меди"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "HI",
        names: [
          "Иодоводород"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiI",
        names: [
          "Иодид лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KI",
        names: [
          "Иодид калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaI",
        names: [
          "Иодид натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄I",
        names: [
          "Иодид аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaI₂",
        names: [
          "Иодид бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CaI₂",
        names: [
          "Иодид кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgI₂",
        names: [
          "Иодид магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrI₂",
        names: [
          "Иодид стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AlI₃",
        names: [
          "Иодид алюминия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CrI₃",
        names: [
          "Иодид хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeI₂",
        names: [
          "Иодид железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FrI₃",
        names: [
          "Иодид железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnI₂",
        names: [
          "Иодид марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnI₂",
        names: [
          "Иодид цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgI",
        names: [
          "Иодид серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgI₂",
        names: [
          "Иодид ртути"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbI₂",
        names: [
          "Иодид свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnI₂",
        names: [
          "Иодид олова"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuI₂",
        names: [
          "Иодид меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₂S",
        names: [
          "Сероводород"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₂S",
        names: [
          "Сульфид лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₂S",
        names: [
          "Сульфид калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₂S",
        names: [
          "Сульфид натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂S",
        names: [
          "Сульфид аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaS",
        names: [
          "Сульфид бария"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CaS",
        names: [
          "Сульфид кальция"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgS",
        names: [
          "Сульфид магния"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrS",
        names: [
          "Сульфид стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al₂S₃",
        names: [
          "Сульфид алюминия"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr₂S₃",
        names: [
          "Сульфид хрома"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeS",
        names: [
          "Сульфид железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₂S₃",
        names: [
          "Сульфид железа (III)"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnS",
        names: [
          "Сульфид марганца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnS",
        names: [
          "Сульфид цинка"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₂S",
        names: [
          "Сульфид серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgS",
        names: [
          "Сульфид ртути"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbS",
        names: [
          "Сульфид свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnS",
        names: [
          "Сульфид олова"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuS",
        names: [
          "Сульфид меди"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₂S",
        names: ["Сероводород"],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiHS",
        names: [
          "Гидросульфид лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KHS",
        names: [
          "Гидросульфид калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaHS",
        names: [
          "Гидросульфид натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄HS",
        names: [
          "Гидросульфид аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(HS)₂",
        names: [
          "Гидросульфид бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(HS)₂",
        names: [
          "Гидросульфид кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(HS)₂",
        names: [
          "Гидросульфид магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(HS)₂",
        names: [
          "Гидросульфид стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(HS)₃",
        names: [
          "Гидросульфид алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(HS)₃",
        names: [
          "Гидросульфид хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HS)₂",
        names: [
          "Гидросульфид железа (II)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HS)₃",
        names: [
          "Гидросульфид железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(HS)₂",
        names: [
          "Гидросульфид марганца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(HS)₂",
        names: [
          "Гидросульфид цинка"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgHS",
        names: [
          "Гидросульфид серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(HS)₂",
        names: [
          "Гидросульфид ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(HS)₂",
        names: [
          "Гидросульфид свинца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(HS)₂",
        names: [
          "Гидросульфид олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(HS)₂",
        names: [
          "Гидросульфид меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₂SO₄",
        names: [
          "Серная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₂SO₄",
        names: [
          "Сульфат лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₂SO₄",
        names: [
          "Сульфат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₂SO₄",
        names: [
          "Сульфат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂SO₄",
        names: [
          "Сульфат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaSO₄",
        names: [
          "Сульфат бария",
          "Барит"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CaSO₄",
        names: [
          "Сульфат кальция"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgSO₄",
        names: [
          "Сульфат магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrSO₄",
        names: [
          "Сульфат стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al₂(SO₄)₃",
        names: [
          "Сульфат алюминия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr₂(SO₄)₃",
        names: [
          "Сульфат хрома"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeSO₄",
        names: [
          "Сульфат железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₂(SO₄)₃",
        names: [
          "Сульфат железа (III)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnSO₄",
        names: [
          "Сульфат марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnSO₄",
        names: [
          "Сульфат цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₂SO₄",
        names: [
          "Сульфат серебра"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgSO₄",
        names: [
          "Сульфат ртути"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbSO₄",
        names: [
          "Сульфат свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnSO₄",
        names: [
          "Сульфат олова"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuSO₄",
        names: [
          "Сульфат меди"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "LiHSO₄",
        names: [
          "Гидросульфат лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KHSO₄",
        names: [
          "Гидросульфат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaHSO₄",
        names: [
          "Гидросульфат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄HSO₄",
        names: [
          "Гидросульфат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(HSO₄)₂",
        names: [
          "Гидросульфат бария"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(HSO₄)₂",
        names: [
          "Гидросульфат кальция"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(HSO₄)₂",
        names: [
          "Гидросульфат магния"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(HSO₄)₂",
        names: [
          "Гидросульфат стронция"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(HSO₄)₃",
        names: [
          "Гидросульфат алюминия (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(HSO₄)₃",
        names: [
          "Гидросульфат хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HSO₄)₂",
        names: [
          "Гидросульфат железа (II)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HSO₄)₃",
        names: [
          "Гидросульфат железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HSO₄)₃",
        names: [
          "Гидросульфат железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(HSO₄)₂",
        names: [
          "Гидросульфат марганца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(HSO₄)₂",
        names: [
          "Гидросульфат цинка"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgHSO₄",
        names: [
          "Гидросульфат серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(HSO₄)₂",
        names: [
          "Гидросульфат ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(HSO₄)₂",
        names: [
          "Гидросульфат свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(HSO₄)₂",
        names: [
          "Гидросульфат олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(HSO₄)₂",
        names: [
          "Гидросульфат меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₂SO₃",
        names: [
          "Сернистая кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₂SO₃",
        names: [
          "Сульфит лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₂SO₃",
        names: [
          "Сульфит калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₂SO₃",
        names: [
          "Сульфит натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂SO₃",
        names: [
          "Сульфит аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaSO₃",
        names: [
          "Сульфит бария"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "СaSO₃",
        names: [
          "Сульфит кальция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgSO₃",
        names: [
          "Сульфит магния"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrSO₃",
        names: [
          "Сульфит стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al₂(SO₃)₃",
        names: [
          "Сульфит алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr₂(SO₃)₃",
        names: [
          "Сульфит хрома"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeSO₃",
        names: [
          "Сульфит железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₂(SO₃)₃",
        names: [
          "Сульфит железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnSO₃",
        names: [
          "Сульфит марганца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnSO₃",
        names: [
          "Сульфит цинка"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₂SO₃",
        names: [
          "Сульфит серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgSO₃",
        names: [
          "Сульфит ртути"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbSO₃",
        names: [
          "Сульфит свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnSO₃",
        names: [
          "Сульфит олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuSO₃",
        names: [
          "Сульфит меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "",
        names: [],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiHSO₃",
        names: [
          "Гидросульфит лития"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KHSO₃",
        names: [
          "Гидросульфит калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaHSO₃",
        names: [
          "Гидросульфит натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄HSO₃",
        names: [
          "Гидросульфит аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(HSO₃)₂",
        names: [
          "Гидросульфит бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(HSO₃)₂",
        names: [
          "Гидросульфит кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(HSO₃)₂",
        names: [
          "Гидросульфит магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(HSO₃)₂",
        names: [
          "Гидросульфит стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(HSO₃)₃",
        names: [
          "Гидросульфит алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(HSO₃)₃",
        names: [
          "Гидросульфит хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HSO₃)₂",
        names: [
          "Гидросульфит железа (II)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HSO₃)₃",
        names: [
          "Гидросульфит железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(HSO₃)₂",
        names: [
          "Гидросульфит марганца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(HSO₃)₂",
        names: [
          "Гидросульфит цинка"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgHSO₃",
        names: [
          "Гидросульфит серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(HSO₃)₂",
        names: [
          "Гидросульфит ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(HSO₃)₂",
        names: [
          "Гидросульфит свинца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(HSO₃)₂",
        names: [
          "Гидросульфит олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(HSO₃)₂",
        names: [
          "Гидросульфит меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "HNO₃",
        names: [
          "Азотная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiNO₃",
        names: [
          "Нитрат лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KNO₃",
        names: [
          "Нитрат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaNO₃",
        names: [
          "Нитрат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄NO₃",
        names: [
          "Нитрат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(NO₃)₂",
        names: [
          "Нитрат бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(NO₃)₂",
        names: [
          "Нитрат кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(NO₃)₂",
        names: [
          "Нитрат магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(NO₃)₂",
        names: [
          "Нитрат стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(NO₃)₃",
        names: [
          "Нитрат алюминия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(NO₃)₃",
        names: [
          "Нитрат хрома"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(NO₃)₂",
        names: [
          "Нитрат железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(NO₃)₃",
        names: [
          "Нитрат железа (III)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(NO₃)₂",
        names: [
          "Нитрат марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(NO₃)₂",
        names: [
          "Нитрат цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgNO₃",
        names: [
          "Нитрат серебра",
          "Ляпис"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(NO₃)₂",
        names: [
          "Нитрат ртути"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(NO₃)₂",
        names: [
          "Нитрат свинца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(NO₃)₂",
        names: [
          "Нитрат олова"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(NO₃)₂",
        names: [
          "Нитрат меди"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "HNO₂",
        names: [
          "Азотистая кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiNO₂",
        names: [
          "Нитрит лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KNO₂",
        names: [
          "Нитрит калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaNO₂",
        names: [
          "Нитрит натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄NO₂",
        names: [
          "Нитрит аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(NO₂)₂",
        names: [
          "Нитрит бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(NO₂)₂",
        names: [
          "Нитрит кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(NO₂)₂",
        names: [
          "Нитрит магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(NO₂)₂",
        names: [
          "Нитрит стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(NO₃)₃",
        names: [
          "Нитрит алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(NO₃)₃",
        names: [
          "Нитрит хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(NO₃)₃",
        names: [
          "Нитрит железа (II)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(NO₃)₃",
        names: [
          "Нитрит железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(NO₂)₂",
        names: [
          "Нитрит марганца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(NO₂)₂",
        names: [
          "Нитрит цинка"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgNO₂",
        names: [
          "Нитрит серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(NO₂)₂",
        names: [
          "Нитрит ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(NO₂)₂",
        names: [
          "Нитрит свинца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(NO₂)₂",
        names: [
          "Нитрит олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(NO₂)₂",
        names: [
          "Нитрит меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₃PO₄",
        names: [
          "Ортофосфорная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₃PO₄",
        names: [
          "Фосфат лития"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₃PO₄",
        names: [
          "Фосфат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₃PO₄",
        names: [
          "Фосфат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₃PO₄",
        names: [
          "Нитрит аммония"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba₃(PO₄)₂",
        names: [
          "Фосфат бария"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca₃(PO₄)₂",
        names: [
          "Фосфат кальция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg₃(PO₄)₂",
        names: [
          "Фосфат магния"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr₃(PO₄)₂",
        names: [
          "Фосфат стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AlPO₄",
        names: [
          "Фосфат алюминия"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CrPO₄",
        names: [
          "Фосфат хрома"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₃(PO₄)₂",
        names: [
          "Фосфат железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FePO₄",
        names: [
          "Фосфат железа (III)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn₃(PO₄)₂",
        names: [
          "Фосфат марганца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn₃(PO₄)₂",
        names: [
          "Фосфат цинка"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₃PO₄",
        names: [
          "Фосфат серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg₃(PO₄)₂",
        names: [
          "Фосфат ртути"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb₃(PO₄)₂",
        names: [
          "Фосфат свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn₃(PO₄)₂",
        names: [
          "Фосфат олова"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu₃(PO₄)₂",
        names: [
          "Фосфат меди"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₃PO₄",
        names: [
          "Ортофосфорная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₂HPO₄",
        names: [
          "Гидрофосфат лития"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₂HPO₄",
        names: [
          "Гидрофосфат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₂HPO₄",
        names: [
          "Гидрофосфат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂HPO₄",
        names: [
          "Гидрофосфат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(HPO₄)₂",
        names: [
          "Гидрофосфат бария"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(HPO₄)₂",
        names: [
          "Гидрофосфат кальция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(HPO₄)₂",
        names: [
          "Гидрофосфат магния"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(HPO₄)₂",
        names: [
          "Гидрофосфат стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(HPO₄)₃",
        names: [
          "Гидрофосфат алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(HPO₄)₃",
        names: [
          "Гидрофосфат хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HPO₄)₂",
        names: [
          "Гидрофосфат железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HPO₄)₃",
        names: [
          "Гидрофосфат железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn₂HPO₄",
        names: [
          "Гидрофосфат марганца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn₂HPO₄",
        names: [
          "Гидрофосфат цинка"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₂HPO₄",
        names: [
          "Гидрофосфат серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(HPO₄)₂",
        names: [
          "Гидрофосфат ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(HPO₄)₂",
        names: [
          "Гидрофосфат свинца"
        ],
        solubility: "М",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(HPO₄)₂",
        names: [
          "Гидрофосфат олова"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(HPO₄)₂",
        names: [
          "Гидрофосфат меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₂CO₃",
        names: [
          "Угольная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₂CO₃",
        names: [
          "Карбонат лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₂CO₃",
        names: [
          "Карбонат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₂CO₃",
        names: [
          "Карбонат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂CO₃",
        names: [
          "Карбонат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "BaCO₃",
        names: [
          "Карбонат бария"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CaCO₃",
        names: [
          "Карбонат кальция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgCO₃",
        names: [
          "Карбонат магния"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrCO₃",
        names: [
          "Карбонат стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al₂(CO₃)₃",
        names: [
          "Карбонат алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr₂(CO₃)₃",
        names: [
          "Карбонат хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeCO₃",
        names: [
          "Карбонат железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₂(CO₃)₃",
        names: [
          "Карбонат железа (III)"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnCO₃",
        names: [
          "Карбонат марганца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnCO₃",
        names: [
          "Карбонат цинка"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₂СO₃",
        names: [
          "Карбонат серебра"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgCO₃",
        names: [
          "Карбонат ртути"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbCO₃",
        names: [
          "Карбонат свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnCO₃",
        names: [
          "Карбонат олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuCO₃",
        names: [
          "Карбонат меди"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "ll",
        names: [],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "LiHCO₃",
        names: [
          "Гидрокарбонат лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "KHCO₃",
        names: [
          "Гидрокарбонат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NaHCO₃",
        names: [
          "Гидрокарбонат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "NH₄HCO₃",
        names: [
          "Гидрокарбонат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ba(HCO₃)₂",
        names: [
          "Гидрокарбонат бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ca(HCO₃)₂",
        names: [
          "Гидрокарбонат кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mg(HCO₃)₂",
        names: [
          "Гидрокарбонат магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sr(HCO₃)₂",
        names: [
          "Гидрокарбонат стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al(HCO₃)₃",
        names: [
          "Гидрокарбонат алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr(HCO₃)₂",
        names: [
          "Гидрокарбонат хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HCO₃)₂",
        names: [
          "Гидрокарбонат железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe(HCO₃)₃",
        names: [
          "Гидрокарбонат железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Mn(HCO₃)₂",
        names: [
          "Гидрокарбонат марганца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Zn(HCO₃)₂",
        names: [
          "Гидрокарбонат цинка"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "AgHCO₃",
        names: [
          "Гидрокарбонат серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Hg(HCO₃)₂",
        names: [
          "Гидрокарбонат ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Pb(HCO₃)₂",
        names: [
          "Гидрокарбонат свинца"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Sn(HCO₃)₂",
        names: [
          "Гидрокарбонат олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cu(HCO₃)₂",
        names: [
          "Гидрокарбонат меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "CH₃COOH",
        names: [
          "Этановая кислота",
          "Уксусная кислота"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CH₃COOLi",
        names: [
          "Ацетат лития"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CH₃COOK",
        names: [
          "Ацетат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CH₃COONa",
        names: [
          "Ацетат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CH₃COONH₄",
        names: [
          "Ацетат аммония"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Ba",
        names: [
          "Ацетат бария"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Ca",
        names: [
          "Ацетат кальция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Mg",
        names: [
          "Ацетат магния"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Sr",
        names: [
          "Ацетат стронция"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₃Al",
        names: [
          "Ацетат алюминия"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₃Cr",
        names: [
          "Ацетат хрома"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Fe",
        names: [
          "Ацетат железа (II)"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₃Fe",
        names: [
          "Ацетат железа (III)"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Mn",
        names: [
          "Ацетат марганца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Zn",
        names: [
          "Ацетат цинка"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CH₃COOAg",
        names: [
          "Ацетат серебра"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Hg",
        names: [
          "Ацетат ртути"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Pb",
        names: [
          "Ацетат свинца"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Sn",
        names: [
          "Ацетат олова"
        ],
        solubility: "-",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(CH₃COO)₂Cu",
        names: [
          "Ацетат меди"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      }
    ],
    [
      {
        formula: "H₂SiO₃",
        names: [
          "Кремниевая кислота"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Li₂SiO₃",
        names: [
          "Силикат лития"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "K₂SiO₃",
        names: [
          "Силикат калия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Na₂SiO₃",
        names: [
          "Силикат натрия"
        ],
        solubility: "Р",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂SiO₃",
        names: [
          "Силикат аммония"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "(NH₄)₂SiO₃",
        names: [
          "Силикат аммония"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CaSiO₃",
        names: [
          "Силикат кальция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MgSiO₃",
        names: [
          "Силикат магния"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SrSiO₃",
        names: [
          "Силикат стронция"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Al₂(SiO₃)₃",
        names: [
          "Силикат алюминия"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Cr₂(SiO₃)₃",
        names: [
          "Силикат хрома"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "FeSiO₃",
        names: [
          "Силикат железа (II)"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Fe₂(SiO₃)₃",
        names: [
          "Силикат железа (III)"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "MnSiO₃",
        names: [
          "Силикат марганца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "ZnSiO₃",
        names: [
          "Силикат цинка"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "Ag₂SiO₃",
        names: [
          "Силикат серебра"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "HgSiO₃",
        names: [
          "Силикат ртути"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "PbSiO₃",
        names: [
          "Силикат свинца"
        ],
        solubility: "Н",
        additionalInformation: null,
        color: null
      },
      {
        formula: "SnSiO₃",
        names: [
          "Силикат олова"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      },
      {
        formula: "CuSiO₃",
        names: [
          "Силикат меди"
        ],
        solubility: "?",
        additionalInformation: null,
        color: null
      }
    ]
];

export default data;