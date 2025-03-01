//import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="src/assets/logo.png" alt="Nik Games Logo" className="logo" style={{ marginRight: '5px' }} />
          <h2 className="App-title">Nik Games</h2>
        </div>
        <nav>
          <a href="#home" style={{ margin: '0 10px' }}>Home</a>
          <a href="#portfolio" style={{ margin: '0 10px' }}>Portfolio</a>
          <a href="#terms" style={{ margin: '0 10px' }}>Terms & Conditions</a>
          <a href="#register" style={{ margin: '0 10px' }}>Register</a>
        </nav>
      </header>

      {/* Course Details */}
      <section id="home" className="course-details">
        <h2>Game Development Course</h2>
        <p>Join our exciting game development course designed for students above 6th standard. Learn the fundamentals of game design, coding, and more!</p>
        <a href="#register-form" className="register-button">Register Now</a>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>Our Games Portfolio</h2>
        <div className="portfolio-item">
          <div className="portfolio-icon">🎮</div>
          <div className="portfolio-info">
            <h3>Game Title</h3>
            <p>Tagline of the game</p>
            <video controls>
              <source src="gameplay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Add more portfolio items as needed */}
      </section>

      {/* Registration Form */}
      <section id="register-form" className="registration-form">
        <h2>Register for the Course</h2>
        <form>
          <label>
            Student Name:
            <input type="text" name="studentName" required />
          </label>
          <label>
            Select Class:
            <select name="class">
              <option value="6">6th Standard</option>
              <option value="7">7th Standard</option>
              <option value="8">8th Standard</option>
              <option value="9">9th Standard</option>
              <option value="10">10th Standard</option>
              <option value="11">11th Standard</option>
              <option value="12">12th Standard</option>
              <option value="12+">12+</option>
            </select>
          </label>
          <label>
            Parent Name:
            <input type="text" name="parentName" required />
          </label>
          <label>
            Email ID:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" required />
          </label>
          <label>
            <input type="checkbox" name="terms" required />
            I agree to the terms and conditions
          </label>
          <button type="submit">Register for Rs.999</button>
          <p>You can pay the remaining Rs.2000 within the first week of the course.</p>
        </form>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <div className="social-media">
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:contact@nikgames.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
