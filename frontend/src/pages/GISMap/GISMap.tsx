import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function GISMap() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        GIS Smart Grid Map
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-4">

        <MapContainer
          center={[26.8467, 80.9462]}
          zoom={8}
          style={{ height: "600px", width: "100%" }}
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[26.8467, 80.9462]}>
            <Popup>
              Lucknow <br />
              Low Risk Area 🟢
            </Popup>
          </Marker>

          <Marker position={[27.5706, 80.6826]}>
            <Popup>
              Sitapur <br />
              Medium Risk Area 🟡
            </Popup>
          </Marker>

          <Marker position={[28.7893, 79.0250]}>
            <Popup>
              Rampur <br />
              Theft Hotspot 🔴
            </Popup>
          </Marker>

        </MapContainer>

      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-red-100 p-4 rounded-xl">
          <h2 className="font-bold text-red-700">
            High Risk
          </h2>

          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <h2 className="font-bold text-yellow-700">
            Medium Risk
          </h2>

          <p className="text-3xl font-bold mt-2">
            24
          </p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl">
          <h2 className="font-bold text-green-700">
            Low Risk
          </h2>

          <p className="text-3xl font-bold mt-2">
            92
          </p>
        </div>

      </div>

    </div>
  );
}