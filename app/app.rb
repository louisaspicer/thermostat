require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/temperature' do
    content_type :json
    {:key1 => 'value1', :key2 => 'value2'}.to_json
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
