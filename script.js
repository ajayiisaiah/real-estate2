// Interactive Functionality

// Modal Handling
function openModal() {
    document.getElementById('dossierModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('dossierModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('dossierModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Unit Selector Logic
const units = {
    chalet: {
        title: "Chalet Residence - Type A",
        desc: "Spacious multi-level timber chalet with panoramic south-facing balcony, integrated solar roof, and private garden area.",
        area: "165 m²",
        rooms: "4.5",
        price: "CHF 1,450,000"
    },
    penthouse: {
        title: "Top-Floor Penthouse - Type B",
        desc: "Exclusive top-floor layout featuring cathedral timber ceilings, expansive solar skylights, and premium Alpine views.",
        area: "210 m²",
        rooms: "5.5",
        price: "CHF 2,150,000"
    }
};

function switchUnit(type) {
    const data = units[type];
    document.getElementById('unit-title').innerText = data.title;
    document.getElementById('unit-desc').innerText = data.desc;
    document.getElementById('unit-area').innerText = data.area;
    document.getElementById('unit-rooms').innerText = data.rooms;
    document.getElementById('unit-price').innerText = data.price;

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Swiss Mortgage Calculator
function updateCalc() {
    const price = parseInt(document.getElementById('priceRange').value);
    const equityPct = parseInt(document.getElementById('equityRange').value);

    document.getElementById('priceVal').innerText = price.toLocaleString();
    
    const equityAmount = (price * equityPct) / 100;
    document.getElementById('equityVal').innerText = equityAmount.toLocaleString();

    const loanAmount = price - equityAmount;
    
    // 2.25% interest rate + 1% maintenance/year divided into monthly cost
    const annualInterest = loanAmount * 0.0225;
    const annualMaintenance = price * 0.01;
    const monthlyTotal = Math.round((annualInterest + annualMaintenance) / 12);

    document.getElementById('monthlyResult').innerText = `CHF ${monthlyTotal.toLocaleString()} / month`;
}

// Contact Form Handler
function handleFormSubmit(e) {
    e.preventDefault();
    alert('Thank you! The official PDF Sales Dossier for Visualisierung Süden has been sent to your email.');
    closeModal();
}
