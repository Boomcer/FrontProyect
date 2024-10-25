import CarruselApp from '../components/CarruselApp';
import GridProductsApp from '../components/GridProductsApp'
import PublicidadApp from '../components/PublicidadApp';

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


          <section className='container w-100'>
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