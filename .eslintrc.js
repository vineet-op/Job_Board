module.exports = {
    extends: ['next/core-web-vitals'],  // Base configuration from Next.js
    rules: {
        // Individual rule configurations
        'react-hooks/exhaustive-deps': 'warn',     // Hook dependency warnings
        '@typescript-eslint/no-explicit-any': 'warn',  // TypeScript 'any' type usage
        '@typescript-eslint/no-unused-vars': 'warn',   // Unused variables
        'react/jsx-key': 'error'  // Missing key props in lists
    },
}