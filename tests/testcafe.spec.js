import { Selector } from 'testcafe'

fixture('This will not work in Firefox')
  .page('http://localhost:3000/');

const foo = Selector('[data-testid="foo"]')
const timeout = 10000;

test('First test usually work', async (t) => {
  await t
    .expect(foo.exists).ok({ timeout })
    .expect(foo.textContent).eql('12345', { timeout })
})

test('Second do not work', async (t) => {
  await t
    .expect(foo.exists).ok({ timeout })
    .expect(foo.textContent).eql('12345', { timeout })
})