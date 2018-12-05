# create_table "pokemons", force: :cascade do |t|
#   t.string "name", null: false
#   t.integer "attack", null: false
#   t.integer "defense", null: false
#   t.string "poke_type", null: false
#   t.string "moves", default: [], null: false, array: true
#   t.string "image_url", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false

@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
  end
end
