# create_table "pokemons", force: :cascade do |t|
#   t.string "name", null: false
#   t.integer "attack", null: false
#   t.integer "defense", null: false
#   t.string "poke_type", null: false
#   t.string "moves", default: [], null: false, array: true
#   t.string "image_url", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false

# json.pokemon @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url, :item_ids
# json.items @pokemon.items.each do |item|
#   json.set! item.id do
#     json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
#   end
# end


json.pokemon @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url, :item_ids
json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
