import { test } from 'node:test';
import assert from 'node:assert/strict';
import { quoteRequestSchema } from '../src/requests/QuoteRequestSchema.ts';

const brief = {
  name: 'Creator テスト', email: 'creator@example.com',
  description: 'An original song with typography and character animation.',
  date: '2099-12-31', budget: '700', drive: '', coupon: '', agree: true,
};

test('inquiry validation accepts creator aliases and rejects invalid input', () => {
  assert.equal(quoteRequestSchema.safeParse(brief).success, true);
  for (const changes of [
    { agree: false }, { budget: '0' }, { email: 'bad' },
    { date: '2099-02-31' }, { date: '2000-01-01' },
    { description: 'x'.repeat(2001) }, { drive: 'javascript:alert(1)' },
  ]) {
    assert.equal(quoteRequestSchema.safeParse({ ...brief, ...changes }).success, false);
  }
});
