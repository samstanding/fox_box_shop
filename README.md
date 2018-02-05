# fox_box_shop

Building a box store
allow user to add boxes into inventory
allow users to search inveotry based on criteria, then put that into a 'shopping  cart'
toggle between user types

components:
-inventory control (add invntory)
-inventory search
-cart
-toggle user type

inventory control-
- first want to stub out interface-- put something on the DOM, make sure it fits what i'm trying to do
-add basic scripting for inputs and outputs
-processing

1)
Break out the dom to reflect the components I want to have:
inventory,
search,
cart

2)focus on the inventory
-insert select and option elements
    i want box size:
    -box
    -box material
    -box description
give each drop down a separate id

3) inputing and output scripting
- create global array to store inputted info
- create an object for each new inventory item
-push that to global array

then create a function that displays that information
like the one for employees its going to loop through your array and output a string based on the info it was given

4)
create a search
- stub out interface-- what would a good search look like
- insert drop downs for search- based on size and type-- if a match is found then produce a list of the matching items
 use the button id for the search button to trigger event in the js
- capture a click
-loop through inveotry array to find a match
- if there is a match based on size and type: push to your matches array

then create a display matches function
-- create outputs that display that matches on the DOM

adding an item to cart
- create a button with the id that is tracable
build a function that stores cart info-- and removes it from the dom
- would pretty much be exactly the same funciton you made to take employees off before
-- it would also take the item off of the inventory list--
- i would need to create a new interface that displays the cart--




--add more about what will happen
