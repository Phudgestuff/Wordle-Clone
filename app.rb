require 'sinatra'

get '/' do
    @word = "tests"

    erb :index
end