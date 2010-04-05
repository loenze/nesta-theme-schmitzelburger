# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.

# This code tells Sinatra to look for assets in the theme's public folder,
# instead of Nesta's default.
#
module Nesta
  class App
    set :public, File.join(File.dirname(__FILE__), "public")
  end
end
