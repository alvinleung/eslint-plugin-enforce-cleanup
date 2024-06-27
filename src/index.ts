// src/index.ts
import callCleanupRule from "./rules/call-cleanup";
import implementCleanupRule from "./rules/implement-cleanup";

export const rules = {
  "call-cleanup": callCleanupRule,
  "implement-cleanup": implementCleanupRule,
};
