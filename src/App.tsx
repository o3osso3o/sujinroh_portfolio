import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import './App.css'

export default function App() {
  return (
    <div className="portfolio_page">
      <Header />
      <main className="portfolio_main">
        <div className="hero_viewport"><Hero /></div>
        <About />
      </main>
    </div>
  )
}
