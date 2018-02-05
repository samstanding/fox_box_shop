var storeData = [];
var cartItems = [];

$(document).ready(function () {
  //create event listener for my inventory button click
  $('#invetoryIn').on('click', function () {
    //new object for each new item
    var newObject = {
      size: $('#boxSize').val(),
      type: $('#boxType').val(),
      description: $('#boxDescription').val()
    };
    //push new data into my array
    storeData.push(newObject);
    //empty inputs
    $('#boxSize').val('');
    $('#boxType').val('');
    $('#boxDescription').val('');

    displayInventory();
  }); //end inventory button listener
//create event listener for search item
  $('#searchIn').on('click', function () {
    //create an empty array to store matches
    var matchesArr = [];
    //loop through inventory array and push matched info into matches array
      for (var i =0; i<storeData.length; i++) {
        if (storeData[i].size == $('#boxSizeSearch').val() &&
         storeData[i].type == $('#boxTypeSearch').val()) {
           matchesArr.push(storeData[i]);
         }
       } //call the display matches array
       displayMatches(matchesArr);
    }); //end search listener
  //create an event listener for adding an item to cart
  $('.matchesList').on('click', '.cartIn', function() {
    var takeItem = $(this).data('id');
    //create a variable that holds the clicked on cart item
    cartItems.push(storeData.splice(takeItem, 1));
    console.log(cartItems);
    //rerun the matches function to display what's left in inventory
    displayMatches (storeData);
  }); //end event listener for adding something to cart



});//end onready function

//create function to display inventory items
function displayInventory() {
  //create a variable to target div by id
  var output = $('.inventoryList');
  //make sure output is fresh
  output.empty();
  //make a loop through stored storeData
  for (var i = 0; i <storeData.length; i++) {
    //add output string to list
    outputString = '<li>';
    outputString += storeData[i].size + ' ';
    outputString += storeData[i].type + ' ';
    outputString += storeData[i].description;
    outputString += '</li>';
    //append outputstring to outputs
    output.append(outputString);
  }
}

function displayMatches (arr) {
  //create a variable to target by ID
  var output = $('.matchesList');
  output.empty();
  //create conditional to test whether or not there's a match
  for (var i =0; i<arr.length; i++) {
  if (arr.length === 0) {
    var noMatches= '<li> no matches found </li>';
    output.append(noMatches);
  } else {
  var outputMatches = '<li>' + arr[i].size + ' ';
  outputMatches += arr[i].type + ' ';
  outputMatches += arr[i].description;
  outputMatches += '<button class="cartIn" data-id="' + i + '">Add to Cart </button></li>';
  output.append(outputMatches);
}
}
}
