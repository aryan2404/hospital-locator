// import React, { useEffect, useState } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// export default function Map({ location }) {
//   useEffect(() => {
//     if (location) {
//       const loader = new Loader({
//         apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
//         version: "weekly",
//       });

//       loader.load().then(() => {
//         const google = window.google;
//         const mapInstance = new google.maps.Map(document.getElementById("map"), {
//           center: location,
//           zoom: 14,
//         });

//         new google.maps.Marker({
//           position: location,
//           map: mapInstance,
//           title: "Your Location",
//         });
//       });
//     }
//   }, [location]);

//   return <div id="map" style={{ width: "80vw", height: "60vh" }}></div>;
// }