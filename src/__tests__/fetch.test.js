import { describe, expect, it } from 'vitest'
import { getCoffees } from '@/util/fetch';

describe('fetch data', () => {
  it('should GET request to fetch available coffees and returns the result', async () => {
    const data = await getCoffees('https://nodejs-database.onrender.com/api/v1/coffees/')

    expect(data.length).toBeGreaterThan(0)
    expect(data).toBeInstanceOf(Array)
    expect(data[0]).toHaveProperty('id')
  })
})
