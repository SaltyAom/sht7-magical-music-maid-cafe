import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => '')
    .get('/door', () => '')
    .get('/stained-glass', () => '')
    .get('/chrono-reactor', () => '')
    .put('/chrono-reactor', () => '', {
        body: t.Object({
            password: t.String()
        })
    })
    .get('/fireflies', ({}) => '', {
        query: t.Object({
            type: t.String()
        })
    })
    .get('/trash-can', () => '')
    .put('/trash-can', () => '', {
        body: t.Object({
            item: t.String()
        })
    })
    .post('/message', () => '', {
        body: t.Object({
            to: t.String(),
            message: t.String()
        })
    })
    .put('/clockwork', ({ body }) => '', {
        body: t.Object({
            direction: t.Union([
                t.Literal('Clock-wise'),
                t.Literal('Counter clock-wise')
            ])
        })
    })
    .get('/music-box', () => '')
    .get('/pathway', () => '')
    .get('/kivotos', () => '')
    .put(
        '/cafe',
        ({ body: { name } }) => {
            if (name) return ''

            return ['', '']
        },
        {
            body: t.Object({
                name: t.String()
            })
        }
    )
    .post('/millenium', () => '')

export type Inventory = typeof app

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
