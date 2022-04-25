
import React from "react";
export const AddHouse = () => {
    const [FormData,setFormData]=React.useState([])
    
    const handleChange=(e)=> {
       let inputName=e.target.name
      if(e.target.type==="checkbox"){
        setFormData({
            ...FormData,
            [inputName]:e.target.checked
        }) 
       }
      
       else{
        setFormData({
            ...FormData,
            [inputName]:e.target.value
        })
       }
    }
    const post=async ()=> {
        try{
        let res = await fetch(`http://localhost:8080/houses`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(FormData)
        })
       
        
        }
        catch(e){
            console.log(e)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       post()
      
       
    }
    return (
      <div className="addHouseContainer">
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input type="text" className="name" name="name" required onChange={handleChange} />
          <br />
          <label>ownerName</label>
          <input  type="text" className="ownerName" name="owner_name" required onChange={handleChange}/>
          <br />
          <label>address</label>
          <input  type="text" className="address" required name="address" onChange={handleChange}/>
          <br />
          <label>areaCode</label>
          <input  type="text" className="areaCode" name="area_code" required onChange={handleChange}/>
          <br />
          <label>rent</label>
          <input  type="text" className="rent"  name="rent" required onChange={handleChange}/>
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input  type="checkbox" name="bachelor" className="bachelor" onChange={handleChange}/>
          <br />
          <label>married</label>
          <input  type="checkbox"  name="married" className="married" onChange={handleChange}/>
          <br />
          <label>image</label>
          <input  type="text" className="image" name="file" required onChange={handleChange}/>
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };
  