var storeData = [];

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
  });



});

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
