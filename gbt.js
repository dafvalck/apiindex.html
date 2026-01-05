
const apiUrl = 'https://fakestoreapi.com/products/category/men\'s%20clothing';
async function fetchBaju() {
    try {
        const response = await fetch(apiUrl);
        const baju = await response.json();
        displayBaju(baju);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('baju-container').innerHTML = '<p>Gagal memuat data baju.</p>';
    }
}

function displayBaju(baju) {
    const container = document.getElementById('baju-container');
    container.innerHTML = ''; 

    baju.forEach(item => {
        const bajuDiv = document.createElement('div');
        bajuDiv.className = 'baju-item';
        bajuDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>Harga: $${item.price}</p>
            <p>${item.description.substring(0, 100)}...</p>
        `;
        container.appendChild(bajuDiv);
    });
}
fetchBaju();