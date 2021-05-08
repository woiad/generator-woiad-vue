const Generator = require('yeoman-generator')

module.exports = class extends Generator{
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'you project name',
        default: this.appname
      }
    ])
      .then(answers => {
        this.answers = answers
      })
  }

  writing() {
    // 把每一个文件都通过模板转换到目标路径
    const templates = [
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue'
    ]
    templates.forEach(path => {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(path),
        this.answers
      )
    })
  }
}
