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
  this.events = {};
}

EventEmitter.prototype.on = function on(funcName, func) {
  if (!this.events[funcName]) {
    this.events[funcName] = [];
  }
  this.events[funcName].push(func);
  // console.log(this.events.increment)
};

EventEmitter.prototype.trigger = function triegger(funcName, ...args) {
  let i;
  let listeners;
  if (this.events[funcName]) {
    listeners = this.events[funcName].slice();
    // console.log(listeners[0], args);

    for (i = 0; i < listeners.length; i += 1) {
      return listeners[i](...args);
    }
  } else {
    return undefined;
  }
};

// var instance = new EventEmitter();
// var counter = 0;
// let testF = function() {
//   counter++;
// }
// instance.on('increment', testF); // counter should be 0
// instance.trigger('increment'); 
// // counter should be 1
// instance.trigger('increment'); // counter should be 2

module.exports = EventEmitter;
