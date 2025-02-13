import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map({ location }) {
  useEffect(() => {
    if (location) {
      const loader = new Loader({
        apiKey: "AIzaSyAFPFQQftjVErSTCinZel_KFChMKahLFbQ",
        version: "weekly",
      });

      loader.load().then(() => {
        const google = window.google;
        const mapInstance = new google.maps.Map(document.getElementById("map"), {
          center: location,
          zoom: 14,
        });

        new google.maps.Marker({
          position: location,
          map: mapInstance,
          title: "Your Location",
        });
      });
    }
  }, [location]);

  return <div id="map" style={{ width: "80vw", height: "60vh" }}></div>;
  // useEffect(() => {
  //   if (map) {
  //     const service = new google.maps.places.PlacesService(map);
  //     service.nearbySearch(
  //       {
  //         location,
  //         radius: 5000,
  //         type: "hospital",
  //       },
  //       (results, status) => {
  //         if (status === google.maps.places.PlacesServiceStatus.OK) {
  //           results.forEach((place) => {
  //             new google.maps.Marker({
  //               position: place.geometry.location,
  //               map: map,
  //               title: place.name,
  //             });
  //           });
  //         }
  //       }
  //     );
  //   }
  // }, [map]);
  
}