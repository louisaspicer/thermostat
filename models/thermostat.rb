require 'data_mapper'
require 'dm-postgres-adapter'

class ThermostatData

  include DataMapper::Resource

  property :id, Serial
  property :temperature, Float
  property :city, String
  property :city_temperature, Float
  property :weather_description, String

  DataMapper.setup(:default, 'postgres://localhost/thermostat_data_test')
  DataMapper.finalize
  DataMapper.auto_migrate!

end
