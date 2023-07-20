const expressions = require.context(
  "../../assets/images/misc/expressions",
  true
);
const storybeats = require.context("../../assets/images/misc/storybeats", true);
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
