<h1>underscores.sass</h1>

An addon for underscores.me implementing easily transportable grunt.js with optional implementations of bourbon.neat and font-awesome!


<h1>Why was this created?</h1>

I like SASS and Grunt.js! I also LURVE underscores.me, which is unfortunately css only, so I wanted a portable implementation that would allow me to jump in and immediately use sass without having to modify underscores.me at all.

It should be pointed out that you don't have to use bourbon.neat or font-awesome. However, they are there if you like them. In main.scss, just comment out whatever libs you don't want to use.


<h1>So how to I use this?</h1>

First off, you need to have node.js, grunt.js, ruby, and sass installed (this all sounds a lot harder than it actually is, even on windows it's quite simple! (full disclosure, I use win7 with console 2 and git bash)).

After installing node.js (make sure it is in your PATH environment variable!), run this command to install grunt.js:

	$ npm install -g grunt-cli

You will need this grunt module: https://www.npmjs.org/package/grunt-contrib-compass by running this command:
	
	$ npm install grunt-contrib-compass

Just dump the contents of this repo into your theme folder

From the theme folder, run (this only needs to be done once so that the modules and dependencies get installed):

	$ npm install

Add these lines to your functions.php file in the enqueue script section:

	wp_enqueue_script( 'underscores-sass-plugins', get_template_directory_uri() . '/js/plugins.js', array(), '20120206', true );

	wp_enqueue_script( 'underscores-sass-main', get_template_directory_uri() . '/js/main.js', array(), '20120205', true );

Start grunt via cli from your theme folder.

Profit???

<h1>Extra instructions for windows users (if you don't use windows, ignore this)</h1>

You need to install MySYSGit for working with git

Go download console2 (http://sourceforge.net/projects/console/)

Go to settings and add a new Git Bash tab:

	Title
		Github Git Bash
	
	Icon:
		C:\Program Files (x86)\Git\etc\git.ico
	
	Shell:
		C:\Program Files (x86)\Git\bin\sh.exe -login -i
	
	Startup Dir:
		Wherever you want

You can add as many tabs as you like. This will make your life a lot easier.

Speaking of making life easier, I suggest also downloading "Ditto" for clipboard management, the pastebin app from pastebin.com for easy hotkey sharing of snippets, and greenshots so that you can take screencaps quickly and easily for sharing with other developers.

<h1>Why is this readme so sparce?<h1>

Cuz I'm nub.