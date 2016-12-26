require 'data_mapper'
require 'dm-postgres-adapter'
require 'datamapper_setup.rb'

class ThermostatData

  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
  property :city, String
  property :city_temperature, Integer

end
