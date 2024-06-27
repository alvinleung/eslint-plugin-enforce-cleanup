module.exports = {
  rules: {
    "implement-cleanup": require("./rules/implement-cleanup"),
    "call-cleanup": require("./rules/call-cleanup"),
  },
  configs: {
    recommended: {
      rules: {
        "enforce-cleanup/implement-cleanup": "error",
        "enforce-cleanup/call-cleanup": "error",
      },
    },
  },
};
