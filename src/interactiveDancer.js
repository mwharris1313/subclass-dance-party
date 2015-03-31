var makeInteractiveDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want
  // the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.isMovingTowards = true;

};

makeInteractiveDancer.prototype = Object.create(makeDancer.prototype);
makeInteractiveDancer.prototype.constructor = makeInteractiveDancer;

makeInteractiveDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to
  // this new version of step
  var min = function(array) {
    var currentSmallest = Number.MAX_VALUE;
    var currentIndex = null;
    for (var i = 0; i < array.length; i++) {
      if (array[i] < currentSmallest) {
        currentSmallest = array[i];
        currentIndex = i;
      }
    }
    return currentIndex;
  };

  var dancers = window.dancers;
  var distances = [];
  for (var i = 0; i < dancers.length; i++) {
    if (dancers[i] === this) {
      distances.push(Number.MAX_VALUE);
    } else {
      var x = this.left - dancers[i].left;
      var y = this.top - dancers[i].top;
      var distance = Math.sqrt(x * x + y * y);
      distances.push(distance);
    }
  }

  if (window.dancers.length > 1) {
    var closest = dancers[min(distances)];
    var topDelta = closest.top - this.top;
    var leftDelta = closest.left - this.left;

    if (this.isMovingTowards) {
      this.setPosition( this.top + topDelta/2, this.left + leftDelta/2 );
    } else {
      this.setPosition(this.top - topDelta, this.left - leftDelta);
    }
    this.isMovingTowards = !this.isMovingTowards;
  }

  makeDancer.prototype.step.call(this, timeBetweenSteps);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
