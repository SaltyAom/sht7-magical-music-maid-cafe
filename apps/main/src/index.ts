// ? If you are unfamiliar with: https://elysiajs.com/plugins/eden/treaty.html
import { edenTreaty } from '@elysiajs/eden'
import type { Inventory } from 'inventory'

const eden = edenTreaty<Inventory>('https://cafe.gehenna.sh')

// ? It's wise to start from index
eden.index.get()
