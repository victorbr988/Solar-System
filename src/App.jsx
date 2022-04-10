import './App.css'
import dataPlanets from './data/Planets'
import missions from './data/Missions';
import Header from './Components/Header'
import Title from './Components/Title'
import Planets from './Components/Planets'
import MissionsCard from './Components/MissionsCard';


function PlanetsCard() {
  return dataPlanets.map(({ name, image, id }) => <Planets 
    image={image}
    name={name}
    id={id}
    classe={name}        
  />)
}

function MissionsCards() {
  return missions.map(({ id, mission, year, country, locale}) => {
    return <MissionsCard 
      id={id}
      mission={mission}
      year={year}
      country={country}
      locale={locale}
    />
  })
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <main>
        <section className='title'>
          <Title title="Planetas"/>
        </section>

        <section className='planets'>
          {PlanetsCard() }
        </section>

        <section className='title'>
          <Title title="Missões"/>
        </section>

        <section className='missions'>
          {MissionsCards()}
        </section>
      </main>
    </div>
  )
}

export default App
