import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validQuantity } from '../src/utils/rules.js';
test('ordinary quantity is accepted', () => assert.equal(validQuantity(2, 6), true));
test('six portions at the limit are accepted', () => assert.equal(validQuantity(6, 6), true));
test('more than six portions are rejected', () => assert.equal(validQuantity(7, 10), false));
test('changed stock is enforced', () => assert.equal(validQuantity(2, 1), false));
