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