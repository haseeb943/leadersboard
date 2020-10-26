import logo from './logo.svg';
import './App.css';
import Student from './component/Student';
function App() {



  
  return (
    <>
    <h1>LeadersBoard</h1>
      <Student name ="Shahrukh" uname="Bahria University" score={330} />
      <Student name ="Salman" uname="Bahria University" score={340} />
      <Student name ="Amir" uname="Bahria University" score={355} />
    </>
  );
}

export default App;
