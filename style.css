/* Reset & base */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f8f8f8;
  color: #1a1a1a;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Header */
header {
  background-color: #111;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header .logo {
  display: flex;
  align-items: center;
  font-family: 'Press Start 2P', cursive; /* Retro font for logo */
  letter-spacing: 2px;
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
}

header .logo img {
  height: 50px;
  margin-right: 12px;
  border-radius: 6px;
}

/* Hero Section */
.hero {
  background: url('https://images.unsplash.com/photo-1606813904811-4e05cfc9d7b7') center/cover no-repeat;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.6);
  text-align: center;
  padding: 0 1rem;
  animation: fadeInDown 1s ease forwards;
}

.hero h2 {
  font-size: 3rem;
  max-width: 90%;
}

/* Animations */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px);}
  to {opacity: 1; transform: translateY(0);}
}

/* Navigation */
nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: white;
  font-weight: 600;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    background-color: #111;
    position: absolute;
    top: 65px;
    right: 2rem;
    border-radius: 6px;
    padding: 1rem;
    width: 150px;
  }

  nav.active {
    display: flex;
  }

  .hero h2 {
    font-size: 2.2rem;
  }
}
