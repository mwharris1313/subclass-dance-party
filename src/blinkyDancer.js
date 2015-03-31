

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want
  // the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = makeDancer.prototype.step.bind(this, timeBetweenSteps);
  //var nodeToggle = $.toggle.bind(this.$node);
  this.step(timeBetweenSteps);


};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to
  // this new version of step
  //oldStep();
  //nodeToggle();


//  this.$node.toggle();
  console.log('blinky', this);
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
/*
  console.log("executed blinky step");
  setTimeout(function() {
    console.log("executed callback function");
    this.$node.toggle();

  }, timeBetweenSteps);
*/
};
