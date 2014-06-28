module.exports = (grunt) ->
  grunt.initConfig
    pkg : grunt.file.readJSON "package.json"

    less :
      dist :
        files :
          "dist/doc.css" : "doc.less"

    watch :
      files : ["index.html", "doc.less", "main.js", "image/ja/*.png", "image/en/*.png"]
      tasks : ["dev"]

    htmlmin:
      dist:
        options:
          removeComments: true
          collapseWhitespace: true
        files: "dist/index.html": "index.html"

    uglify:
      dist:
        files: "dist/main.js": ["main.js"]

    imagemin:
      dist:
        files: [
          expand: true,
          cwd: 'image/',
          src: ['**/*.png'],
          dest: 'dist/image/'
        ]

    grunt.loadNpmTasks "grunt-contrib-less"
    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-htmlmin"
    grunt.loadNpmTasks "grunt-contrib-uglify"
    grunt.loadNpmTasks "grunt-contrib-imagemin"

    grunt.registerTask "dev", ["less", "htmlmin", "uglify"]
    grunt.registerTask "default", ["less", "htmlmin", "uglify", "imagemin"]
