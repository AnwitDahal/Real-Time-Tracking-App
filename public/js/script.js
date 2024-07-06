const socket = io();
console.log(navigator);

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-position", { latitude, longitude });
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

const map = L.map("map").setView([0,0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "OpenStreetMap",
}).addTo(map);

const markers = {};

socket.on("recieve-position", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude],);
  if(markers[id]){
    markers[id].setLatLng({latitude,longitude})
  }
  else{
    markers[id]=L.marker([latitude,longitude]).addTo(map)
  }
});

socket.on('disconnected-user',(data)=>{
    if(markers[id]){
        map.removeLayer(markers[id])
        delete markers[id]
    }
})