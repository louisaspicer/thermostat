require 'sinatra/base'

class thermostatApp < Sinatra::Base
  get '/' do
    'Hello thermostatApp!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
