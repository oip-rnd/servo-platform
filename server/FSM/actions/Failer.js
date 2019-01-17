/**
 * Failer
 *
 * Copyright (c) 2017 Servo Labs Inc.  
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 **/

// namespace:
var b3 = require('../core/b3');
var Action = require('../core/action')


/**
 * This action node returns `FAILURE` always.
 * It also resets the context and target, as usually it will be on the end of a sequence
 *
 *  @memberof module:Actions
 **/
class Failer extends Action {

  constructor() {

    super();
    this.title = this.name = 'Failer';
  }
  /**
   * Tick method.
   *
   * @private
   * @param {Tick} tick A tick instance.
   * @return {TickStatus} Always return `b3.FAILURE`.
   **/
  tick(tick) {

    return b3.FAILURE();
  }
}
module.exports = Failer;
