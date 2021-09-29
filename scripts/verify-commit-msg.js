const chalk = require('chalk')
const msgPath = process.argv[2]
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(revert: )?(feat|fix|enhance|docs|style|refactor|test|ci|chore)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
    chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
    `    ${chalk.green(`feat(hero-image): add hero image to home page`)}\n` +
    `    ${chalk.green(`fix(home page toggle): toggle not working (close #28)`)}\n\n` +
    chalk.red(`  See .github/COMMIT_CONVENTION.md for more details.\n`) +
    chalk.red(`  You can also use ${chalk.cyan(`npm run commit`)} to interactively generate a commit message.\n`)
  )
  process.exit(1)
}

/**
 * Script originally produced by Evan Y.
 * Original Author: https://github.com/yyx990803
 * Modified: Yadi Abdalhalim
 * https://github.com/vuejs/vue/blob/a08feed8c410b89fa049fdbd6b9459e2d858e912/scripts/verify-commit-msg.js
 */
