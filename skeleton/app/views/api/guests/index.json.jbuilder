# create_table "guests", force: :cascade do |t|
#   t.string "name", null: false
#   t.integer "age", null: false
#   t.string "favorite_color", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

json.array! @guests do |guest|
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
