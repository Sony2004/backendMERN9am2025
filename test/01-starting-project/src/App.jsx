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

  const [selectedTopic, setSelectedTopic] = useState('components');

  let tabContent = "Please select a tab to view content";

  function handleSelect(selectedButton) {

    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description} </p>
            <pre>
              <code>

              </code>
            </pre>

           
       
          </div>


        </section>
      </main>
    </div>
  );
}

export default App;