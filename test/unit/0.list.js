import {eq, test} from '../util/util.js';
import {nil, cons, reverse, cat} from '../../src/internal/list.js';

test('reverse', function (){
  eq(reverse(nil), nil);
  eq(reverse(cons('a', nil)), cons('a', nil));
  eq(reverse(cons('a', cons('b', nil))), cons('b', cons('a', nil)));
  eq(reverse(cons('a', cons('b', cons('c', nil)))), cons('c', cons('b', cons('a', nil))));
});

test('cat', function (){
  eq(cat(nil, nil), nil);
  eq(cat(cons('a', nil), nil), cons('a', nil));
  eq(cat(nil, cons('a', nil)), cons('a', nil));
  eq(
    cat(cons('a', cons('b', nil)), cons('c', cons('d', nil))),
    cons('a', cons('b', cons('c', cons('d', nil))))
  );
});
