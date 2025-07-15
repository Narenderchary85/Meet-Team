import React from 'react';
import './StickyScrollPage.css'; // Import the CSS file

function StickyScrollPage() {
  // The logic is now 100% handled by CSS, so this component is just for structure.
  
  return (
    <>
      {/* Layer 1: Always fixed in the background */}
      <div className="hero-section" id="heroSection">
        <div className="hero-content">
          <h1>Create Your Perfect Website</h1>
          <p>Scroll down to begin.</p>
        </div>
      </div>

      {/* This wrapper contains everything that scrolls */}
      <main className="scroll-wrapper">
      
        {/* Layer 2: The panel that will stick to the top */}
        <section className="sliding-panel" id="slidingPanel">
          <div className="panel-wrapper">
            <div className="panel-header">
              <h2>YOUR SITE IS READY FOR YOU!</h2>
              <p>Let's bring your vision to life</p>
            </div>
            {/* You can add more content here if you want the panel to be scrollable itself */}
          </div>
        </section>

        {/* Layer 3: The content that scrolls over the sticky panel */}
        <section className="content-section">
          <div className="content-wrapper">
            <h2>Why Choose Our Platform?</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>AI-Powered Design</h3>
                <p>Get personalized design recommendations tailored to your content and style preferences.</p>
              </div>
              <div className="feature-card">
                <h3>900+ Templates</h3>
                <p>Beautiful, professionally designed templates for every industry and use case.</p>
              </div>
              <div className="feature-card">
                <h3>Mobile Optimized</h3>
                <p>Your site will look perfect on all devices, from desktop to smartphone.</p>
              </div>
            </div>
          </div>
          {/* Add more content here to make this section taller and more scrollable */}
          <div style={{ height: '50vh' }}></div> 
        </section>

      </main>
    </>
  );
}

export default StickyScrollPage;