
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import DisplayCounter from './components/DispalyCounter';
import Container from './components/Container';
import Controls from './components/Controls';

function App() {
  

  return (
    <>
      <div>
        <Container>
          <div className="px-4 py-5 my-5 text-center">
            <Header />
            <div className="col-lg-6 mx-auto">
              <DisplayCounter />
              <Controls/>
              
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App
