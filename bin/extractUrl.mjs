import cp from 'child_process'
import inquirer from 'inquirer'

process.on('SIGINT', () => {
  console.log('Close!')
  process.exit()
})

const extractRegex = /src="([\w:/.?!=%]*)"/
;(async () => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'url',
        message: 'Input html tag with src'
      }
    ])
    const extract = extractRegex.exec(answers.url)
    const url = extract?.[1]
    if(!url) {
        console.log('Not detected url!')
        continue
    }
    console.log()
    console.log(url)
    console.log('Copied to clipboard!')
    var proc = cp.spawn('pbcopy')
    proc.stdin.write(url)
    proc.stdin.end()
    proc.kill(0)
  }
})()
