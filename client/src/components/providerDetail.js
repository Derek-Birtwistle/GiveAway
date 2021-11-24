
import {useEffect, useState} from 'react'
import './ProviderDetail.css'


const ProviderDetail = ({providerId}) => {
 
  
    const [provider,setProvider] = useState({ contactInfo: []})

  useEffect(()=>{
    const fetchProvider = async()=>{
      let fetchResult = await fetch("/api/provider/"+providerId)
      let fetchedProvider = await fetchResult.json()
      setProvider(fetchedProvider)
    }
    fetchProvider()
  },[providerId])
  return(
    <div>
      <h2>Provider Detail</h2>
      <div className ="detail-fields">
        <div className ="field-title">Name</div>
        <div className="field-value">{provider.name}</div>
        <div className ="field-title">Address</div>
        <div className="field-value">{provider.address}</div>
        <div className ="field-title">Contact Info</div>
        <ul className="field-value">
          {
            provider.contactInfo.map((info,index)=>(
              <li key={index}>{info}</li>
            ))
          }
        </ul>
        <div className ="field-title">Acess Location</div>
        <div className="field-value">{provider.accessLocation}</div>
        <div className="field-title">Availible?</div>
        <div className="field-value">{provider.availible}</div>
      </div>
    </div>
  )
}

export default ProviderDetail;

