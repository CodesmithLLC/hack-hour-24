'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.listeners = {};

}

EventEmitter.prototype.on = function(funcName, func) {

  if(this.listeners[funcName]) {
    this.listeners[funcName].unshift(func);
  } else{
    this.listeners[funcName] = [func];
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  this.listeners[funcName].forEach(listener => {
    listener(...args);
  })
};

let instance = new EventEmitter();
let counter = 0;
instance.on('increment', function(x) {
  counter += x;
});
instance.trigger('increment', 4);
instance.trigger('increment', 6);
console.log(counter);
module.exports = EventEmitter;
