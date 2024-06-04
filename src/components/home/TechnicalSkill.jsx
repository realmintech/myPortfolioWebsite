import './Home.css'
export default function TechnicalSkill() {
  return (
    <>
      <div
        className="sectionSkills"
        style={{
          padding: '20px 10px',
          display: 'flex',
          flexWrap: 'nowrap',
          backgroundColor: 'navy',
          padding: '50px',
          color: 'white',
        }}
      >
        <div className="writeUp">
          <h3>Soft Skills</h3>
          <p>
            I have a profound experience in presentation, public speaking and
            time management.
          </p>
        </div>
        <div>
          <div className="softSkill">
            <button
              style={{
                borderRadius: '50%',
                padding: '10px',
                margin: '5px',
                border: 'none',
                color: 'navy',
              }}
            >
              Presentation skill
            </button>
            <button
              style={{
                color: 'navy',
                padding: '10px',
                margin: '5px',
                border: 'none',
              }}
            >
              Critical thinking
            </button>
            <button
              style={{
                borderRadius: '50%',
                padding: '10px',
                margin: '5px',
                border: 'none',
                color: 'navy',
              }}
            >
              Communication skill
            </button>
            <button
              style={{
                color: 'navy',
                padding: '10px',
                margin: '5px',
                border: 'none',
              }}
            >
              Good time management skill
            </button>
            <button
              style={{
                borderRadius: '50%',
                padding: '10px',
                margin: '5px',
                border: 'none',
                color: 'navy',
              }}
            >
              Leadership skill
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
