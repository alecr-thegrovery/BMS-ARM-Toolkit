---

layout: 'src/layouts/PostLayout.astro'

title: Master Post
date: 2022-11-22
lastUpdated: 2022-22-11

image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80

category: general-program-materials
tags:
- enrollment
- form
- download

description: This file should be used as the starter file for each post. 

---

# Master Post

---

This file should be used as the starter file for each post.  Update it with everything you'll need for this project, and use it to keep your posts standardized.  It contains examples of elements such as: headings, links, lists, text treatments, etc.

This project uses **Markdown** files for the posts.  Markdown is plain text (with some extra bells and whistles) that gets automatically converted into HTML by the project, which then gets styling applied via CSS just like the rest of the project.  This lets you ignore all the extra code surrounding the posts and just write simple text.  Here's some guides: 
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- [Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [Astro Markdown docs](https://docs.astro.build/en/guides/markdown-content/)

## Frontmatter
*Frontmatter* is the stuff at the top of this file.  You can't see it when viewing this as a web page, but the info in the frontmatter section is used to fill out content variables like the title, category, tags, etc. Post files can have different or additional frontmatter variables without causing issues with each other.  Simply add or remove what you need to.

You can also make multiple *layout* elements to use with posts, and use frontmatter to control things like adding videos, forms, downloads, etc.  The layout files are found in 'src/layouts/', and can be cloned and edited however you need.

## Headings Should Be In Order
There should only be one h1 element, and it should appear before any other heading.  All following headings should proceed in numerical order.

### You Can Also Nest Headings

Headings are used by search engines, text-to-speach readers, and your browser to create an outline of the page content, and is important for 


### Style Your Content
This is how you write a [link](https://github.com/areimel).

Here's a list:

- Use dashes to write a list
- Just like you would when typing out a list by hand
- The project will style the list icons for you

Here's a line: 

---


#### You Can Use HTML, Too

<p>
	Here's an HTML p element.  You can use most normal things you can in HTML, but it does disable any Markdown features inside the HTML code.  For example, this would normally be in italics: *test*.
</p>