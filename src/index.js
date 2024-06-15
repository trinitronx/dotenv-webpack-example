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
//   - NEVER reference a process.env.<SECRET_VAR> if you don't want it included in the bundle
console.log('process.env.TEST_SECRET', process.env.TEST_SECRET)
// If we don't reference a variable, it won't be bundled
// Uncommenting the following line would pull in the other secret
// console.log('process.env.TEST_SECRET2', process.env.TEST_SECRET2)
console.log('TEST', TEST)
console.log('TEST2', TEST2)

