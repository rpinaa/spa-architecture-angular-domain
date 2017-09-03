import {TimeAgoPipe} from './time-ago.pipe';
import {NgZone} from '@angular/core';

class NgZoneMock {
  runOutsideAngular (fn: Function) {
    return fn();
  }
  run(fn: Function) {
    return fn();
  }
};

describe('TimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgoPipe(null, new NgZoneMock() as NgZone);
    expect(pipe).toBeTruthy();
  });
});
