var makeMouseColorDancer = function(top, left, timeBetweenSteps){
  makeColorDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want
  // the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeMouseColorDancer.prototype = Object.create(makeColorDancer.prototype);
makeMouseColorDancer.prototype.constructor = makeMouseColorDancer;

makeMouseColorDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to
  // this new version of step

  var thisNode = this.$node;

  thisNode.mouseover(function(){
    thisNode.addClass('yellow');
  });

  thisNode.mouseleave(function(){
    thisNode.removeClass('yellow');
  });

  makeColorDancer.prototype.step.call(this, timeBetweenSteps);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
