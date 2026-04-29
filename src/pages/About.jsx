function About() {
  return (
    <div>
      <h2>Despre mine</h2>

      <div className="section-card">
        <h3>cine sunt</h3>
        <p style={{ color: 'var(--text)', lineHeight: '1.7' }}>
          Sunt studenta la facultatea de calculatoare, pasionata de tehnologie si dezvoltare web.
          Imi place sa invat lucruri noi si sa construiesc proiecte interesante.
        </p>
      </div>

      <div className="section-card">
        <h3>interese</h3>
        <div className="about-section">
          <ul>
            <li>web development</li>
            <li>react & javascript</li>
            <li>motorsport</li>
            <li>sah</li>
          </ul>
        </div>
      </div>

      <div className="section-card">
        <h3>tehnologii</h3>
        <div className="about-section">
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
