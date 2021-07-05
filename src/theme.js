const colorNames = {
  white: "#FFF",
  gallery: "#EEE",
  alto: "#DDD",
  silver: "#C9C2C2",
  crimson: "#DB1414",
  cinnabar: "#EE4444",
  teal: "#008080",
  persianGreen: "#009999",
  robinEggBlue: "#00CCCC",
  bondiBlue: "#00B3B3",
  forestGreen: "#1C8622",
  japaneseLaurel: "#05Af05",
  sherpaBlue: "#004D4D",
  mineShaft: "#222",
};

export const theme = {
  body: {
    backgroundColor: colorNames.gallery,
  },
  container: {
    backgroundColor: colorNames.white,
  },
  section: {
    backgroundColor: colorNames.white,
  },
  addButton: {
    color: colorNames.white,
    backgroundColor: colorNames.teal,
    hover: colorNames.persianGreen,
    active: colorNames.bondiBlue,
  },
  hideAndFinishButtons: {
    color: colorNames.teal,
    hover: colorNames.robinEggBlue,
    active: colorNames.sherpaBlue,
    disabled: colorNames.silver,
  },
  doneButton: {
    color: colorNames.white,
    backgroundColor: colorNames.forestGreen,
    hover: colorNames.japaneseLaurel,
  },
  removeButton: {
    backgroundColor: colorNames.crimson,
    hover: colorNames.cinnabar,
  },
  accent: {
    shadow: colorNames.alto,
    outline: colorNames.mineShaft,
    borderLight: colorNames.alto,
    borderDark: colorNames.mineShaft,
  },
  breakpoint: {
    mobile: 767,
    ipad: 768,
  },
};