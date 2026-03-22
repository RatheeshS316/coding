// import React from 'react'
// import {useQuery} from '@tanstack/react-query'

// const test = ( ) => {

//   const { isLoading , data , error} = useQuery(
//     ["githubData"],
//     apiCall
//   );

//   function apiCall(){
//     return fetch("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       });
//   }

//   if(isLoading){
//     return <h1>Loading...</h1>
//   }
//   if(error){
//     return <h1>Error 404 found {error}</h1>
//   }
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <h1>{data.subscribers_count}</h1>
//       <h1>{data.forks}</h1>
//     </div>
//   )
// }

// export default test



import React from 'react'
import {useQuery} from '@tanstack/react-query'

const Test = () => {

    const {isLoading , data , error} = useQuery(["githubdata"] , apiCall);
    function apiCall(){
        return fetch("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone").then((res)=>res.json());
    }

    if(isLoading){
        return <h1>loading......</h1>
    }

    if(error){
        return <h1>Error 404 Occured {error.message}</h1>
    }
console.log(data);
  return (
    <div>
     <h1>Repo name: {data.name}</h1>
     <h1>Repo forks: {data.forks}</h1>
     <h1>Repo stars: {data.stargazers_count}</h1>
     <h1>Repo subscribers: {data.subscribers_count}</h1>
     
    </div>
  )
}

export default Test;









