module.exports = (grunt) ->
  grunt.initConfig
    pkg : grunt.file.readJSON "package.json"

    less :
      dist :
        files :
          "dist/doc.css" : "doc.less"

    watch :
      files : ["index.src.html", "doc.less", "main.js"]
      tasks : ["default"]

    htmlmin:
      dist:
        options:
          removeComments: true
          collapseWhitespace: true
        files: "dist/index.html": "index.src.html"

    uglify:
      dist:
        files: "dist/main.min.js": ["main.js"]

    imagemin:
      dist:
        files: [
          expand: true,
          cwd: 'image/',
          src: ['**/*.{png}'],
          dest: 'dist/image/'
        ]

    grunt.loadNpmTasks "grunt-contrib-less"
    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-htmlmin"
    grunt.loadNpmTasks "grunt-contrib-uglify"
    grunt.loadNpmTasks "grunt-contrib-imagemin"

    grunt.registerTask "default", ["less", "htmlmin", "uglify", "imagemin"]
