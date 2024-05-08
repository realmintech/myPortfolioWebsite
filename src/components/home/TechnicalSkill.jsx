import './Home.css'
export default function TechnicalSkill() {
  return (
    <>
      <div
        className="sectionSkills"
        style={{
            padding:'20px 10px',
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-evenly',
          backgroundColor: 'powderblue',
          color: 'navy',
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
              }}
            >
              Presentation skill
            </button>
            <button style={{ padding: '10px', margin: '5px', border: 'none' }}>
              Critical thinking
            </button>
            <button
              style={{
                borderRadius: '50%',
                padding: '10px',
                margin: '5px',
                border: 'none',
              }}
            >
              Communication skill
            </button>
            <button style={{ padding: '10px', margin: '5px', border: 'none' }}>
              Good time management skill
            </button>
            <button
              style={{
                borderRadius: '50%',
                padding: '10px',
                margin: '5px',
                border: 'none',
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
