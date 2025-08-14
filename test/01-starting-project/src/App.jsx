<<<<<<< Updated upstream
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescription = ['Fundamental', "core", "concepts", "crucial"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function CoreConcept(props) {
  return (

    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header() {
  
  const des = reactDescription[getRandomInt(reactDescription.length)];

=======
const readdeescription=["Fundamental","core","react","citeria"]
function getRandom(max){
  return Math.floor(Math.random(3) *max)
  

function Coreconcept(){
  return(
  <li>
    <p>The description area/</p>
  </li>
  )
}
}


function Header() {
  const des=readdeescription[getRandom(readdeescription.length)];
>>>>>>> Stashed changes
  return (
    <header>
      <img src={reactImg} alt="" />
      <h1>React Essentials </h1>

      <p>
        {des} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>



  )
}



function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
<<<<<<< Updated upstream

      <section id='core-concepts'>
        <h2>Core Concepts </h2>
        <ul>
          <CoreConcept
            image={reactImg}
            title="component"
            description="Build encapsulated components that manage their own state"
          />

          <CoreConcept
            image={componentsImg}   
            title="Declarative"
            description="Describe what your UI should look like"
          />
          <CoreConcept
            image={componentsImg}
            title="Learn Once, Write Anywhere"
            description="You can build new features in React without rewriting existing code"
          />

        </ul>
      </section>


=======
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept/>
        <CoreConcept/>
        <CoreConcept/>
        </ul>
        
      </section>
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;