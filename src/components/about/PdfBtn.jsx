import './About.css';
const PdfButton = () => {
  const pdfUrl = 'https://jade-theodosia-4.tiiny.site';

  const handleClick = () => {
    window.open(pdfUrl);
  };

  return (
    <>
    <button
      className="btn btn-outline-dark btn-lg resume"
      onClick={handleClick}
      >
      Resume
    </button>
      </>
  );
};

export default PdfButton;
