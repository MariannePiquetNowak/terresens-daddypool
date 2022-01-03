import './App.scss';
import Layout from "./Layouts/Layouts";
import Separator from "./Components/Separator";


function App() {
  return (
   <div className="App container-lg d-flex flex-column justify-content-center">
     <Layout>
      <Separator>Le concept Daddy Pool</Separator>
     </Layout>
   </div>
  );
}

export default App;
