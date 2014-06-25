module.exports = (grunt) ->
  grunt.initConfig
    pkg : grunt.file.readJSON "package.json"

    less :
      dist :
        files :
          "doc.css" : "doc.less"

    exec :
      cmd : 'php index.php 1>index.html'

    watch :
      files : ["index.php", "doc.less"]
      tasks : ["default"]

    grunt.loadNpmTasks "grunt-contrib-less"
    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-exec"

    grunt.registerTask "default", ["less", "exec"]
