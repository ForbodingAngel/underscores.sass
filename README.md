underscores.sass
================

An addon for underscores.me implementing easily transportable grunt.js with optional implementations of bourbon.neat and font-awesome!


Why was this created?
================

I like SASS and Grunt.js! I also LURVE underscores.me, which is unfortunately css only, so I wanted a portable implementation that would allow me to jump in and immediately use sass without having to modify underscores.me at all.

It should be pointed out that you don't have to use bourbon.neat or font-awesome. However, they are there if you like them. In main.scss, just comment out whatever libs you don't want to use.


So how to I use this?
================

First off, you need to have node.js, grunt.js, ruby, and sass installed (this all sounds a lot harder than it actually is, even on windows it's quite simple! (full disclosure, I use win7 with console 2 and git bash)).

You will need this grunt module: https://www.npmjs.org/package/grunt-contrib-compass 
	
	$ npm install grunt-contrib-compass

Just dump these contents into your theme folder

Add these lines to your functions.php file in the enqueue script section

	wp_enqueue_script( 'underscores-sass-plugins', get_template_directory_uri() . '/js/plugins.js', array(), '20120206', true );

	wp_enqueue_script( 'underscores-sass-main', get_template_directory_uri() . '/js/main.js', array(), '20120205', true );

Start grunt via cli from your theme folder.

Profit???


Why is this readme so sparce?
================

Cuz I'm nub.