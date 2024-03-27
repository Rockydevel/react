import logo from './logo.svg';
import './App.css';
import CustomButton from './component1';
import CustomImage from './component2';
import CustomTable from './component3';
import CustomForm from './component4';
import CustomList from './component5';

function App() {
  return (
    <>

    <h1>Function components</h1><br></br>

    <CustomButton/>
    <br></br>
    <CustomForm/>
    <br></br>
    <CustomImage/>
    <br></br>
    <CustomList/>
    <br></br>
    <CustomTable/>
    </>
  );
}

export default App;
