# create_table "guests", force: :cascade do |t|
#   t.string "name", null: false
#   t.integer "age", null: false
#   t.string "favorite_color", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

json.partial! "api/guests/guest", guests: @guests
