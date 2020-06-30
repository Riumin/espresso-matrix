---
title: I'm using Jekyll in 2020, what puzzles if about to develop yours?
layout: subpost-1
comments: true
# category: blog
---

> The one who is able to undertand  how   a \`static' website differs from the  \`dynamic' one according to their underlying construction could be infered  able to distinguish compiling and database management. Yet those two irrelevant stuffs could still reach a similar effect on website  with developers' creative thoughts, which surprises me from time to time.

What comes to your mind if listening to the word \`blog'? I'm pretty sure most of you would end up with a website on your web browser. Actually \`blog' seems to be rather established and even out of time when social networking applications like twitter, instagram and  quora keeps an exponential growing users. What even worse could be the fact that the more one is sticky to a blog,  the more he or she seems to be  isolated from online communities and even social life, which depresses quite a lot of beginners, esprecially those who faced with a technical or motivation difficulty. To tease a \`pathetic  and  weird' geek comes with much more ease  than being one, which tend to require a sturbbon insisting on a certain stuff, most of which usually be the cyber tech.

The time when I started up my own website approximately one year ago determined my being one.   As for someone outdoor of  cyber-related majors,  there is no way to make it with ease.  Honest to say, one of the very  critical and pratical problem beyong WHY to make one  is HOW.  You would likely reach a backward when browsing a number of new concepts  like \`web  server', \`framework' , \`database', \'CMS' and so on. A puzzle then rises in your mind: \"I just wanna craft my blog, is there any necessary to figure them out?\"

I bet that's the reason why there would always be more users than developers. Why not using [Medium](https://medium.com/)?  Actually I signed up an account, then I quited. Every time I  tried to plot a chart or write a math expression I have to generate  one on local and upload the image, while at the same time you could easily find alternatives like [KaTeX](https://katex.org/), [Mermaid](https://mermaid-js.github.io/mermaid/#/) and [Graphviz](https://www.graphviz.org/). You  got them for your way, but you will never have a chance to get  Medium for that. 

Alright then, so what about [WordPress](https://wordpress.org/)? As the most widely used web framework, WordPress has made its best  with varied plugins and themes and web dashboard  for a convenient administation. One of the fastest way to build a WordPress website is  to  just  create a cloud virtual machine, create LAMP or LEMP stack on that host, install WordPress from website and finally customize your ideal  style of that site. (and a domain directed to that host, if you need) You could even manage the database with [phpMyAdmin](https://www.phpmyadmin.net/) on the web.  Is there any better solution to an ideal website?

One of the reason lies  Occam's razor. As I would never write a detailed tutorial about how to develop a website I mentioned above,  to make which you should refer to the documentation of each projects, I have found redundant work and cost while using WordPress  individually. By the way, there still exist full  manuals from A to Z to dev elop a WordPress website on the Internet.

Another reason shall be the freedom to modify and recompile the source code.  I don't feel like to use many interfaces to reach an ideal effect of expression, which is considered of equal and sometimes more significance to the content as for me. Again  it  could raise  the  question upon the necessary    to figure it out and take command from source code.  Freedom deserves to pay,  many ones  with little attention or against the view, though. 

For the  same reason still I keep using  Jekyll instead of [Hexo](https://hexo.io/) even the support of RubyGems getting worse and worse compared to [npm](https://www.npmjs.com/). ([yarn](https://yarnpkg.com/) is a great alternative,  except inside the Great Firewall) There are less steps of package and parse with Jekyll, which enable less operation to modify.

I remember that Jekyll has made its theme as packages since the version 4.0.0. You  have  to retrieve a full structure if you don't wanna use its gem-based theme. It's a pity for me.

Here I put down all my thoughts as the preview. Actually those views are likely to cause controversy and  tease. Most of my peers cares more about  technique itself and try  to prevent conflicts  and gaps between different groups of developers.  I have different ideas. The true thing that produces the conflicts and gaps is the varied demand of each one rather  than the way to achieve it.  I have no doubt about this opinion. 
## \`static' website and \`dynamic' website

Let's skip the  underlying work of a web server or network transportation and directly talk about the method to orgnize the content of a website. (Says, layers above the HTTP protocol) The content of a website would  eventually be sent  back to the requesting host as a stream of code, which usually accepted by your web browser as the client. The browser parse the stream, usually in HTML or PHP syntax, and then  generate the corresponding visual effect. 

The concept  of  \`static' website refers to the status of the content stored in the web server. With a  \`static' status  the web server just sends what stored under its root  directory and makes no change, unlike the \`dynamic' one which extracts the data  from  its database  and do instantiation. 
 
<div style="text-align: center">
<table>
    <tr>
    <td>
    <div class="mermaid">
        graph TD;
        id0(Jekyll code) --> id1
        id1(markdown parser) --> id2(liquid parser)
        id2  -->  id3[(HTML code)]
        subgraph Jekyll compiling
        id1
        id2
        end
        subgraph web server storage
        id3
        end
        id3 --packages--> id4(requesting host) 
    </div>
</td>
    <td>
    <div class="mermaid">
        graph TD
        id0(data) --> id1
        id1[(database)]
        id2[(website<br/>framework)]
        id1  --filling-->  id3(instance)
        id2 --wrapping--> id3
        subgraph web server storage
        id1 
        id2
        id3
        end
        id3 --packages--> id4(requesting host)
    </div>
    </td>
</tr>
<tr>
    <td style="text-align: center;"> How Jekyll static website works </td>
    <td style="text-align: center;"> How a dynamtic website works </td>
</tr>
</table>
</div>

It's obvious that a static website take much less computation and storage resource than a dynamic one, though it with many  problems that greatly restrict its functionality. The biggest problems I have  found so far might be the unstability of pages url. It's likely you cannot browse a certain page following the same url after times of deploying the identical Jekyll source code. The freedom and easy access of the  source code just  cause too many possibilities of the compiled site.   I would never recommend a Jekyll  site for any  funciton more than  displaying. What's more, don't deploy the site before  you have  tested it well on your local host.

## The essence of  Jekyll the website generator is  compiling

A more precise and  functional name of programs like  Jekyll and Hexo is **the website generator**.  Unlike WordPress or [Typecho](https://typecho.org/) which focus on a stable and easily accessed content management system, the website generator itself have nothing to do with management. The fact is you have to find additional plugins for a similar effect using a website generator.

If you have compared those two types carefully, you can be puzzled  from time to time 'cause they are such different things. Ever since the establishing of a running time for the dynamic website are the priviliges to read and write the files on web server  and data in databse required, continuous work to check and keep an active database are  needed as well. Yet a static one does a totally opposite job.  Once \`generated', the content won't require any more management at all.  It could be easily deployed on any active web server without any privilage to access anything on the host machine. 

You can hardly understand why those two types perform so differently without  truly understanding  how they work.  To use website generator and deploy the output  is exactly the way  how a developer tests, compiles the source code and publish the release.  Actually, those website generator projects based on varied programming languages and  their corresponding package managers  are  created and mostly used amid the online community of developers. 

I bet a user who raise the question about the necessarity to figure out  how it  works  would hardly care and test  the environment on a host no matter for compiling a static website or running a dynamic one. That mayhap be the  reason why those established framework like WordPress and Typecho develop a highly separated CMS from the web server and host machine. If any problems while executing the website generator, mostly  version control or dependency errors, it would return no solution but a piece of  log info. The time when a full structure of the Jekyll source code is exposed to you for any editing,  you are exposed to RubyGems  as well. When using WordPress or Typecho, you are more like a user; yet with  Jekyll or Hexo, you have to think like a   developer, at  least   a most primary one. 
## Which better uploaded to the host, the source code or the compiled site?

The server or actually virtual host provided by  deployment service  would detect  the files you upload and then decide whether to offer them a compiling. If there exist a `Gemfile` (for bundle the gem package manager, based on Ruby) or `package.json` (for npm or yarn the node package manager, based on javascript), for instance, the remote machine would execute corresponding environment  to compile the source code  you upload.  Beside of the most known [GitHub Pages](https://pages.github.com/),  I have also been using Netlify  for  its  CMS service without  git pull and push operations on my local host computer. 

However, there will never be an identical  running  time on another host for compiling.  It has been puzzling me for a long period of  time that why most of documentation for the deployment service encourage users to upload their source code and use the automatical compiling service offered on the remote machine. There could be no robuster  running time  on a  remote host with a web server for purely HTML, CSS and Javascript from certificated CDN. With each more additional step of parsing , the possibility of unwanted bias and errors grows one more .  Not to say some  of the service prevent its virtual hosts from establishing some  certain running time. (Yes, I mean GitHub Pages. It allows only 7 RubyGems packages on its virtual host. The very first Jekyll  is   created  by GitHub and tested  on their deployment service)
 
I  would consider the network compiling  a tradeoff  considering  the access  of  **additional  services**. Well, it's just a wrong answer for me to say a remote network compiling is more convenienet than on local host. It's NOT conveneint at all! You would never have any idea what's going on without logging  to the host to check and test.  Yet the situation changes when comes with additional service. To search or leave a comment are two of the most fundamental functions a website  shall be equipped with. As a static website has no priivilage to read and write anyhing on the host and its content won't change once compiled, all those service cannot be  done on the host where the web server installed.  You thus have to register  on third-party platform for service and  let them proxy the jobs where your statiic website is  not able.

Here comes the value of executing the web generator on a remote host rather than on the local host: you do not have to deal with additional  jobs required by those third-party service. [Algolia](https://www.algolia.com/), for instance, would require an index sent to its server each  time a new website generated. With the index could Algolia  provide the result each time a visitor request a search on your website. So it is to other service like those which requires a GitHub applications.

Yet I said it a tradeoff to do the compiling on a remote host. There are bunches of plugins available in RubyGems source with documentation and manual on  its publishing  website, which provide you interfaces for auto handling those third-party service. It has been proven that the only one website I  uploaded the source code to the virtual  host  for remote  compiling is the one on Netlify with minima the gem-based theme (the default style when creating a Jekyll site from command, do well in any host supporting Jekyll) and no other plugins requiring any additional RubyGems pkgs. The only reason why I keep it lies the best convenience with pure word content editing on the web CMS provided by Netlify. I have never paid any more care to the source code in my GitHub repository  since the very first uploading. I don't even keep the repo on my local host computer.

## More underlying, more possibilities

The way to express could never be less important than the content, that's the reason why I insist  taking command  from a full  structure of   source code to the output. With the simplist steps of  abstract and parse, I have not found  another  website generator which makes better customization than Jekyll.   

As long as you could make it to generate a site, it actually  doesn't matter how you rewrite the principles to constfuct. [Liquid the template language](https://shopify.github.io/liquid/) is used to cut and rebuild the  regular HTML file. It allows you to declare global or local variables, loops and logical expressions, which provide could provide ample possibilities to construct the structure of a HTML site. The markdown parsers used by RubyGems support customized way to parse as well.  Besides, you could directly edit the components to be constructed with. You could refer to the multiple test post on this site to see how they work.

Jekyll still keeps its  live at present with a bad package manager and weak language support,  yet more of the features to prevent direct modification of the established theme and other structural components. In another word, it chooses the more friendly \`content only'  mode for  a  greater range of users, 

## Why am I developing a Jekyll site?

It's weird that I put the topic WHY at last.  A website is usually an option or even required as a part of your personal record, especially when you try to apply for an offer provided by an Internet enterprise or to enrich your profile on an online community. A website by Jekyll or other website generators is just approperate for displaying and do not require long term support except for the content once compiled. It is also helpful to encourage sharing and further activities in developers' community,  All thes benefits should have been the motivation of your reading this article.

But what if you could simply not finish the previous paragraphs due to the lack of basic knowledges. which could be googled on clicks and types, or just  too bored to deal with one and another technical issues while trying it yourself? I believe if you think so,  you could hardly keep a long run of it as well.

When I got to learn about Jekyll, I had little knowlege of  computer network,  website or  multiple languages for coding.  I didn't either have much experince with varied programs on the Internet, which were based  on diverse programming languages. I had to learn to  read the documentation  carefully and search for solutions when  errors encountered. The process to figure each out  of many tasks and obstacles, the process to develop a habit to overcome them of even more. 

My best wishes if you insist till the very end here and make up your mind to have an attempt yourself. It doesn't matter which plan you choose to develop one as each with its special features for  the corresponding demands.  Even with Jekyll, one of the most established and  weak-supported website generators, you are still well prepared to achieve your ideal website.
