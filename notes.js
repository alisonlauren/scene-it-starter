//adding something to local storage
localStorage.setItem('key', 'value');
//retrieve item from local storage
console.log(localStorage.getItem('key'))
//removing something from local storage
localStorage.removeItem('key')
//clear items, just from your site
localStorage.clear('key')
//local storage can only store strings
//most convert to string to use
const person = {
    name: "luke",
    father: "anakin"
}
const personString = JSON.stringify(person)
localStorage.setITem("player", personString)
//take string, convert back to object
const playerString = localStorage.getItem('player');
//JSON is a string, takes object turns it into JSON string
const player = JSON.parse(playerString);
console.log(player.name)
console.log(player.father)
//also can convert array
const foods = [
    "pancakes",
    "waffles"
]
const foodString = JSON.stringify(foods);
localStorage.setItem('foods', foodString)


const spices = ["Basil", "Basil leaves", "Black Pepper", "Cardamom", "Chili Powder", "Cilantro", "Cinnamon", "Cloves", "Coriander Seeds", "Cumin", "Dill", "Dried Oregano", "Fajita Seasoning", "Fresh Thyme", "Garlic", "Ginger", "Italian Seasoning", "Lemon Zest", "Minced Garlic", "Mint", "Nutmeg", "Onion Salt", "Oregano", "Paprika", "Red Chilli Powder", "Salt", "Sea Salt", "Sage", "Tumeric", "Rosemary", ],
const sugars = ["Caster Sugar", "Brown Sugar", "Chocolate Chips", "Coco Sugar", "Cocoa", "Dark Brown Sugar", "Granulated Sugar", "Greek Yogurt", "Plain Chocolate", "Sugar", "White Chocolate Chips", "Icing Sugar", "Carmel", "Milk Chocolate", "Dark Chocolate", "Powdered Sugar",   ],
const fats = ["Butter", "Chicken Stock", "Coconut Cream", "Cocunut Milk", "Cheddar Cheese", "Cheese", "Colby Jack Cheese", "Condensed Milk", "Cream", "Double Cream", "Egg White", "Egg Yolks", "Egg", "Feta", "Full Fat Yogurt", "Gouda Cheese", "Heavy Cream", "Milk", "Oils", "Olive Oil", "Paresan Cheese", "Peanut Butter", "Shredded Mexican Cheese", "Sour Cream", "Sunflower Oil", "Vegetable Oil", "Whole Milk", "Yogurt", "Cream Cheese", "Mozzerela", "Egg", "Brie", "Canola Oil", "Almond Milk", ],
const powder = ["Baking Powder", "Bicarbonate Of Soda", "Corn Starch",  ],
const liquids = ["Apple Cider Vinegar", "Dark Soy Sauce", "Dry White Wine", "Enchilada Sauce", "English Mustard", "Extra Virgin Olive Oil", "Garlic Sauce", "Golden Syrup", "Honey", "Hotsauce", "Lemon Juice", "Mustard", "Raspberry Jam", "Red Wine", "Soy Sauce", "Tomato Ketchup", "Vanilla", "Vanilla Extract", "Vinegar", "White Vinegar", "White Wine","Barbeque Sauce", "Red Wine Vinegar", "Tomato Sauce", "Maple Syrup", "Tabasco Sauce", "White Wine Vinegar", "Mayonnaise", ]
