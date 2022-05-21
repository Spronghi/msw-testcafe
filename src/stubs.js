import { setupWorker, rest } from 'msw'

export const handlers = [
  rest.get('/foo', (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('12345'))
  }),
]

export const worker = setupWorker(...handlers);
