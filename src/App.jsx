import { useEffect } from 'react'
import { Grid } from './components/Grid/Grid'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import './App.css'

function App() {

  useEffect(() => {
    function reveal() {
      const revealEls = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < revealEls.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealEls[i].getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
          revealEls[i].classList.add("active");
        } else {
          revealEls[i].classList.remove("active");
        }
      }
    }

    // Run once on mount
    reveal();

    // Add scroll listener
    window.addEventListener("scroll", reveal);

    // Cleanup function to remove listener when component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty dependency array means this runs once on mount


  return (
      <Grid>
        <Header />
        <Main />
      </Grid>
  )
}

export default App
