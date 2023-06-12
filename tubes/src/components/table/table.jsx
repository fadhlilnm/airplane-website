import React from "react";

function FlightTable() {
  return(
    <div className="search container section">
      <div className="sectionContainer grid">
      <div>
      <h1>Jadwal Penerbangan</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Kota Awal</th>
            <th>Transit</th>
            <th>Kota Tujuan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody c>
            <tr>
                <td>Jakarta</td>
                <td>-</td>
                <td>Surabaya</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>Jakarta</td>
                <td>Denpasar</td>
                <td>Surabaya</td>
                <td>1050</td>
            </tr>
            <tr>
                <td>Jakarta</td>
                <td>Lombok</td>
                <td>Surabaya</td>
                <td>1200</td>
            </tr>
            <tr>
                <td>Jakarta</td>
                <td>Makassar</td>
                <td>Surabaya</td>
                <td>1300</td>
            </tr>
            <tr>
                <td>Jakarta</td>
                <td>Balikpapan</td>
                <td>Surabaya</td>
                <td>1350</td>
            </tr>
          
        </tbody>
      </table>
    </div>
      </div>
    </div>
  )
}
export default FlightTable