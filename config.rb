# Serve pages with no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Template helpers
helpers do
  def page_title(title)
    (title) ? "#{title} | #{site_name}" : site_name
  end

  def page_description(description)
    description || "A grassroots initiative to connect the Software Community in Niagara"
  end

  def page_image(image)
    image || "/images/cards/open-graph_1200x630.png"
  end

  def page_url(url)
    "#{site_url}#{url}"
  end

  def site_name
    "Software Niagara"
  end

  def site_url
    "http://www.softwareniagara.com"
  end

  def site_handle
    "@softwareniagara"
  end
end

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
