# create_table "gifts", force: :cascade do |t|
#   t.string "title", null: false
#   t.string "description", null: false
#   t.integer "guest_id", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["guest_id"], name: "index_gifts_on_guest_id"

json.extract! @gift, :title, :description
