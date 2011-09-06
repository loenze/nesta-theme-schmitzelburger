# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.

module Nesta
  class App
    use Rack::Static, :urls => ["/schmitzelburger"],
      :root => "themes/schmitzelburger/public"

    helpers do
      def body_class
        (request.path == "/") ? "#{@body_class} home" : @body_class
      end
    end
  end
end
