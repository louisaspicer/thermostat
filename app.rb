require 'sinatra/base'
require './models/thermostat_data.rb'
require 'json'

class ThermostatData < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/thermostat/data' do
    @thermostat = ThermostatData.get(1)
    content_type :json
    {temperature: @thermostat.temperature, city: @thermostat.city,
     city_temperature: @thermostat.city_temperature}.to_json
  end

  run! if app_file == $0
end
