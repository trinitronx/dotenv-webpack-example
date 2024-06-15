// destructuring won't work... these will be undefined
// See: https://github.com/mrsteele/dotenv-webpack/issues/121
const { TEST, TEST2 } = process.env
console.log('process.env', process.env)
console.log('process.env.TEST', process.env.TEST)
console.log('process.env.TEST2', process.env.TEST2)
// This secret is NOT secret! It gets hardcoded in the bundled ./dist/main.js
// Therefore, if your environment variables are secret:
//   - NEVER check in .env files
//   - NEVER use dotenv-webpack for secrets in production!
console.log('process.env.TEST_SECRET', process.env.TEST_SECRET)
console.log('TEST', TEST)
console.log('TEST2', TEST2)

