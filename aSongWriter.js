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
  /*
  // timeSig//varies with complexity 1-3
  // key//accepts major, minor, or atonal
  // //this.rhythm;
  // progression//accepts starting note (1 recommended) and
    //length of progression(alternatively call rando (2,10))
  // melody;
  */
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
  }
};

Song.prototype.keyGen = function(key) {
  switch (key) {
    case 'major':
      //major
      this.key = 'major';
      break;
    case 2:
      //minor
      this.key = 'minor';
       break;

    case 3:
      //atonal
      this.key = 'atonal'
      break;
  }
}


/*Song.prototype.rhythm = function(rhythm) {
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
*/


Song.prototype.progressionGen = function(chord, length) {
  this.progression = [chord];
  //recurses through length

  length--;
  //chooses random next chord based on algorithm

  var nextChord = function(chord) {
    switch (chord) {
    case 1:
      //simple
      break;
    case 2:
      //less simple
       break;

    case 3:
      //complex
      break;
  }
  }
};

Song.prototype.melody = function(melody) {
  switch (melody) {
    case 1:
      //simple
      break;
    case 2:
      //less simple
       break;
    case 3:
      //complex
      break;
    }
};