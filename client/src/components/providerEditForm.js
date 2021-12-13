import {useEffect, useState} from 'react'
import './ProviderDetail.css'


const SingleProvider = ({providerId}) => {
    
        const [provider,setProvider] = useState({ contactInfo: []})
        const [contactInfo,setContactInfo] = useState('')
        const [accessLocation,setAccessLocation] = useState('')
        const [availible,setAvailible] = useState('')
       
    function onInputUpdate(event, setter){
        let newValue = event.target.value
        setter(newValue)
        console.log(newValue)
    }

    function postData(){
        let newData ={
          contactInfo,accessLocation, availible
        }
        console.log(newData)
        fetch('/api/provider/'+providerId, {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
                    })
    }
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
        <h2>{provider.name}</h2>
        <div className ="detail-fields">
            <div className ="field-title">Contact info
            </div>
            <div>
            <ul className="field-value">
              {
                provider.contactInfo.map((info,index)=>(
                  <li key={index}>{info}</li>
                ))
              }
               <input  value = {contactInfo} onChange = {(event) => onInputUpdate(event,setContactInfo)}/>
            </ul>
            </div>
            <div className ="field-title">Access Location</div>
            <div className="field-value">
                {/* <label>{provider.accessLocation}</label> */}
                <input value = {accessLocation} onChange={(event) => onInputUpdate(event,setAccessLocation)}/>
           </div>
            <div className ="field-title">Availible?</div>
            <div className ="field-value">
                <label></label>
                <input value = {availible} onChange={(event) => onInputUpdate(event,setAvailible)}/>
            </div>
            <button margin ='auto' className ='field-value' onClick={postData}>save</button>
          </div> 
      </div>
    )
    }



export default SingleProvider;

