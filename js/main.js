var i = 0,
    a = 0,
    isBackspacing = false

var textArray = [
  "Hi there, I'm Yunzhe Wang.", 
  "You can call me WJ.", 
  "I am a USC student.",
  "a Programmer.",
  "a Neuroscientist.",
  "a Quick Learner.",
  "a Funny Guy.",
  "I dreamed to be an AI researcher.",
  "earn a lot of money.",
  "and travel around the world.",
  "I love photography.",
  "pencil sketching.",
  "singing.",
  "cooking.",
  "But most importantly, I love cute animals.",
  "Watching them playing around makes my heart melt.",
  "Want to know more about me?",
  "Scroll down!",
  "... ...",
  "I appreciate that you read through all of these.",
  "This is the end.",
  "This is really the end.",
  "No more messages.",
  "... ... ... ...",
  "These sentancies was fUll Of a ErRoR ? ! ?",
  "Beep-Boop Beep Beep-Beep-Boop Beep-Boop",
  "01001001 01001100 01010101 00110011 00110000 00110000 00110000 00101110"
];

// Speed (in milliseconds) of typing.
var speedForward = 120, //Typing Speed
    speedWait = 1300, // Wait between typing and backspacing
    speedBackspace = 35; //Backspace Speed

typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1")

  if (!isBackspacing) {
    if (i < aString.length) {
        eHeader.text(eHeader.text() + aString.charAt(i));
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
    else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
        
    }
  } 
  else {
    if ((a == 2 && i == 5) || 
        (a == 3 && i == 0) || 
        (a == 4 && i == 0) || 
        (a == 5 && i == 0)) {
      isBackspacing = false;
      a = a + 1
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      i = 0
    }
    else if ((a == 10 && i == 7) || 
             (a == 11 && i == 0) || 
             (a == 12 && i == 0)) {
      isBackspacing = false;
      a = a + 1
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      i = 0
    }
    else if (eHeader.text().length > 0) {
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
      i = i - 1;
    } 
    else { 
      isBackspacing = false;
      i = 0;
      a = (a + 1) % ar.length; 
      setTimeout(function(){ typeWriter(id, ar); }, 50);
    }
  }
}

// Scroll Magic Animations
$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#top-intro',
        triggerHook: 0,
        duration: '40%'
    })
    .setPin('#top-intro', {pushFollowers: false})
    // .addIndicators({
    //   name: 'top-intro'
    // })
    .addTo(controller);

    $('.images').each(function() {
        var imageFrame = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false
        })
        .setClassToggle(this, 'appear')
        // .addIndicators({
        //     name:'fade scene'
        // })
        .addTo(controller);
    })

    var changeBackgroundblack = new ScrollMagic.Scene({
      triggerElement: '#background-trigger',
      duration: '130%'
    })
    .setClassToggle('.ready-change', 'change-black')
    // .addIndicators({
    //   name: 'background-toggle-black'
    // })
    .addTo(controller);

    var changeBackgroundwhite = new ScrollMagic.Scene({
      triggerElement: '#box2',
      triggerHook: 0.35
    })
    .setClassToggle('.ready-change', 'change-white')
    // .addIndicators({
    //   name: 'background-toggle-white'
    // })
    .addTo(controller);

    var leftHeading = new ScrollMagic.Scene({
      triggerElement: '#experience-heading',
      reverse: false
    })
    .setClassToggle('#experience-heading', 'left-showup')
    // .addIndicators({
    //   name: 'experience-heading'
    // })
    .addTo(controller);
});



