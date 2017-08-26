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
<<<<<<< HEAD
var Song = function () {
  // timeSig;//varies with complexity 1-3
  // key;//accepts major, minor, or atonal
  // //this.rhythm;
  // progression;
  // melody;
}

Song.prototype.rando = function (range1, range2) {
  return Math.floor(Math.random() * Math.abs(range2-range1)) + range1;
}

Song.prototype.timeSigGen = function (timeSig) {
  var output;
  switch (timeSig) {
    case 1:
      //simple
      output = this.rando(0, 2);
      break;
    case 2:
      //less simple
      output = this.rando(2, 4);
      break;

    case 3:
      //complex
      output = this.rando(4, 6);
      break;

      default: console.log('You did not enter a valid value!');
  }
  switch (output) {
    case 0:
    this.timeSig= '4/4';
    break;

    case 1:
    this.timeSig= '3/4';
    break;

    case 2:
    this.timeSig= '6/8';
    break;

    case 3:
    this.timeSig= '6/4';
    break;

    case 4:
    this.timeSig= '7/8';
    break;

    case 5:
    this.timeSig= '5/4';
    break;

=======
var Song = function (timeSig, key, rhythm, progression) {

}

Song.prototype.timeSig = function (timeSig) {
  switch (timeSig) {
    case 1:
      //simple
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]
>>>>>>> 8add6960f59e74f0c7db882daa712c1eae76b5e8

  }
}

Song.prototype.key = function(key) {
  switch (key) {
<<<<<<< HEAD
    case 'major':
      //major
      return 'major';
      break;
    case 2:
      //minor
      return 'minor';
       break;

    case 3:
      //complex
      return 'atonal'
      break;
  }
}
/*
=======
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

>>>>>>> 8add6960f59e74f0c7db882daa712c1eae76b5e8
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
<<<<<<< HEAD
*/
=======
>>>>>>> 8add6960f59e74f0c7db882daa712c1eae76b5e8

Song.prototype.progression = function(progression) {
  switch (progression) {
    case 1:
      //simple
<<<<<<< HEAD
      break;
    case 2:
      //less simple
       break;

    case 3:
      //complex
      break;
=======
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]
>>>>>>> 8add6960f59e74f0c7db882daa712c1eae76b5e8

  }

}

Song.prototype.melody = function(melody) {
  switch (melody) {
    case 1:
      //simple
<<<<<<< HEAD
      break;
    case 2:
      //less simple
       break;

    case 3:
      //complex
      break;
=======
      [break;]
    case 2:
      //less simple
       break;]

    case 3:
      //complex
      [break;]
>>>>>>> 8add6960f59e74f0c7db882daa712c1eae76b5e8

  }
}