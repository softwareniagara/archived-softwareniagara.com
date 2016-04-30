# Serve pages with no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

#  External pipeline configuration
activate :external_pipeline,
         name: :webpack,
         command: build? ?
           "BUILD_PRODUCTION=1 ./node_modules/webpack/bin/webpack.js --bail -p" :
           "BUILD_DEVELOPMENT=1 ./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
         source: ".tmp/dist",
         latency: 1

# Development-specific configuration
configure :development do
  # Use live reload
  activate :livereload
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end
