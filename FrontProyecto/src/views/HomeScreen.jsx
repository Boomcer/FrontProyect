import { useEffect, useState } from 'react';
import CarruselApp from '../components/CarruselApp';
import GridProductsApp from '../components/GridProductsApp'
import PublicidadApp from '../components/PublicidadApp';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() =>{

    const handleSize = () =>{
      if(window.innerWidth < 768){
        setIsVisible(false);
      }
  
      else{
        setIsVisible(true);
      }
    }

    handleSize()

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);


  }, []);

  return (
    <>
        <div className='vw-100'>
          <section className='my-5'>
            <CarruselApp/>
          </section>

            <section className=''>
              <GridProductsApp/>
            </section>

          {isVisible &&(
            <section className='container w-100'>
              <PublicidadApp/>
            </section>

            )
          }

        </div>

    </>
  )
}

export default App