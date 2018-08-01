
//katzDeliLine = katzDeli implicitly / newName = new person who takes a number implicitly
function takeANumber(katzDeliLine, newName){
//The function takeANumber passes two arguments which represent the number of people in line and a new person that gets in line once they take a number
  katzDeliLine.push(newName)
//Once a person takes a new number, his/her name is pushed into the array and a message prints out telling that person his/her number in line.
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
//The way they are given they're place in line is that at whatever index they join the line at, the index is now that long and thus they are given the new length of the index
}


//nowServing Function
function nowServing(deliLine){
//The function nowServing passes the argument deliLine which represents the people in line
  if (deliLine.length == 0){
//if the length of the line is 0, aka no one is waiting in line then the below message prints out
    return "There is nobody waiting to be served!";

  }
//However, if there is someone in line then their name is called and removed from the line (array) so that the next person is up to be served
  else {

    var first = deliLine.shift();
    return `Currently serving ${first}.`

  }

}


//Current Line function
function currentLine(line){
//For the function currentLine, which passes the number of people in line, if no one is in line then the below message prints
  if (line.length == 0) {

  return "The line is currently empty.";

} else {
//If this is false though and someone(s) is in line, then for each person in line, the function lineReturn adds their place and name in line to the line (a string). If the line starts at place 1 (the first place in line) and is less than the total length of the line then a comma is added to the array of names but not to the last name in the line. 
  var lineString = ''

  function lineReturn(element, index){
    lineString += `${index + 1}. ${element}`;
    if (index + 1 < line.length ){
       lineString += ', ';

    }
  }

  line.forEach(lineReturn)

  return 'The line is currently: ' + lineString ;
}

}
