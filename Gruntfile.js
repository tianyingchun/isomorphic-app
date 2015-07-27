var envify = require('envify/custom');

module.exports = function(grunt) {

    // var banner = [
    //     '/**',
    //     ' * <%= pkg.name %> <%= pkg.version %>',
    //     ' * <%= pkg.homepage %>',
    //     ' * Copyright (c) 2013 Luiz de Prá (AKA RawArkanis) http://luizdepra.com.br',
    //     ' * <%= pkg.description %>',
    //     ' * built on: ' + new Date(),
    //     ' */',
    //     ''
    // ].join("\n");

    //
    // reference: grunt-react/Gruntfile.js
    // https://github.com/jmreidy/grunt-browserify
    // http://javascript.ruanyifeng.com/tool/browserify.html
    // http://javascript.ruanyifeng.com/tool/grunt.html
    // -------------------------------------------------------------------
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */',

        // The module configurations.
        _modules: {
            // the current working directory related Gruntfile.js.
            cwd: './',

            NODE_ENV: 'development', //'production'

            // the default transform react jsx source files related Gruntfile.js.
            reactJsx: './public/react/**/*.jsx',

            reactifyDestDir: './public/built/reactify',

            eslint: './public/react/**/*{.jsx,.js}',

            reactEntry: './public/react/start.jsx',

            // the bundled destination directory.
            bundleDestDir: './public/built/browserify',

            vendorDestDir: './public/built/vendor'

        },

        eslint: {
            //http://eslint.org/docs/rules/
            //https://www.npmjs.com/package/grunt-eslint
            options: {
                configFile: '.eslintrc'
                    // outputFile:''
                    // format: require('eslint-tap')
            },
            react: [
                // 'Gruntfile.js',
                '<%= _modules.eslint %>'
            ]
        },
        react: {
            options: {
                sourceMap: true
            },
            dynamicMappings: {
                files: [{
                    expand: true,
                    cwd: '<%= _modules.cwd %>',
                    src: ['<%= _modules.reactJsx %>'],
                    dest: '<%= _modules.reactifyDestDir %>',
                    ext: '.js',
                    extDot: 'last'
                }]
            }
        },
        watch: {
            react: {
                files: ['<%= _modules.reactJsx %>', 'actions/*.js', 'stores/**/*.js'],
                tasks: ['browserify:dev']
            }
        },
        envify: {
            // used to remove`process.env.NODE_ENV === "development"`
            options: {
                env: {
                    NODE_ENV: 'production'
                }
            },
            // handle react lib process.env.NODE_ENV.
            react: {
                src: ['<%=browserify.vendor.dest %>'],
                dest: '<%= _modules.vendorDestDir %>/react-envified.js'
            }
        },
        uglify: {
            //document: https://www.npmjs.com/package/grunt-contrib-uglify
            options: {
                banner: '<%= banner%>',

                compress: {
                    // maybe in our js code:
                    // if we set global_defs.DEBUG==false, it will ignore console.log("xxxxx")
                    // if(DEBUG) {
                    //     console.log("xxxx")
                    // }
                    global_defs: {
                        'DEBUG': false
                    },
                    dead_code: true
                }
            },
            // uglify task configuration goes here.
            // the named <core> `target`
            prod: {
                files: {
                    '<%= _modules.vendorDestDir %>/react.min.js': '<%=envify.react.dest %>',
                    '<%= _modules.vendorDestDir %>/react.ie8fix.min.js': '<%= _modules.vendorDestDir %>/react.ie8fix.js',
                    '<%= _modules.bundleDestDir %>/bundle.min.js': '<%= _modules.bundleDestDir %>/bundle.js'
                }
            }
        },
        // using browerify automatically combined all jsx and js file to boudle.js with sourceMap in debug mode.
        browserify: {
            // Cause of we don't want to build react,reflux libaray to bundle.js
            // using `external` to ignore it.
            'vendor': {
                src: [],
                dest: '<%= _modules.vendorDestDir %>/react.js',
                options: {
                    require: ['react', 'reflux', 'react-router', 'react/addons']
                }
            },
            'vendorIe8': {
                src: [],
                dest: '<%= _modules.vendorDestDir %>/react.ie8fix.js',
                options: {
                    // 'queryselector-polyfill' for ie6,7
                    require: ['es5-shim/es5-shim', 'es5-shim/es5-sham', 'console-polyfill']
                }
            },
            // for debug mode using reactify plugin
            'dev': {
                files: {
                    '<%= _modules.bundleDestDir %>/bundle.js': ['<%= _modules.reactJsx %>'],
                },
                options: {
                    // excluded react, reflux dependancy while compile phase.
                    external: ['react', 'reflux', 'react-router', 'react/addons'],

                    browserifyOptions: {
                        debug: true,
                        entry: "<%= _modules.reactEntry %>"
                    },
                    transform: [
                        envify({
                            NODE_ENV: 'development'
                        }), ['reactify', {
                            'es6': true
                        }]
                    ]
                }
            },
            // for release
            'prod': {
                src: ['<%= _modules.reactJsx %>'],
                dest: '<%= _modules.bundleDestDir %>/bundle.js',
                options: {
                    // excluded react, reflux dependancy while compile phase.
                    external: ['react', 'reflux', 'react-router', 'react/addons'],

                    browserifyOptions: {
                        debug: false,
                        entry: "<%= _modules.reactEntry %>"
                    },
                    transform: [
                        envify({
                            NODE_ENV: 'production'
                        }), ['reactify', {
                            'es6': true
                        }]
                        // require('grunt-react').browserify
                    ]
                }
            }
        },
        // start node server and watch the changes of js,jsx,html,ejs
        nodemon: {
            dev: {
                script: 'bin/www',
                options: {
                    env: {
                        // for development, isomorphic server render react
                        // require the process.env.NODE_ENV =='development' | 'production'
                        NODE_ENV: '<%= _modules.NODE_ENV%>'
                    },
                    ext: 'js,jsx,html,ejs'
                }
            }
        }
    });


    // grunt.loadNpmTasks('grunt-react');
    // grunt.loadNpmTasks('grunt-browserify');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-nodemon');
    // We load grunt tasks listed in package.json file
    // require('load-grunt-tasks')(grunt);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('vendor', [
        'browserify:vendor', 'browserify:vendorIe8'
    ]);

    // The development build.
    grunt.registerTask('default', [
        'eslint', 'vendor', 'browserify:dev'
    ]);
    // The production build.
    grunt.registerTask('prod', [
        'vendor', 'envify', 'browserify:prod', 'uglify'
    ]);
};
