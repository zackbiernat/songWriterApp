//Song writer function
/*Conventionality of (1-3)
  time signature(s),
  key (key changes),
  rhythm,
  progression (chord inversions),
  and melody
  as inputs to the function
  */

//Song constructor
var Song = function () {
  this.timeSig;
  this.key;
  this.rhythm;
  this.progression;
  this.melody;
}

Song.prototype.rando = function (range1, range2) {
  return Math.floor(Math.random() * Math.abs(range2-range1)) + range1;
}

Song.prototype.timeSig = function (timeSig) {
  var output;
  switch (timeSig) {
    case 1:
      //simple
      output = rando(0, 2);
      break;
    case 2:
      //less simple
      output = rando(2, 4);
      break;

    case 3:
      //complex
      output = rando(4, 6);
      break;
  }
  console.log(output);
  switch (output) {
    case 0:
    return '4/4';
    case 1:
    return '3/4';
    case 2:
    return '6/8';
    case 3:
    return '6/4';
    case 4:
    return '7/8';
    case 5:
    return '5/4';
  }
}

Song.prototype.key = function(key) {
  switch (key) {
    case 1:
      //simple
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]
  }
}

Song.prototype.rhythm = function(rhythm) {
  switch (rhythm) {
    case 1:
      //simple
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]

  }
}

Song.prototype.progression = function(progression) {
  switch (progression) {
    case 1:
      //simple
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]

  }

}

Song.prototype.melody = function(melody) {
  switch (melody) {
    case 1:
      //simple
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]

  }
}