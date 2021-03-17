import { useEffect } from "react";
import { createInstance, PromiseFn } from "react-async";
import { Color } from "../Redux/actions/handler"
import { colorList } from "../Redux/actions/handler"

// export function fetchColors () {
//     PromiseFn: () => {
//      fetch('http://localhost:8080/colors')
//       .then(res => (res.ok ? res : Promise.reject(res)))
//       .then(res => res.json())
//        .then(res => res as colorList)
//        .then(res => res.colors)
//       .then(res => console.log(res))
//   }  
// }

export function POSTaddColor(name, hex, r, g, b) {
  // Simple PUT request with a JSON body using fetch
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": name, "hexadecimal": hex, "r": r, "g": g, "b": b })
  };
  fetch('http://tylegroup.com:8080/colors', requestOptions)
    .then(response => response.json())
    .then(res => console.log(res))
}
      

// //  request color data from the API
// export const loadColors = () =>
//   fetch("http://localhost:8080/colors")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json())
//     .then(res => res as colorList)
//     .then(res => res.colors)


export const getFromID = (id) =>
  fetch("http://tylegroup.com:8080/colors/" + id)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(res => res as Color)




