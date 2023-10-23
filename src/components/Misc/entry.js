const expressions = require.context(
  "../../assets/images/misc/expressions",
  true
);
const storybeats = require.context("../../assets/images/misc/storybeats", true);
const shotStudies = require.context(
  "../../assets/images/misc/shotStudies",
  true
);

const figDrawings = require.context(
  "../../assets/images/misc/figdrawings",
  true
);
const illustrations = require.context(
  "../../assets/images/misc/illustrations",
  true
);
export const entry = [
  {
    id: "shotStudies",
    name: "Shot Studies",
    images: shotStudies.keys().map(shotStudies),
    className: "storybeats",
    blur: "Films referenced: Banshees of Inisherin (2022), Decision to Leave, (2022), Guillermo del Toro's Pinocchio (2022), and Power of the Dog (2021)",
  },
  {
    id: "storybeats",
    name: "Storybeats",
    images: storybeats.keys().map(storybeats),
    className: "storybeats",
  },
  {
    id: "expressions",
    name: "Expressions",
    images: expressions.keys().map(expressions),
    className: "expressions",
  },
  {
    id: "figdrawings",
    name: "Figure Drawings",
    images: figDrawings.keys().map(figDrawings),
    className: "figdrawings",
  },
  {
    id: "illustrations",
    name: "Illustrations",
    images: illustrations.keys().map(illustrations),
    className: "illustrations",
  },
];
