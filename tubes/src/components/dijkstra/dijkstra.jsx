import React, { useState } from 'react';

// Menentukan graf yang akan digunakan
const Graph = {
  Jakarta: { Denpasar: { distance: 1200, price: 1000000 }, Lombok: { distance: 1400, price: 1200000 }, Makassar: { distance: 1700, price: 1100000 }, Balikpapan: { distance: 2000, price: 900000 }, Surabaya: { distance: 800, price: 1100000 } },
  Denpasar: { Surabaya: { distance: 400, price: 600000 } },
  Lombok: { Surabaya: { distance: 600, price: 700000 } },
  Makassar: { Surabaya: { distance: 800, price: 850000 } },
  Balikpapan: { Surabaya: { distance: 1300, price: 750000 } },
  Surabaya: { Jakarta: { distance: 1000, price: 800000 } },
};

// Membuat state menggunakan React Hooks
const Dijkstra = () => {
  const [start, setStart] = useState('Jakarta');
  const [end, setEnd] = useState('Surabaya');
  const [path, setPath] = useState([]);
  const [cost, setCost] = useState(0);
  const [price, setPrice] = useState(0);

  const [runningTime, setRunningTime] = useState(0);

  // Fungsi untuk mencari jalur termurah menggunakan algoritma Dijkstra
  const findCheapestPath = () => {
    const startTime = performance.now();

    const distances = {}; // Menyimpan jarak terpendek dari start ke setiap simpul
    const previousNodes = {}; // Menyimpan simpul sebelumnya dalam jalur terpendek
    const visited = []; // Menyimpan simpul yang sudah dikunjungi

    for (let node in Graph) {
      distances[node] = Infinity; // Inisialisasi jarak dari start ke setiap simpul dengan nilai tak terhingga (Infinity)
      previousNodes[node] = null; // dan simpul sebelumnya dengan nilai null
    }

    distances[start] = 0; // Jarak dari start ke start adalah 0

    // Looping untuk mencari jalur terpendek
    while (visited.length !== Object.keys(Graph).length) {
      let currentNode = null;
      let minDistance = Infinity;

      // Mencari simpul dengan cost terendah yang belum dikunjungi
      for (let node in Graph) {
        if (!visited.includes(node) && distances[node] < minDistance) {
          currentNode = node;
          minDistance = distances[node];
        }
      }

      visited.push(currentNode); // Tandai simpul sebagai sudah dikunjungi

      // Update jarak terpendek ke tetangga-tetangga dari simpul saat ini
      for (let neighbor in Graph[currentNode]) {
        let distance = distances[currentNode] + Graph[currentNode][neighbor].distance;//Jarak baru dihitung dengan menambahkan jarak dari simpul awal ke simpul saat ini dengan jarak dari simpul saat ini ke tetangga saat ini
        if (distance < distances[neighbor]) {// Jika jarak baru lebih kecil dari jarak sebelumnya, berarti kita telah menemukan jalur yang lebih pendek ke tetangga tersebut
          distances[neighbor] = distance;//memperbarui dengan jarak baru yang lebih kecil
          previousNodes[neighbor] = currentNode;
        }
      }
    }

    // Rekonstruksi jalur terpendek dari end ke start
    let optimalPath = [];//array kosong yang akan digunakan untuk menyimpan jalur terpendek
    let currentNode = end;

    while (currentNode !== null) {
      optimalPath.unshift(currentNode);
      currentNode = previousNodes[currentNode];
    }

    const endTime = performance.now();
    const elapsed = endTime - startTime;

    // Mengupdate state dengan hasil pencarian
    setPath(optimalPath);
    setCost(distances[end]);
    setPrice(Graph[start][end].price);
    setRunningTime(elapsed);
  };

  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <h1>Algoritma Dijkstra</h1>
        <label htmlFor='startNode'>Location:</label>
        <input type='text' id='startNode' value={start} onChange={(e) => setStart(e.target.value)} />
        <label htmlFor='endNode'>Destination:</label>
        <input type='text' id='endNode' value={end} onChange={(e) => setEnd(e.target.value)} />
        <button onClick={findCheapestPath} className='button button-bg btnBlock'>
          Search
        </button>

        <div>
          <h2>Hasil:</h2>
          <p>Jalur Termurah: {path.join(' -> ')}</p>
          <p>Jarak: {cost}</p>
          <p>Harga: {price}</p>
          <p>Running Time: {runningTime} ms</p>
        </div>
      </div>
    </div>
  );
};

export default Dijkstra;
