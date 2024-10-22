export default {
  "**/*.{js,ts,tsx,cjs}": ["eslint --fix --cache"],
  "**/*": "prettier --write --ignore-unknown",
};
