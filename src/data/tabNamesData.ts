export const tabNamesData = {
  voltage: [
    {
      name: "voltage",
      checkboxes: [
        "U1Avg",
        "U2Avg",
        "U3Avg",
        "U1Max",
        "U2Max",
        "U3Max",
        "U1Min",
        "U2Min",
        "U3Min",
        "UB",
      ],
      buttons: ["U1", "U2", "U3", "Max", "Min", "Avg"],
    },
  ],
  current: [
    {
      name: "current",
      checkboxes: [
        "I1Avg",
        "I2Avg",
        "I3Avg",
        "I1Max",
        "I2Max",
        "I3Max",
        "I1Min",
        "I2Min",
        "I3Min",
        "IGNAvg",
        "IGNMax",
        "IGNMin",
        "IUBPos",
        "IUBNeg",
        "IUBZero",
        "IUB",
      ],
      buttons: ["I1", "I2", "I3", "Max", "Min", "Avg"],
    },
  ],
  frequency: [
    {
      name: "frequency",
      checkboxes: ["FAvg", "FMax", "FMin"],
      buttons: [],
    },
  ],
  power: [
    {
      name: "power",
      checkboxes: [
        "P1Avg",
        "P2Avg",
        "P3Avg",
        "PTotAvg",
        "Q1Avg",
        "Q2Avg",
        "Q3Avg",
        "QTotAvg",
        "S1Avg",
        "S2Avg",
        "S3Avg",
        "STotAvg",
        "PF1Avg",
        "PF2Avg",
        "PF3Avg",
        "PFTotAvg",
      ],
      buttons: ["1", "2", "3", "Tot", "P", "Q", "S"],
    },
  ],
  flicker: [
    {
      name: "flicker",
      checkboxes: ["PLT1", "PLT2", "PLT3", "PST1", "PST2", "PST3"],
      buttons: ["PLT", "PST"],
    },
  ],
  harmonics: [
    {
      name: "harmonics",
      checkboxes: [
        "THDF_U1",
        "THDF_U2",
        "THDF_U3",
        "THDF_I1",
        "THDF_I2",
        "THDF_I3",
        "TDD_U1",
        "TDD_U2",
        "TDD_U3",
        "TDD_I1",
        "TDD_I2",
        "TDD_I3",
        "K_I1",
        "K_I2",
        "K_I3",
      ],
      buttons: [],
    },
  ],
  rvc: [
    {
      name: "rvc",
      checkboxes: [],
      buttons: [],
    },
  ],
}
