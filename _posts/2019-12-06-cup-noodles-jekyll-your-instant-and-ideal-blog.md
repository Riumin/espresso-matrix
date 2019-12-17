---
layout: post
title: 'Cup noodles Jekyll: your instant and ideal blog'
date: 2019-12-05T17:16:23.043Z
comments: 'true'
---
> This manual involves the following contents you may be awared of:
>
> * terminal shell
> * Git
> * Git remote repository like Github or GitLab (optional)
> * paid domain name and DNS service (optional)
> * Netlify Content Management System (optional)
>
> It's all right if you have no idea of all these above, but it's recommanded that you learned about the required first. There will be no detailed introduction to all these things for your just following and making it.

You may be a geek mad in crafting something and certainly a personal blog included, or just simply feel like to have somewhere to  write  about everything about you without anything else. You may get tired of these websites which provide you an account, a user interface to write, some themes to assign your posting sites a little personality, etc. What contributes best could be just a little knowledge on computer network, websites - well, either makes no difference if not. Whatever, you are eager to own a personal blog or even website from content to server, yet no idea strikes you what to handle with first. **Then you shall read about this article about everything when I established this website you are accessing at present**, which aimed at guiding you an instant website with almost everything equipped, like an online editor, visual mathematical expressions, some graphical tools (say) and so on. 

There are plenty of **static website generators** across the Internet, like Hexo, Hugo, etc. They are based on varying syntax and compiling language. If no special orientation of you for a choice, then let's get started with Jekyll: the static website generator deployed for the one you are accessing at present.

One of the most attracting point of those Hypertext Marking Language website REconstructed by [liquid](https://shopify.github.io/liquid/) is that you decide everything. It may remind you of the Linux operating system, with diverse packages and desktop environments, which could be totally what likes yourself. So it is for those like Jekyll. Everything is up to you.

Here will be a step-by-step manual. The manual aimed at helping you with a fast and efficient way to reach an ideal website. Make good use of Google when faced with anything troubles. Take a general view of everything to be done first amid the following diagram.

<div class="mermaid" align="center">
stateDiagram
	[*] --> initialization
	initialization --> deployment
	initialization --> implementation
	implementation --> deployment
	deployment --> CMS
	deployment --> [*]
	CMS --> [*]
	state initialization {
		[*] --> Ruby
		Ruby --> Jekyll
		Jekyll --> local
		local -->  [*]
	}
	state CMS {
		[*] --> OAuth
		OAuth --> Netlify
		Netlify --> [*]
	}
	state deployment {
		[*] --> GitHub
		GitHub --> [*]
		GitHub --> DNS
		DNS --> [*]
	}
</div>

# Initialization: generate a local site with Jekyll

It is advised to check the posting page of [Jekyll](https://jekyllrb.com) and follow its tuitorial. With probably varied operating system, a common process shall be as follow.

1. Install a full environment of Ruby.
2. Install Jekyll and bundler gems.
3. Create a local site with Jekyll.
4. Test your local site(optional).

## Ruby

Check the detailed introduction by Jekyll.

* [MacOS](https://jekyllrb.com/docs/installation/macos/)
* [Ubuntu Linux (perhaps suitable for Debian as well)](https://jekyllrb.com/docs/installation/ubuntu/)
* [Other Linux distros](https://jekyllrb.com/docs/installation/other-linux)
* [Windows](https://jekyllrb.com/docs/installation/windows/)

## Jekyll

```sh
gem install jekyll bundler
```

The command `gem` comes from the installation of `ruby` in the last step. So far you have made it to install all local environment and ready to initialize a local site. If any puzzle with Ruby, Jekyll or bundler, check [Ruby 101](https://jekyllrb.com/docs/ruby-101/#bundler) for details.

## Local site

```sh
jekyll new site-name
cd site-name
```

The command `jekyll new` generate a series of Hypertext Mark Language files rewrite in liquid to the path named `site-name`, which must be empty if existing. (Usually, you may forget about some by default invisible content, like `.git` or `.bash_profile`) A new generated Jekyll local site should be like the following.

```
.
├── about.md
├── _config.yml
├── css
│   └── main.scss
├── feed.xml
├── _includes
│   ├── footer.html
│   ├── header.html
│   ├── head.html
│   ├── icon-github.html
│   ├── icon-github.svg
│   ├── icon-twitter.html
│   └── icon-twitter.svg
├── index.html
├── js
│   ├── html5shiv.js
│   └── respond.js
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   └── 2019-12-06-welcome-to-jekyll.markdown
└── _sass
    ├── _base.scss
    ├── _layout.scss
    ├── _normalize.scss
    └── _syntax-highlighting.scss

6 directories, 22 files
```

* The content above is generated with Jekyll of its version 3.1.6. It could vary with the change of version.

For more commands of jekyll, you'd better type the command `jekyll --help` to check. Here is an instance of its certain version.

```
jekyll 3.1.6 -- Jekyll is a blog-aware, static site generator in Ruby

Usage:

  jekyll <subcommand> [options]

Options:
        -s, --source [DIR]  Source directory (defaults to ./)
        -d, --destination [DIR]  Destination directory (defaults to ./_site)
            --safe         Safe mode (defaults to false)
        -p, --plugins PLUGINS_DIR1[,PLUGINS_DIR2[,...]]  Plugins directory (defaults to ./_plugins)
            --layouts DIR  Layouts directory (defaults to ./_layouts)
            --profile      Generate a Liquid rendering profile
        -h, --help         Show this message
        -v, --version      Print the name and version
        -t, --trace        Show the full backtrace when an error occurs

Subcommands:
  docs                  
  import                
  build, b              Build your site
  clean                 Clean the site (removes site output and metadata file) without building.
  doctor, hyde          Search site and print specific deprecation warnings
  help                  Show the help message, optionally for a given subcommand.
  new                   Creates a new Jekyll site scaffold in PATH
  serve, server, s      Serve your site locally
```

## Test local site (optional)

Jekyll provides a simulative web server on local, which generate a content of website to the path `./_site` by default and occupy a protocal for access during its running. Usually you may get the following output when execute the command `jekyll server` under the path where the Jekyll site stored.

```
Configuration file: /home/username/jekyll.d/_config.yml
            Source: /home/username/jekyll.d
       Destination: /home/username/jekyll.d/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.242 seconds.
 Auto-regeneration: enabled for '/home/username/jekyll.d'
Configuration file: /home/username/jekyll.d/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

Anyhow access the web server on `http://127.0.0.1:4000/` with your web browser (or other hypertext transfer protocol client, if you like) and you shall view the following website.

![The initial site generated by Jekyll.](/assets/uploads/jekyll-initial-site.png "The initial site generated by Jekyll.")

## Personalize your site with another theme (optional)

It never disturbs if you feel like to assign your owned your personality for a better recognization. Factually, Jekyll holds a community for sharing and asking for themes designed by anyone, which is available [here](http://jekyllthemes.org/).
Just simple download the theme from the repository and deploy it to the path you have just initialized a Jekyll site. Remember take proper modification for your next deployment, like the author, name of your blog and the most significant site address.

