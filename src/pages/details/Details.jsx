import './Details.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function Details() {
  const {id} = useParams();
  const {mode} = useContext(ThemeContext);
  const url = "http://localhost:3000/tarifler/" + id;

  const { data: tarif, isLoading, error } = useFetch(url);

  return (
    <div className={`text-${mode === "dark" ? "light" : "dark"} border-${mode === "dark" ? "light" : "dark"}`}>
      <div className="row mt-3">
        { isLoading && <div className='alert alert-warning'>Yükleniyor...</div>}
        { error && <div className='alert alert-danger'>{error}</div>}
        {
          tarif && (
            <>
              <div className="col-4">
                <img src={`/img/${tarif.resim}`} alt={tarif.baslik} className='img-fluid rounded'/>
              </div>
              <div className="col-8">
                <h5>{ tarif.baslik }</h5>
                <p>{ tarif.aciklama }</p>
                <h6 className='mt-4'>Malzemeler</h6>
                <ul className='text-start ps-0'>
                  {
                    tarif.malzemeler.map((malzeme, index) => (
                      <li className='list-unstyled' key={index}>{ malzeme }</li>
                    ))
                  }
                </ul>
              </div>
              <div className="col-12">
                <h5 className='mt-3'>Hazırlanışı</h5>
                <p>{ tarif.hazirlanisi }</p>
                <a href={tarif.url} className="btn btn-outline-primary mb-3">Tarifi İncele</a>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Details