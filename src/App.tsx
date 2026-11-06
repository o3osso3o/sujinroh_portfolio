import Header from './components/Header/Header'
import HeroAbout from './components/HeroAbout/HeroAbout'
import './App.css'

export default function App() {
  return (
    <div className="portfolio_page">
      <Header />
      <main className="portfolio_main">
        <HeroAbout />
      </main>
    </div>
  )
}
