# GREETINGS UNKINDLED ONE!
![bonfire](https://www.pockettactics.com/wp-content/sites/pockettactics/2021/12/dark-souls-bonfire-550x309.jpg)

*It appears fate has led you through the kingdom of Lothric, to me. 
Fortune appears to follow you, oh Unkindled One. 
For I have for sale the souls which you seek.*


Please use one of the following commands: 
- `node index.js add` (adds a new soul)
```
node index.js add

Added new soul: {
  soul: 'Soul of Yhorm the Giant',
  priceInSouls: '744326',
  soulsGainedIfConsumed: '15991',
  id: 'Dd',
  inStock: '4'
}
```

- `node index.js list` (shows a list of all the souls)
```
node index.js list

All souls: [
  {
    soul: 'Soul of Yhorm the Giant',
    priceInSouls: '744326',
    soulsGainedIfConsumed: '15991',
    id: 'Dd',
    inStock: '4'
  },
  {
    soul: 'Soul of Aldrich',
    priceInSouls: '262101',
    soulsGainedIfConsumed: '14817',
    id: 'TW',
    inStock: '7'
  },
  {
    soul: 'Soul of the Dancer',
    priceInSouls: '625662',
    soulsGainedIfConsumed: '9459',
    id: 'wI',
    inStock: '2'
  }
]
```
- `node index.js details "id"` (shows details of one soul with matching "id")
```
node index.js details Dd

Soul details: {
  soul: 'Soul of Yhorm the Giant',
  priceInSouls: '744326',
  soulsGainedIfConsumed: '15991',
  id: 'Dd',
  inStock: '4'
}
```
- `node index.js delete "id"` (deletes a soul from the list with matching "id")
```
node index.js delete Hj

Soul deleted.
```
- `node index.js update "id" "new-soul" "new-priceInSouls" "new-soulsGainedIfConsumed" "new-id" "new-inStock-value"` (updates the info of a soul with matching "id", using the keys as parameters)
```
node index.js update "qI" "Soul of Drew" "999999" "999999" "qI" "99"

Soul updated: {
  soul: 'Soul of Drew',
  priceInSouls: '999999',
  soulsGainedIfConsumed: '999999',
  id: 'qI',
  inStock: '99'
}
```
- `node index.js addToCart "id" "quantity"` (adds "quantity" soul(s), with matching "id" to cart for purchase)
```
node index.js addToCart Dd 8  

Soul added to cart.
```
- `node index.js viewCart` (to view souls to be purchased)
```
node index.js viewCart   

Cart: [
  {
    id: 'Dd',
    soul: 'Soul of Yhorm the Giant',
    priceInSouls: '744326',
    quantity: 8
  }
]
Total Price: 5954608
```
- `node index.js cancelCart` (to empty cart and cancel purchase)
```
node index.js cancelCart

Cart emptied.
```