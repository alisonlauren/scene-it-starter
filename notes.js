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