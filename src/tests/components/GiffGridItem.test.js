import { shallow } from 'enzyme'
import GiffGridItem from '../../components/GiffGridItem'

describe('Pruebas en <GiffGridItem />', () => {
  const title = 'A Title'
  const url = 'http://localhost/algo.jpg'
  let wrapper = shallow(<GiffGridItem title={ title } url={ url } />)
  beforeEach(() => {
    wrapper = shallow(<GiffGridItem title={ title } url={ url } />)
  })

  test('Debe mostrar <GiffGridItem /> correctamente', async () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('debe de tener un parrafo con el titulo', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })
  test('debe de tener una imagen con el alt y url de los props', () => {
    const img = wrapper.find('img')
    //console.log(img.props())
    expect(img.props().src).toBe(url)
    expect(img.props().alt).toBe(title)
  })
  test('Debe tener animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.props().className
    expect(className.includes('animate__fadeInDown')).toBe(true)
  })
})