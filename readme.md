<!-- markdownlint-disable-next-line -->
<div align="center">
  <h1 align="center">tech-andgar.me site in Hugo</h1>
  <h3 align="center">My :notebook_with_decorative_cover: Personal website, utilized as landing page, overview, <br>as well as general link distribution</h3>

  [![Deploy](https://github.com/tech-andgar/home-page/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/tech-andgar/home-page/actions/workflows/pages/pages-build-deployment)
  ![website](https://img.shields.io/badge/website-available-green)
  ![Uptime](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fandgar2010%2Fupptime%2Fmaster%2Fapi%2Ftech-andgar%2Fuptime.json)
  [![PGP Key](https://badgen.net/keybase/pgp/tech_andgar)](https://keybase.io/tech_andgar)
  [![License](https://badgen.net/badge/license/CC-BY-4.0/green)](https://creativecommons.org/licenses/by/4.0/)

</div>

This is the repo for [my personal website `tech-andgar.me`](https://tech-andgar.me).

It content generated via utilizing [Hugo](https://gohugo.io) with the [`hugo-coder`](https://github.com/luizdepra/hugo-coder) theme, and GitHub actions to deploy static content to Github Pages when I push to it.

There's nothing super special here, other than a few changes here and there, but it's worth showing off the CI/CD pipeline.

Theme
I'm using [`Hugo-Coder`](https://github.com/luizdepra/hugo-coder) but not as a submodule. The hugo site is set up as a module and the theme is a dependency. When cloning this repo you'll need to run hugo mod get to fetch the dependencies or hugo mod get -u to update everything.

The site configuration files are in the hugo-config directory and the CI/CD deployment scripts are in the .github/workflows.

Typo style corrections welcome via PRs.

## Setup - Development

```shell
# Install Go 1.17+
# Install dependencies with `go install`

# Clone the repository including submodules
> git clone --recurse-submodules git@github.com:andgar2010/home-page.git

# Change into the source directory:
> cd home-page

# Clean folder build directory
> rm -rf public
# If need publish to GitHub Pages, need to create a breach repository
> git worktree add -B gh-pages public origin/gh-pages

# Install package dependencies from the repository, using pnpm
> pnpm i

> hugo mod get -u # If use debugging tools
> hugo mod clean # Clean cache Project

# Create local preview server with `hugo serve`
> hugo serve
# hugo server -D --navigateToChanged
```

## Disclaimer

The information in this weblog is provided "AS IS" with no warranties, and confers no rights.

This weblog does not represent the thoughts, intentions, plans or strategies of my employer. It is solely my opinion.

Feel free to challenge me, disagree with me, or tell me I'm completely nuts in the comments section of each blog entry, but I reserve the right to delete any comment for any reason whatsoever (abusive, profane, rude, or anonymous comments) - so keep it polite, please.

## Copyright and License

Copyright (C) 2024 by Andres Garcia

Site content is licensed under the *Creative Commons Attribution 4.0 International* license (CC-BY-4.0).

## Credits

- Uses [`luizdepra/hugo-coder`](https://github.com/luizdepra/hugo-coder)
- Hosted via GitHub Pages with Github Actions

<!--
source: https://lapras.com/public/tech-andgar.json [TODO: NEED CREATE ADAPATER WIP]
-->
