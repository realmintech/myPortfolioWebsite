import WeatherApp from '../../assets/Capture2.jpeg';
import TodoListApp from '../../assets/Capture3.jpeg';
import Ecommerce from '../../assets/Capture4.jpeg';

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={Ecommerce}
              style={{ width: '100%', objectFit: 'contain', height: '450px' }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Code Quote</h5>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand. - Martin
                Fowler
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={TodoListApp}
              style={{ width: '100%', objectFit: 'contain', height: '450px' }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Favourite Quote</h5>
              <p>
                If i wont do the best, i would rather leave it to rest. Rather than
                of making mess of it.
              </p>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src={WeatherApp}
              style={{ width: '100%', objectFit: 'contain', height: '450px' }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Adorable Quote</h5>
              <p>If you dont have a goal, you are not better than a goat.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
