import CarruselApp from './components/CarruselApp';
import GridProductsApp from './components/GridProductsApp'
import PublicidadApp from './components/PublicidadApp';
import './App.css'

function App() {
  

  return (
    <>
    <div className='col d-flex align-items-center'>
      <div className='row'>

      </div>
      <div className='row'>
        <div className='container'>
          <section className='my-5'>
            <CarruselApp/>
          </section>
          <section className='container'>
            <GridProductsApp/>
          </section>
          <section className='container w-75'>
            <PublicidadApp/>
          </section>

        </div>
      </div>

      <div className='row'>

      </div>

    </div>
    </>
  )
}

export default App
