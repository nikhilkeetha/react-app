import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [showTerms, setShowTerms] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portfolioItems = [
    { title: 'Zombieverse', tagline: 'Augmented Reality Game', videoSrc: 'src/assets/game1.mp4' },
    { title: 'Space Explorer', tagline: 'Interstellar Adventure', videoSrc: 'src/assets/game2.mp4' },
    { title: 'Pixel Quest', tagline: '2D Platform Adventure', videoSrc: 'src/assets/game3.mp4' },
    { title: 'Digital Racer', tagline: 'Racing Simulation', videoSrc: 'src/assets/game4.mp4' },
  ];

  const handleTermsClick = (e) => {
    e.preventDefault();
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Course timeline data
  const courseTimeline = [
    { day: "Day 1-2", topic: "Introduction to Game Design & Unity Basics" },
    { day: "Day 3-5", topic: "Understanding Game Mechanics & Physics" },
    { day: "Day 6-8", topic: "Character Design & Animation Fundamentals" },
    { day: "Day 9-11", topic: "Level Design & Environment Creation" },
    { day: "Day 12-14", topic: "Basic Scripting & Game Logic" },
    { day: "Day 15-17", topic: "Sound Effects & Music Integration" },
    { day: "Day 18-20", topic: "Game Testing & Debugging" },
    { day: "Day 21-23", topic: "Final Project Development" },
    { day: "Day 24-26", topic: "Project Finalization & Presentation" },
  ];

  const TermsAndConditions = () => (
    <div className="terms-modal" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div className="terms-content" style={{
        backgroundColor: '#121212',
        borderRadius: '16px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        padding: '40px',
        position: 'relative'
      }}>
        <button
          onClick={handleCloseTerms}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            width: '40px',
            height: '40px'
          }}
        >
          ✕
        </button>
        <h2 style={{
          fontSize: '2.2rem',
          marginBottom: '24px',
          fontWeight: '700',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }}>Terms & Conditions</h2>

        <div style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>1. Course Registration</h3>
          <p style={{ marginBottom: '16px' }}>
            By registering for the Game Development Course offered by Nik Games, you acknowledge and agree to the following terms and conditions. Registration is considered complete upon payment of the initial fee of Rs.999.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>2. Payment Terms</h3>
          <p style={{ marginBottom: '16px' }}>
            The total course fee is Rs.2,999. An initial payment of Rs.999 is required at the time of registration. The remaining Rs.2,000 must be paid within the first week of course commencement. Failure to complete the payment may result in suspension from the course.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>3. Eligibility</h3>
          <p style={{ marginBottom: '16px' }}>
            This course is designed for students in 6th standard and above. Students must have basic computer literacy skills. Parents/guardians must consent to the registration of minors.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>4. Course Content</h3>
          <p style={{ marginBottom: '16px' }}>
            Nik Games reserves the right to modify the course curriculum as needed to enhance the learning experience. Course materials provided are for personal use only and may not be redistributed.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>5. Intellectual Property</h3>
          <p style={{ marginBottom: '16px' }}>
            All projects developed during the course will be co-owned by the student and Nik Games. Nik Games reserves the right to showcase student projects for promotional purposes while crediting the student.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>6. Cancellation and Refunds</h3>
          <p style={{ marginBottom: '16px' }}>
            Cancellations made more than 7 days before course commencement are eligible for a full refund. Cancellations within 7 days of course commencement are eligible for a 50% refund. No refunds will be provided after the course has begun.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>7. Code of Conduct</h3>
          <p style={{ marginBottom: '16px' }}>
            Students are expected to maintain respectful behavior during all course activities. Nik Games reserves the right to remove students who engage in disruptive behavior without refund.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>8. Privacy Policy</h3>
          <p style={{ marginBottom: '16px' }}>
            Personal information collected during registration will be used solely for course-related communications and will not be shared with third parties without consent.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>9. Limitation of Liability</h3>
          <p style={{ marginBottom: '16px' }}>
            Nik Games shall not be liable for any indirect, incidental, or consequential damages arising from participation in the course.
          </p>

          <h3 style={{
            fontSize: '1.4rem',
            margin: '24px 0 12px',
            color: '#ffffff',
            fontWeight: '600'
          }}>10. Governing Law</h3>
          <p style={{ marginBottom: '16px' }}>
            These terms and conditions shall be governed by the laws of India.
          </p>
        </div>

        <div style={{
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <button
            onClick={handleCloseTerms}
            style={{
              padding: '12px 24px',
              backgroundColor: '#ffffff',
              color: '#121212',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(255,255,255,0.1)',
            }}
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );

  // Custom hook for autoplay videos
  function useAutoPlayVideo(videoRef) {
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Autoplay failed:", error);
        });
      }
    }, [videoRef]);
  }

  // Portfolio Item with autoplay video
  const PortfolioItem = ({ item }) => {
    const videoRef = useRef(null);
    useAutoPlayVideo(videoRef);

    return (
      <div className="portfolio-item" style={{
        background: 'rgba(255,255,255,0.03)',
        padding: '28px',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '340px',
        textAlign: 'center',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        <h3 style={{
          fontSize: '1.6rem',
          marginBottom: '12px',
          fontWeight: '600',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }}>{item.title}</h3>
        <p style={{
          fontSize: '1.05rem',
          marginBottom: '24px',
          color: 'rgba(255,255,255,0.7)'
        }}>{item.tagline}</p>
        <div style={{
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
        }}>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            style={{ width: '100%', display: 'block' }}
          >
            <source src={item.videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };

  return (
    <div className="App" style={{
      backgroundColor: '#121212',
      color: '#fff',
      fontFamily: 'Inter, sans-serif',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Show Terms Modal if active */}
      {showTerms && <TermsAndConditions />}

      {/* Header */}
      <header className="App-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 5%',
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 0px rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="src/assets/logo.png" alt="Nik Games Logo" className="logo" style={{
            marginRight: '12px',
            width: '30px',
            height: 'auto'
          }} />
          <h2 className="App-title" style={{
            fontSize: '1.2rem',
            fontWeight: '700',
            margin: 0,
            letterSpacing: '-0.02em'
          }}>Nik Games</h2>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            '@media (max-width: 768px)': {
              display: 'block',
            }
          }}
          className="mobile-menu-button"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '24px'
        }} className="desktop-nav">
          <a href="#home" className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            transition: 'color 0.2s ease',
            padding: '8px 0'
          }}>Home</a>
          <a href="#portfolio" className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            transition: 'color 0.2s ease',
            padding: '8px 0'
          }}>Portfolio</a>
          <a href="#" onClick={handleTermsClick} className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.95rem',
            transition: 'color 0.2s ease',
            padding: '8px 0'
          }}>Terms & Conditions</a>
          <a href="#register-form" className="nav-link register-btn" style={{
            color: '#121212',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.95rem',
            backgroundColor: '#ffffff',
            padding: '8px 16px',
            borderRadius: '6px',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.1)'
          }}>Register</a>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className="mobile-menu"
          style={{
            display: mobileMenuOpen ? 'flex' : 'none',
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: '#121212',
            flexDirection: 'column',
            padding: '20px',
            zIndex: 99,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <a href="#home" className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.1rem',
            padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#portfolio" className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.1rem',
            padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }} onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#" onClick={(e) => {
            handleTermsClick(e);
            setMobileMenuOpen(false);
          }} className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '1.1rem',
            padding: '12px 0',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>Terms & Conditions</a>
          <a href="#register-form" className="nav-link" style={{
            color: 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            padding: '12px 0',
          }} onClick={() => setMobileMenuOpen(false)}>Register</a>
        </div>
      </header>

      {/* Course Details - Enhanced Hero Section */}
      <section id="home" className="course-details" style={{
        padding: '80px 5%',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(18,18,18,0.95)), url("src/assets/game-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '80px'
        }} className="course-container">
          {/* Main Course Info */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '40px',
            justifyContent: 'space-between'
          }} className="course-main-info">
            <div style={{
              flex: '1',
              minWidth: '300px'
            }} className="course-text">
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '24px',
                background: 'linear-gradient(90deg, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                letterSpacing: '-0.03em'
              }}>Game Development Course</h1>
              <p style={{
                fontSize: '1.25rem',
                marginBottom: '24px',
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: '400'
              }}>Learn to build amazing games from scratch in our 1-month online course designed specifically for students grade 6 and above.</p>

              <div style={{
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>✓</div>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>No prior coding experience required</p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>✓</div>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Build your own game by course completion</p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>✓</div>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Certificate of completion</p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>✓</div>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Interactive sessions with instructors</p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>⚠</div>
                  <p style={{ margin: 0, color: '#FFD700' }}>Only 50 slots available!</p>
                </div>
              </div>

              <a href="#register-form" className="register-button" style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#ffffff',
                color: '#121212',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>Register Now</a>
            </div>

            <div style={{
              flex: '1',
              minWidth: '300px',
              display: 'flex',
              justifyContent: 'center'
            }} className="course-image">
              <img
                src="src/assets/home.webp"
                alt="Game Development illustration"
                style={{
                  maxWidth: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>
          </div>

          {/* Course Timeline */}
          <div style={{
            marginTop: '40px'
          }} className="course-timeline">
            <h2 style={{
              fontSize: '2.2rem',
              marginBottom: '36px',
              fontWeight: '700',
              textAlign: 'center',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>Course Curriculum - 26 Days Journey</h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              paddingLeft: '20px'
            }}>
              {/* Timeline vertical line */}
              <div style={{
                position: 'absolute',
                left: '10px',
                top: '0',
                bottom: '0',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
              }} className="timeline-line"></div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                justifyContent: 'space-around'
              }} className="timeline-items">
                {courseTimeline.map((item, index) => (
                  <div key={index} style={{
                    width: '30%',
                    minWidth: '250px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderRadius: '12px',
                    padding: '24px',
                    position: 'relative',
                    marginBottom: '30px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                  }} className="timeline-item">
                    {/* Circle on the timeline */}
                    <div style={{
                      position: 'absolute',
                      left: '-30px',
                      top: '30px',
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#ffffff',
                      borderRadius: '50%',
                      border: '3px solid #121212',
                      zIndex: '2'
                    }} className="timeline-circle"></div>

                    <h3 style={{
                      fontSize: '1.4rem',
                      marginBottom: '12px',
                      fontWeight: '600',
                      color: '#ffffff'
                    }}>{item.day}</h3>
                    <p style={{
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.7)',
                      margin: 0
                    }}>{item.topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio" style={{
        padding: '100px 5%',
        background: '#0e0e0e'
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          textAlign: 'center',
          marginBottom: '56px',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          color: '#ffffff'
        }}>Our Student Projects</h2>
        <div style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register-form" className="registration-form" style={{
        padding: '100px 5%',
        background: 'linear-gradient(180deg, #0e0e0e, #121212)',
        maxWidth: '100%'
      }}>
        <div style={{
          maxWidth: '580px',
          margin: '0 auto',
          padding: '48px',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '36px',
            textAlign: 'center',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>Register for the Course</h2>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <input type="text" name="studentName" placeholder="Student Name" required className="input-field" style={{
              padding: '16px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none'
            }} />
            <select name="class" className="input-field" style={{
              padding: '16px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none'
            }}>
              <option value="">Select Class</option>
              <option value="6">6th Standard</option>
              <option value="7">7th Standard</option>
              <option value="8">8th Standard</option>
              <option value="9">9th Standard</option>
              <option value="10">10th Standard</option>
              <option value="11">11th Standard</option>
              <option value="12">12th Standard</option>
              <option value="12+">12+</option>
            </select>
            <input type="text" name="parentName" placeholder="Parent Name" required className="input-field" style={{
              padding: '16px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none'
            }} />
            <input type="email" name="email" placeholder="Email ID" required className="input-field" style={{
              padding: '16px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none'
            }} />
            <input type="tel" name="phone" placeholder="Phone Number" required className="input-field" style={{
              padding: '16px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none'
            }} />
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)'
            }}>
              <input type="checkbox" name="terms" required style={{
                width: '18px',
                height: '18px',
                accentColor: '#ffffff'
              }} />
              I agree to the <a href="#" onClick={handleTermsClick} style={{ color: '#ffffff', textDecoration: 'underline' }}>terms and conditions</a>
            </label>
            <button type="submit" className="register-button" style={{
              padding: '16px',
              background: '#ffffff',
              color: '#121212',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              border: 'none',
              boxShadow: '0 4px 12px rgba(255,255,255,0.1)',
              marginTop: '12px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>Register for Rs.999</button>
            <p style={{
              marginTop: '16px',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center'
            }}>You can pay the remaining Rs.2000 within the first week of the course.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer" style={{
        padding: '48px 5%',
        textAlign: 'center',
        background: '#0a0a0a',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div className="footer-content" style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}>
            <div className="footer-logo" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <img src="src/assets/logo.png" alt="Nik Games Logo" style={{
                width: '32px',
                height: 'auto'
              }} />
              <span style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}>Nik Games</span>
            </div>
            <div className="social-media" style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
            }}>
              <a href="https://whatsapp.com" className="footer-link" style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 0.2s ease'
              }}>
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contact@nikgames.com" className="footer-link" style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 0.2s ease'
              }}>
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className="copyright" style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '16px'
          }}>
            &copy; {new Date().getFullYear()} Nik Games. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;