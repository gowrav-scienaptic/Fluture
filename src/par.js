import concurrify from 'concurrify';
import type from 'sanctuary-type-identifiers';

import {Future, never} from './future.js';
import {parallelAp} from './parallel-ap.js';
import {race} from './race.js';

function uncurry(f){
  return function(a, b){
    return f(a)(b);
  };
}

export var Par = concurrify(Future, never, uncurry(race), uncurry(parallelAp));

export function isParallel(x){
  return x instanceof Par || type(x) === Par['@@type'];
}