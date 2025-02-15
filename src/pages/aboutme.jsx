import React from "react";
import wavegif from "../assets/hand-wave.gif";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1 className="about-me-title">Hi <img src={wavegif} alt="👋" className="wave-gif"/>, I'm Mahmoud Elnashar</h1>
      <h3 className="about-me-subtitle">
        A passionate Software Engineer and Machine Learning enthusiast based in
        Cairo, Egypt, with a strong foundation in computer engineering and a
        drive to solve real-world problems through technology.
      </h3>

      <section className="about-section">
        <h2>About Me 🙋‍♂️</h2>
        <p>
          🎓 I hold a Bachelor of Science in Computer Engineering and Software
          Systems from Ain Shams International Credit Hours Engineering
          Program, graduating with honors.
        </p>
        <p>
          💡 As a fresh graduate, I’m eager to dive into Software Engineering,
          Machine Learning, and Data Analysis roles, where I can apply my skills
          and contribute to impactful projects.
        </p>
        <p>
          🌱 I’m constantly learning and expanding my knowledge in emerging
          technologies to stay ahead in the ever-evolving tech landscape.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills 🛠️</h2>
        <h3>Programming Languages & Frameworks:</h3>
        <div className="skills-icons">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="Dart" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="Flutter" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" width="40" height="40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="Pandas" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="SQLite" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="Android" width="40" height="40" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="40" height="40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" alt="Qt" width="40" height="40" />
          <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="OpenCV" width="40" height="40" />
          <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" alt="Tableau" width="40" height="40" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" width="40" height="40" />
        </div>
      </section>

      <section className="summary">
        <h3>Languages:</h3>
        <p>C/C++, Python, Java, Dart, JavaScript, SQL (SQLite, Sqflite, PostgreSQL), VHDL</p>
        <h3>Frameworks & Libraries:</h3>
        <p>Flutter, React, Node.js, PyTorch, TensorFlow</p>
        <h3>Web Development:</h3>
        <p>HTML, CSS</p>
        <h3>Data Visualization:</h3>
        <p>Tableau, Power BI</p>
      </section>
    </div>
  );
};

export default AboutMe;
