import { getGiff } from '../../helpers/GetGiffs'

describe('Pruebas en getGiffFetch', () => {

  test('debe traer 5 elementos', async () => {
    const gifs = await getGiff('One punch')
    console.log(gifs.length)
    expect(gifs.length).toBe(5)
  })

})