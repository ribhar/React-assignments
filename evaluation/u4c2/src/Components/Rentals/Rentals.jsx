import React from "react";
import "./Rentals.css";

export const Rentals = () => {
    const [dataList,setDataList]=React.useState([])
    let get=async ()=> {
     let res = await fetch(`http://localhost:8080/houses`)
     let data = await res.json()
    //  console.log(data)
     setDataList(data)
    }
    React.useEffect(()=>{
        get()
    },[])

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((house, index) => {
            
            return (

              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                 Married
                </td>
                <td className="houseImage">
                  <img src={`https://th.bing.com/th/id/OIP.lOstZJeEqZC_gcHpvWcxJgHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7`} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
