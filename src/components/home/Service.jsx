import { FaCode, FaPenFancy, FaRobot } from 'react-icons/fa';
export default function Service() {
  return (
    <>
      <div
        className="mt-3"
        style={{
          backgroundColor: 'navy',
          color: 'white',
          marginBottom: '10px',
        }}
      >
        <div className="text-center mt-5 pt-5">
          <h3>Services</h3>
          <p>What I do.</p>
        </div>
        <div className="container">
          <div className="row_div ">
            <div
              className="mb-3"
              style={{
                border: '1px solid navy',
                borderRadius: '10px',
                width: '300px',
                padding: '5px',
              }}
            >
              <FaCode fontSize={25} />
              <h4>Web Development</h4>
              <div
                className="line"
                style={{ border: '1px solid navy', width: '60%' }}
              ></div>
              <p>
                I apply knowledge of various programming language such as HTML5,
                CSS3, JAVASCRIPT, PYTHON, TAILWIND, REACT and REDUX to build
                digital solutions for users.
              </p>
            </div>
            <div
              className="mb-3"
              style={{
                border: '1px solid navy',
                borderRadius: '10px',
                width: '300px',
                padding: '5px',
              }}
            >
              <FaRobot fontSize={25} />
              <h4>SEO Optimization</h4>
              <div
                className="line"
                style={{ border: '1px solid navy', width: '60%' }}
              ></div>
              <p>
                I build highly optimized website for clients. I use my didgital
                marketing skills to enhance SEO optimization of webites making
                it visible, accessible and scalable.
              </p>
            </div>
            <div
              className="seo mb-3"
              style={{
                border: '1px solid navy',
                borderRadius: '10px',
                width: '300px',
                padding: '5px',
              }}
            >
              <FaPenFancy fontSize={25} />
              <h4>Technical writing</h4>
              <div
                className="line"
                style={{ border: '1px solid navy', width: '60%' }}
              ></div>
              <p>
                I write unique and plagiarism free content for your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
