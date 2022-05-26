// import { useState, useEffect } from "react";
// import { BASE_URL, ACCOMMODATION } from "../../constants/api";
// import AccommodationItem from "./AccommodationItem";

// export default function AccommodationList() {
//   const [accommodations, setAccommodations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(function () {
//     async function fetchData() {
//       try {
//         const response = await fetch(BASE_URL + ACCOMMODATION);

//         if (response.ok) {
//           const json = await response.json();
//           setAccommodations(json);
//         } else {
//           setError("Something happened :( ");
//         }
//       } catch (error) {
//         setError(error.toString());
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="loader loader__accommodation"></div>;
//   }

//   if (error) {
//     return <div>An error occured: {error}</div>;
//   }

//   return (
//     <>
//       <div className="accommodation">
//         {accommodations.data.map(function (data) {
//           const { id, attributes } = data;

//           return (
//             <AccommodationItem
//               key={id}
//               id={id}
//               name={attributes.name}
//               type={attributes.type}
//               description={attributes.description}
//               short_description={attributes.short_description}
//               price={attributes.price}
//               nearby_facilities={attributes.nearby_facilities}
//               breakfast={attributes.breakfast}
//               number_of_people={attributes.number_of_people}
//               website={attributes.website}
//               image={attributes.image_url}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// }
