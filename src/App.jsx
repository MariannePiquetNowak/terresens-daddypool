import './App.scss';
// Layouts
import Layout from "./Layouts/Layouts";
// Components
import Separator from "./Components/Separator";
// Containers
import Concept from "./Containers/Concept";


function App() {
  return (
   <div className="App container-lg d-flex flex-column justify-content-center">
     <Layout>
      <Separator>Le concept Daddy Pool</Separator>
      <Concept />
     </Layout>
   </div>
  );
}

export default App;
