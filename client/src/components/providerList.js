
import {useEffect, useState} from 'react'

const ProviderList = ({setSelectedProvider}) => {

    const ProviderRow = ({name,address,accessLocation,onProviderSelected}) => (
      <tr onClick={()=>onProviderSelected()}>
      <th>{name}</th>
      <th>{address}</th>
      <th>{accessLocation}</th>
      <th></th>
      </tr>
      )  
    
    const [providers,setProviders]  = useState([])
    
    useEffect(()=>{
      async function fetchData(){
        console.log('fetching provider data')
        let fetchResult =await fetch('/api/provider')
        let providerList = await fetchResult.json()
         setProviders(providerList)
      }
       fetchData()
    },[])
    
      return(
        <div className="App">
          <h1>Providers</h1>
            <table style={{margin:"auto"}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Access location</th>
                  <th>Availible?</th>
                </tr>
              </thead>
              <tbody>
                {
                  providers.map((data,index)=> {
                       function selectProvider(){
                      console.log('selectedSuperHero called on',data)
                      setSelectedProvider(data._id)
                       }
                      
                 return <ProviderRow 
                  key={index} 
                  name={data.name} 
                  onProviderSelected={selectProvider} 
                  address={data.address} 
                  accessLocation={data.accessLocation} 
                  />
                 
                     
                  })
                }
              </tbody>
            </table>
              
        </div>
      )
    
    }


    export default ProviderList