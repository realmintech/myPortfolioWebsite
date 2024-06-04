import WeatherApp from '../../assets/Capture2.jpeg';
import TodoListApp from '../../assets/Capture3.jpeg';
import Ecommerce from '../../assets/Capture4.jpeg';
import Dictionary from '../../assets/Capture5.jpeg';
import Calculator from '../../assets/Capture6.jpeg';
import Currency from '../../assets/Capture7.jpeg';
import NoteApp from '../../assets/note-app.jpg';

import './Home.css';

export default function Project() {
  const data = [
    {
      image: NoteApp,
      title: 'Note app',
      about:
        'The Note App is a simple web application that allows users to create, edit, and delete notes. Each note includes a title, message, and a timestamp indicating when it was created. The application leverages localStorage to persist notes across sessions, ensuring that your notes are available even after refreshing the page or closing the browser.',
      stack: 'HTML, CSS, bootstrap and Reactjs.',
      githubLink: 'https://github.com/realmintech/note-app.git',
      demoLink: 'note-app-flax-three.vercel.app',
    },
    {
      image: Ecommerce,
      title: 'Ecommerce',
      about:
        'This is a Ecommerce website. It was implemented using JavaScript. Custom JSON data was consumed and the layout was done using Bootstrap.',
      stack: 'HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/realmintech/Js_ecommerce.git',
      demoLink: 'https://js-ecommerce-gamma.vercel.app/',
    },
    {
      image: TodoListApp,
      title: 'Todo list app',
      about:
        'This is a Todo list app. It was implemented using react js. The layout was done using Tailwind CSS.',
      stack: 'HTML, CSS, JavaScript, and react js',
      githubLink: 'https://github.com/realmintech/todoAppReact.git',
      demoLink: 'https://todo-app-react-rydf.vercel.app/',
    },
    {
      image: {},
      title: 'Blog website',
      about:
        'This is a fullstack blog website. Consumption of custom API, using the CRUD methods and ensuring good user interface.',
      stack: 'HTML, CSS, JavaScript, and react-redux',
      githubLink: 'https://github.com/realmintech/reactBlog.git',
      demoLink: '',
    },
    {
      image: WeatherApp,
      title: 'Weather app',
      about:
        'This is a weather app. It was implemented using react js. Weather API was consumed and the layout was done using Tailwind CSS.',
      stack: 'HTML, CSS, JavaScript, and react',
      githubLink: 'https://github.com/realmintech/weatherApi.git',
      demoLink: 'https://weather-api-beige-zeta.vercel.app/',
    },
    {
      image: Dictionary,
      title: 'Dictionary',
      about:
        'This is a dictionary app. The stack used in it implementation are HTML,CSS, and JavaScript.',
      stack: 'HTML, CSS, and JavaScript',
      githubLink: 'https://github.com/realmintech/dictionary.git',
      demoLink: 'https://dictionary-psi-wheat.vercel.app/',
    },
    {
      image: Currency,
      title: 'Currency converter',
      about:
        'This is a Currency converter app. The stack used in it implementation are HTML, CSS, currency API and JavaScript.',
      stack: 'HTML, CSS, and JavaScript',
      githubLink: 'https://github.com/realmintech/RealExchange.git',
      demoLink: 'https://real-exchange.vercel.app/',
    },
    {
      image: Calculator,
      title: 'Calculator',
      about:
        'This is a calculator app. Built with the knowledge of array methods,DOM manipulation and concatination.',
      stack: 'HTML, CSS, and JavaScript',
      githubLink: 'https://github.com/realmintech/calculator.git',
      demoLink: 'https://calculator-rouge-two.vercel.app/',
    },
  ];
  return (
    <>
      <div className="container mt-3" id="project">
        <h1 className="text-center">Projects done so far</h1>
        {data.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  }}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                <div
                  className="card"
                  style={{ width: '100%', height: '250px' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.about}</p>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Tech stack-
                      {item.stack}
                    </h6>
                    <button
                      style={{ borderRadius: '15px' }}
                      className="btn btn-outline-none resume"
                    >
                      <a
                        href={item.githubLink}
                        style={{ textDecoration: 'none' }}
                      >
                        GITHUB
                      </a>
                    </button>
                    <button
                      style={{ borderRadius: '15px' }}
                      className="btn btn-outline-none resume mx-3"
                    >
                      <a
                        href={item.demoLink}
                        style={{ textDecoration: 'none' }}
                      >
                        DEMO
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
