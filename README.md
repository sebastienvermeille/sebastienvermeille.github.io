## Initial setup
`yay -S ruby`
`export PATH=$HOME/.local/share/gem/ruby/3.0.0/bin:$PATH`
`bundle config set --local path vendor/bundle`
`bundle exec jekyll new --force --skip-bundle .`
`bundle install`

> The whole doc is available here: [https://jekyllrb.com/tutorials/using-jekyll-with-bundler/](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)

## Serve content locally
`gem update`
`bundle exec jekyll serve`

## Blogging help

### Create a new article
Create a new markdown file in `_posts`.

Filename has to be: `<publishedDate Y-m-d>`-`<article title>`.md

### Quotes, Warnings, Infos
```
> [type] "Title" [ attributes... ]
```

[https://lazee.github.io/premonition-demo/](https://lazee.github.io/premonition-demo/)

#### Quote:
```
> citation "Stan Kelly-Bootle" [ cite = "skb" ]
> Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration
```