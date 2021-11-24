
import './App.css';
import {useEffect, useState} from 'react'
import ProviderDetail from './components/providerDetail'; 
import ProviderList from './components/providerList';
import SingleProvider from './components/providerEditForm';





function App() {

  const [selectedProvider,setSelectedProvider] = useState("619982387f896fab82246784")
  
  return(
    <div className="App">

     
       <ProviderList setSelectedProvider ={setSelectedProvider}/> 
       <ProviderDetail providerId={selectedProvider}/> 
       <SingleProvider providerId={selectedProvider} />

    </div>
  );
}

export default App;
