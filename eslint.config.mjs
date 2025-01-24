import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js"; // Import the base ESLint configuration

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended, // Use the base recommended ESLint rules
  ...compat.extends("next/core-web-vitals"), // Extend Next.js configuration
  {
    // Add your custom rules or overrides here
    rules: {
      // Example: Disallow console.log in production
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    },
  },
];

export default eslintConfig;