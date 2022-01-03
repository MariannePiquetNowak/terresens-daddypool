import './App.scss';
// Layouts
import Layout from "./Layouts/Layouts";
// Components
import Separator from "./Components/Separator";
// Containers
import Concept from "./Containers/Concept";
import Residence from "./Containers/Residence";
import Terresens from "./Containers/Terresens";


function App() {
  return (
   <div className="App container-lg d-flex flex-column justify-content-center">
     <Layout>
      <Separator id="concept">Le concept Daddy Pool</Separator>
      <Concept />
      <Separator id="residence">Les résidences Daddy Pool</Separator>
      <Residence />
      <Separator id="group">A propos du groupe</Separator>
      <Terresens />
     </Layout>
   </div>
  );
}

export default App;
