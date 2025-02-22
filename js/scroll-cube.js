:root {
  --primary-color: #888; /* Base gray tone */
  --hover-color: #aaa;   /* Lighter gray */
  --background: #121212;
  --container-bg: #1e1e1e;
  --text-color: #e0e0e0;
  --accent: #bdbdbd;
}

/* Global Styles */
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at top left, #1f1f1f 20%, var(--background) 80%);
  color: var(--text-color);
  line-height: 1.6;
}

/* Custom Scrollbar (optional) */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--container-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--hover-color);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  text-decoration: underline;
  color: var(--hover-color);
}

/* Container */
#content, .container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
header {
  background: linear-gradient(135deg, #1f1f1f, #333333);
  color: var(--text-color);
  padding: 3rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
header h1 {
  font-family: "Poppins", sans-serif;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--hover-color));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
header p {
  font-size: 1.2rem;
  color: var(--accent);
}

/* Navigation */
nav {
  background: var(--container-bg);
  padding: 0.75rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}
nav a {
  color: var(--text-color);
  margin: 0 1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
nav a:hover {
  color: var(--hover-color);
}

/* Sections */
section {
  margin-bottom: 3rem;
}
h2 {
  font-family: "Poppins", sans-serif;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  transition: color 0.3s ease, border-color 0.3s ease;
}
h2:hover {
  color: var(--hover-color);
  border-color: var(--hover-color);
}

/* --- (Other sections such as Review, Timeline, Videos, Published Games, etc. remain unchanged) --- */

/* Cube Styles (Scroll Animated Cubes) */
.cube-container {
  position: fixed;
  width: 150px;
  height: 150px;
  perspective: 800px;
  opacity: 0.7;
  z-index: 1;
}

/* Left Cube: vertically centered with 20px padding from left */
.left-cube {
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}

/* Right Cube: vertically centered with 20px padding from right */
.right-cube {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out;
}

/* Cube faces – no text, just colored panels */
.cube .face {
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(128, 128, 128, 0.8); /* default gray (will be updated by JS) */
  border: 2px solid var(--primary-color);
}

.cube .front  { transform: translateZ(75px); }
.cube .back   { transform: rotateY(180deg) translateZ(75px); }
.cube .right  { transform: rotateY(90deg) translateZ(75px); }
.cube .left   { transform: rotateY(-90deg) translateZ(75px); }
.cube .top    { transform: rotateX(90deg) translateZ(75px); }
.cube .bottom { transform: rotateX(-90deg) translateZ(75px); }

/* Media Queries */
@media (max-width: 768px) {
  .timeline-wrapper {
    flex-direction: column;
  }
  .vertical-timeline {
    flex: 1 0 auto;
  }
  .video-card {
    flex: 1 1 100%;
  }
}
