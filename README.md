[![software niagara](https://github.com/softwareniagara/marketing/blob/master/logos/software-niagara/software-niagara.png)](http://www.softwareniagara.com)

# softwareniagara.com

[![license](https://img.shields.io/badge/license-ISC-blue.svg?style=flat)](LICENSE.md)
[![license](https://img.shields.io/badge/license-CC-blue.svg?style=flat)](http://creativecommons.org/licenses/by/4.0/)
[![code of conduct](https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-ff69b4.svg)](CODE_OF_CONDUCT.md)

This is the repository for the Software Niagara marketing website. It includes
information on Software Niagara, which is a grassroots initiative to connect
the software community in the Niagara Region. Over time, we hope to include
software-related news and articles.

## Getting Started

The Software Niagara marketing website is built with Middleman - a static site
generator written in Ruby. Using Middleman allows us to store all of the
source code and content for the website in GitHub. It also allows us to
accept contributions from the community via pull requests.

You will need the following installed on your system to run this website:

* NodeJS >= 4.0
* NPM
* Ruby 2.3
* Bundler

Run these commands from the project directory to install dependencies, run
the development server, and visit the website in your default browser.

```
npm install
bundle install --path vendor/bundle
bundle exec middleman server
open http://localhost:4567
```

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for instructions on
contributing to this project.

We maintain a list of [contributors](CONTRIBUTORS.md) for this project. Add
yourself to the list if you have contributed.

## License

The source code in this repository is licensed under the
[ISC license](LICENSE.md).

The content in this repository is licensed under a [Creative Commons Attribution
4.0 International License](http://creativecommons.org/licenses/by/4.0/).
