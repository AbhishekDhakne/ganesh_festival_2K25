const spendingData = [
  { name: "Omkar Kharwade", purpose: "Dhol Padhak (advance) Payment", amount: 5000 },
  { name: "Prashant Badure", purpose: "Ganesh Murti (advance) Payment", amount: 5000 },
  { name: "Pradip Badwaik", purpose: "Decoration Material", amount: 1800 },
  { name: "Swapnil Pawar", purpose: "Murti (Remaining & transportation)", amount: 2400 },
  { name: "Madhukar Tambe", purpose: "Decoration Material", amount: 623 },
  { name: "Vijay Pawar", purpose: "Electrical material", amount: 185 },
  { name: "Abhinay Dhakne", purpose: "Electrical & Decoration Material", amount: 2194 },
  { name: "Yash Walodare", purpose: "LED strip (Interior decoration)", amount: 780 },
  { name: "Balu Dhakne", purpose: "Puja material & crackes", amount: 1500 },
  { name: "Yash Walodare", purpose: "LED warm light(4 strip)", amount: 840 },
  { name: "Abhishek Dhakne", purpose: "Daily puja material and Har/flowers", amount: 680 },
  { name: "Shrikant Borkar", purpose: "Rangoli material(1100+200)", amount: 1300 },
  { name: "Yash Walodare", purpose: "Focus Lights (20 colors)", amount: 2400 },
  { name: "Lalita Lavate", purpose: "Daily Har/Flowers (9 days)", amount: 1640 },
  { name: "Punam madam", purpose: "Baggi (advance) payment", amount: 5000 },
  { name: "Abhinay Dhakne", purpose: "Mandap material(Parda,sutuli & stiching)", amount: 7755 },
  { name: "Abhinay Dhakne", purpose: "External electrical material(LED strip & Helogen)", amount: 3660 },
  { name: "Punam madam", purpose: "Zalor fiting payment", amount: 1000 },
  { name: "Poona Graphics", purpose: "Flex payment & Vargani books", amount: 4500 },
  { name: "Abhinay Dhakne & Madhukar Tambe", purpose: "Cab(300+200)", amount: 500 },
  { name: "Ganesh Kendale", purpose: "Hardware material", amount: 130 },
  { name: "Abhishek Dhakne", purpose: "Drawing competition Xeror", amount: 120 },
  { name: "Pradip Badwaik", purpose: "A4 size paper", amount: 100 },
  { name: "Sandeep Bagal", purpose: "Mahaprasad paper plates", amount: 1400 },
  { name: "Swapnil Pawar", purpose: "Cook (advance) payment", amount: 3000 },
  { name: "Madhukar Tambe", purpose: "Shiv Vachan (Satkar)+Vachan cash payment", amount: 7366 },
  { name: "Abhinay Dhakne", purpose: "Gifts payment", amount: 3800 },
  { name: "Yash Natkar", purpose: "CO2 paper blaster(advance) payment", amount: 3500 },
  { name: "Abhishek Dhakne", purpose: "Fun Games (Balloon)", amount: 320 },
  { name: "Akash Kindre", purpose: "Vegetables (4100+325)", amount: 4425 },
  { name: "Mayur Awhale", purpose: "Grocery (Mahaprasad)", amount: 15878 },
  { name: "Yogesh Patil", purpose: "Cylinder (LPG)", amount: 1700 },
  { name: "Ganesh Mane", purpose: "Curd (dhai 8 litres) ", amount: 880 },
  { name: "Madhukar Tambe", purpose: "Mahesh Thorat+ Bhajani (Satkar)", amount: 2572 },
  { name: "Abhishek Dhakne", purpose: "Bhajani Mandal payment", amount: 5001 },
  { name: "Prashant Badure", purpose: "Cook payment (1200+5800)", amount: 7000 },
  { name: "Pradip Badwaik", purpose: "Gifts payment", amount: 5450 },

  { name: "Abhishek Dhakne", purpose: "Satyanarayan puja guruji", amount: 501 },

  { name: "Yash Natkar", purpose: "CO2 paper blaster payment", amount: 4500 },
  { name: "Prashant Badure", purpose: "Gen-set(2000+1200)", amount: 3200 },
  { name: "Dilip Borase", purpose: "Genset Petrol", amount: 1039 },
  { name: "Nilesh Kharche", purpose: "Crackers", amount: 650 },
  { name: "Abhinay Dhakne", purpose: "Gulal", amount: 1400 },
  { name: "Sharad Jagadale", purpose: "Crackers", amount: 1800 },
  { name: "Punam madam", purpose: "Baggi payment", amount: 15000 },
  { name: "Abhinay Dhakne", purpose: "Ganpati Visarjan(boat) payment & har", amount: 1150 },
  { name: "Prashant Badure", purpose: "Genset transport", amount: 400 },
  { name: "Navnath Sarode", purpose: "Dhol Padhak Payment", amount: 20000 },
  { name: "Chattrapati Enterprises", purpose: "Jar Water", amount: 1620 },
  { name: "Punam madam", purpose: "Chairs (9 days rent)", amount: 8100 },
  { name: "(Pandit & Bavkar)family", purpose: "Utensils(rent & transport)", amount: 2800 },
  { name: "Pakhare", purpose: "Chairs transport", amount: 700 },
  { name: "Abhinay Dhakne", purpose: "Water bottle(390) + tractor driver(500)", amount: 890 },
  { name: "Punam madam", purpose: "Mandap sound system", amount: 3900 },
];

function displaySpending(data) {
  const container = document.getElementById('spending-records');
  if (!container) return;
  container.innerHTML = '';

  // Header
  const header = document.createElement('div');
  header.className = 'table-header';
  header.innerHTML = `
    <div class="table-cell">Name</div>
    <div class="table-cell">Purpose</div>
    <div class="table-cell">Amount</div>
  `;
  container.appendChild(header);

  // Rows
  data.forEach(item => {
    const row = document.createElement('div');
    row.className = 'table-row';
    row.innerHTML = `
      <div class="table-cell" data-label="Name">${item.name}</div>
      <div class="table-cell" data-label="Purpose">${item.purpose}</div>
      <div class="table-cell" data-label="Amount">₹${item.amount}</div>
    `;
    container.appendChild(row);
  });
}

window.onload = () => {
  displaySpending(spendingData);

  // Calculate total
  const total = spendingData.reduce((sum, item) => {
    const amount = parseFloat(item.amount);
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);

   // Display total
  const totalDiv = document.getElementById('total-spending');
  if (totalDiv) {
    const formattedTotal = total.toLocaleString('en-IN', { minimumFractionDigits: 0 });
    totalDiv.innerHTML = `<h3>Total Spending: ₹${formattedTotal}</h3>`;
  } else {
    console.warn("Element with id 'total-spending' not found.");
  }
};
    
