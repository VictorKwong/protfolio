const portfolioApp = {};

$(function () {
    $('a').smoothScroll({
        speed: 300
    });
});

$('.headerMonkey').on('click',function(){
    $('.monkeyWords').html("Feed me some bananas, I'm hungry.")
    $(this).addClass("monkeyMove");
    eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventOne)}, 750);
    eventTwo = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventTwo)}, 1500);
    eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventThr)}, 2400);
    eventFour = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventFour)}, 3000);
    event = setTimeout(function() {$('.headerMonkey').removeClass("monkeyMove"); clearTimeout(event)}, 3000);
});


//Reference https://codepen.io/kcire815/pen/PNwZXQ
portfolioApp.init = () => {
    let Animation = function(animationBar, percentage) {
  
      this.animationBar = animationBar;
      this.percentage = percentage;
      this.animationArray = null;
      this.animationOffset = null;
      this.labelArray = null;
      this.percentageArray = null;
      this.index = 0;
  
      this.initialize();
  
    };  
  
    Animation.prototype.initialize = function() {
  
      this.animationArray = document.getElementsByClassName(this.percentage);
  
      if (this.animationOffset === null){
        this.animationOffset = [];
      }
      if (this.labelArray === null){
        this.labelArray = [];
      }
      if (this.percentageArray === null){
        this.percentageArray = [];
      }

      this.setUpElements();
    };
  
    Animation.prototype.setUpElements = function() {
  
      for (var i = 0; i < this.animationArray.length; i++) {
        let elem = this.animationArray[i],
          offset = elem.offsetTop + document.getElementsByClassName(this.percentage)[0].clientHeight,
          percentage = $(this.animationArray[i]).data(this.percentage);
  
        this.animationOffset.push(offset);
        this.percentageArray.push(percentage);
  
        $(this.animationArray[i]).find('.label').html(percentage + '%');
      }
  
      this.attachListeners();
    }
  
    Animation.prototype.attachListeners = function() {
  
      $(window).on('scroll', this.onWindowScroll.bind(this));
    };
  
    Animation.prototype.onWindowScroll = function() {
  
      for (var i = 0; i < this.animationArray.length; i++) {
        if (window.pageYOffset >= this.animationOffset[this.index] - window.innerHeight) {
          this.showElement();
          this.index++;
        } else
          return;
      }
    };
  
    Animation.prototype.showElement = function() {
      var element = document.getElementsByClassName(this.percentage)[this.index];
      element.className += ' show';
      this.animateBar(element, this.percentageArray[this.index]);
    }
  
    Animation.prototype.animateBar = function(element, width) {
  
      var $element = $(element),
        className = ' p' + width;
  
      $element.find(this.animationBar).addClass(className);
    }
  
    new Animation('.animationBar', 'percentage');
    
    /* about section */
    $(window).scroll(function () {
        $('.aboutSectionHide').each(function () {
            let imageHeight = $(this).height(); /* image height */
            let topOfWindow = $(window).scrollTop();
            if (topOfWindow > imageHeight + 100) {
                $(this).addClass("showAbout");
            }
        });
    });
  };

  $(document).ready(portfolioApp.init());