$(document).ready(function() {
  var win = 0;
  var lose = 0;

  var counter;
  var targetNumber;

  var imageCrystalOne = generateImageCrystalWithImage("https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg");
  var imageCrystalTwo = generateImageCrystalWithImage("https://s-media-cache-ak0.pinimg.com/736x/c7/22/f2/c722f2834e3e181ac5fe3a0442c25d48.jpg");
  var imageCrystalThree = generateImageCrystalWithImage("https://s-media-cache-ak0.pinimg.com/736x/a9/86/80/a98680471bfec9c816ab9159c48d9c3a.jpg");
  var imageCrystalFour = generateImageCrystalWithImage("https://lh3.googleusercontent.com/rn5iBh-ARszvIsb-QqkDJANrEPcVeGT7lYHIePP5ay1MwoueiK77goSO93S1pnr0ZA=h900");

  function generateImageCrystalWithImage (imageSrc) {
    var imageCrystal = $('<img>');
    imageCrystal.addClass('crystal-image');
    imageCrystal.attr("src", imageSrc);
    imageCrystal.attr("data-crystalvalue", generateRandomNumber(1, 12));
    $("#crystals").append(imageCrystal);

    // this line is crucial since it returns a reference to the crystal image that's created
    return imageCrystal
  };


  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#counter").text(counter)

    if (counter === targetNumber) {
      win++
      alert("You win!");
      resetGameplayValues();
    }
    else if (counter >= targetNumber) {
      lose++
      alert("You lose!!");
      resetGameplayValues();
    }
  });


  // since you'll need to run this logic at the end of every round, it's best to encapsulate it in a function
  function resetGameplayValues () {
    // so this works --> $("#counter").text(counter = 0);
    // but the general convention is not to assign a value to a variable and
    // then have the implicit return value from that assignment set another value
    // This is because a good number of people won't understand how both assignments are
    // actually heppening, and where there's confusion or lack of understanding
    // there will often be bugs
    // Instead it's more common to do the folowing:
    counter = 0
    $("#counter").text(counter)

    targetNumber = generateRandomNumber(19, 120);
    $("#number-to-guess").text(targetNumber);

    imageCrystalOne.attr("data-crystalvalue", generateRandomNumber(1, 12) );
    imageCrystalTwo.attr("data-crystalvalue", generateRandomNumber(1, 12) );
    imageCrystalThree.attr("data-crystalvalue", generateRandomNumber(1, 12) );
    imageCrystalFour.attr("data-crystalvalue", generateRandomNumber(1, 12) );

    $("#lose").text(lose);
    $("#win").text(win);
  };

  function generateRandomNumber (min, max) {
    max -= min;
    return Math.floor(Math.random() * max) + min
  };


  resetGameplayValues()

});
