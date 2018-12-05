# json.extract! @guest, :name, :age, :favorite_color

json.partial! "api/guests/guest", guests: @guest
json.gifts do
  json.array! @guest.gifts, :title, :description
end
# json.extract! @guest.gifts, :title, :description
