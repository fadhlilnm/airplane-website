import React, { useState } from 'react';

// Representasi graf dengan simpul-simpul, bobot distance, dan harga lintasan antar simpul
const Graph = {
  Jakarta: { Denpasar: { distance: 1200, price: 1000000 }, Lombok: { distance: 1400, price: 1200000 }, Makassar: { distance: 1700, price: 1100000 }, Balikpapan: { distance: 2000, price: 900000 }, Surabaya: { distance: 8000, price: 11000000 } },
  Denpasar: { Surabaya: { distance: 400, price: 600000 } },
  Lombok: { Surabaya: { distance: 600, price: 700000 } },
  Makassar: { Surabaya: { distance: 800, price: 850000 } },
  Balikpapan: { Surabaya: { distance: 1300, price: 750000 } },
  Surabaya: { Jakarta: { distance: 1000, price: 800000 } },
};

const BranchAndBound = () => {
  // State untuk menyimpan simpul awal, simpul akhir, jalur terpendek, dan biaya jalur terpendek
  const [start, setStart] = useState('Jakarta');
  const [end, setEnd] = useState('Surabaya');
  const [path, setPath] = useState([]);
  const [cost, setCost] = useState(0);
  const [price, setPrice] = useState(0);

  const [runningTime, setRunningTime] = useState(0);

  // Fungsi untuk mencari jalur termurah menggunakan algoritma Branch and Bound
  const findCheapestPath = () => {

    const startTime = performance.now(); // Waktu mulai pencarian jalur termurah

    let minCost = Infinity;// Menyimpan jarak terpendek dari start ke setiap simpul
    let minPrice = Infinity;// Menyimpan simpul sebelumnya dalam jalur terpendek
    let optimalPath = [];// Menyimpan simpul yang sudah dikunjungi

    const visited = [];//menambahkan simpul awal ke dalam array tersebut.
    visited.push(start);

    const bnb = (current, currentCost, currentPrice, currentPath) => {
      if (current === end) {
        if (currentCost < minCost || (currentCost === minCost && currentPrice < minPrice)) {
            //Jika biaya jalur saat ini (currentCost) lebih rendah dari minCost, atau jika biaya jalur saat ini sama dengan minCost tetapi harga jalur saat ini (currentPrice) lebih rendah dari minPrice, maka kita telah menemukan jalur yang lebih baik. Karena kita mencari jalur termurah, kita memperbarui minCost dan minPrice dengan nilai jalur saat ini, dan optimalPath dengan jalur saat ini.
            minCost = currentCost;
            minPrice = currentPrice;
            optimalPath = [...currentPath];
        }
        return;
      }

      for (let neighbor in Graph[current]) {
        if (!visited.includes(neighbor)) {//memeriksa apakah tetangga tersebut belum dikunjungi sebelumnya
          visited.push(neighbor);//menambahkannya ke dalam array visited
          bnb(
            neighbor,
            currentCost + Graph[current][neighbor].distance,
            currentPrice + Graph[current][neighbor].price,
            [...currentPath, neighbor]
          );
          visited.pop();
        }
      }
    };

    bnb(start, 0, 0, [start]);

    // Mengupdate state dengan hasil pencarian jalur termurah
    setPath(optimalPath);
    setCost(minCost);
    setPrice(minPrice);

    const endTime = performance.now(); // Waktu selesai pencarian jalur termurah
    const runningTime = endTime - startTime; // Menghitung selisih waktu

    setRunningTime(runningTime);
  };

  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <h1>Algoritma Branch and Bound</h1>
        <label htmlFor="startNode">Location:</label>
        <input type="text" id="startNode" value={start} onChange={(e) => setStart(e.target.value)} />
        <label htmlFor="endNode">Destination:</label>
        <input type="text" id="endNode" value={end} onChange={(e) => setEnd(e.target.value)} />
        <button onClick={findCheapestPath} className="button button-bg btnBlock">
          Search
        </button>
        <div>
          <h2>Hasil:</h2>
          <p>Jalur Termurah: {path.join(' -> ')}</p>
          <p>Jarak: {cost}</p>
          <p>Harga: {price}</p>
          <p>Running Time: {runningTime.toFixed(2)} ms</p>
        </div>
      </div>
    </div>
  );
};

export default BranchAndBound;
