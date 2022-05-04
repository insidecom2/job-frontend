
import React, { useEffect, useState } from 'react';
const FetchName = ({data}) => {

    const [dataSet , setDataset] = useState();

    useEffect(() => {
        console.log(data)
        setDataset(data)
    }, [data])
    
    return (
        <div>
            {/* <p>name : {dataSet.name.common}</p> */}
        </div>
    );
    
}

export async function getServerSideProps(name) {
    
    const res = await fetch(`https://restcountries.com/v3.1/name/${name.query.name}`)
    const data = await res.json()

    return { props: { data } }
  }
export default FetchName;