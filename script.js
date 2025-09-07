const allData = [
  { name: "Madhukar Tambe", amount: 1201, flat: "A", date: "17-08-2025" },
  { name: "Satish Bhitade", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Archana Borase", amount: 1201, flat: "C", date: "17-08-2025" },
  { name: "Rakhesh Kumar", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Haresh Talekar", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Balu Dhakne", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Vijay Pawar", amount: 1201, flat: "A", date: "17-08-2025" },
  { name: "Kanchan Pandhre", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Sharad Jagadale", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Onkar Padaval", amount: 1501, flat: "A", date: "17-08-2025" },
  { name: "Makarand Sakhare", amount: 1201, flat: "B", date: "17-08-2025" },
  { name: "Kailash Shingne", amount: 1201, flat: "A", date: "18-08-2025" },
  { name: "Manoj Sonawane", amount: 1201, flat: "B", date: "18-08-2025" },
  { name: "Arnavi Khunte", amount: 1234, flat: "B", date: "18-08-2025" },
  { name: "Vishal Kale", amount: 1501, flat: "B", date: "18-08-2025" },
  { name: "JayantKumar Nalavade", amount: 1201, flat: "B", date: "18-08-2025" },
  { name: "Nilesh Kharche", amount: 1251, flat: "B", date: "19-08-2025" },
  { name: "Avinash Pandit", amount: 1201, flat: "A", date: "19-08-2025" },
  { name: "Vishal Wavhal", amount: 1201, flat: "A", date: "19-08-2025" },
  { name: "Saurabh Sharma", amount: 1300, flat: "C", date: "19-08-2025" },
  { name: "Dyandev Panmand", amount: 1201, flat: "B", date: "19-08-2025" },
  { name: "Dnyaneshwar Rathod", amount: 1201, flat: "B", date: "19-08-2025" },
  { name: "Satish Bawane", amount: 1201, flat: "A", date: "19-08-2025" },
  { name: "Chetan Ushire", amount: 1201, flat: "C", date: "19-08-2025" },
  { name: "Ramesh Jaiswal", amount: 1201, flat: "B", date: "19-08-2025" },
  { name: "Harish Damade", amount: 1201, flat: "A", date: "20-08-2025" },
  { name: "Lalite Lavate", amount: 1201, flat: "C", date: "20-08-2025" },
  { name: "Ganesh Magar", amount: 1208, flat: "A", date: "20-08-2025" },
  { name: "Vishal Patil", amount: 1201, flat: "B", date: "20-08-2025" },
  { name: "Sachin Sakate", amount: 1201, flat: "C", date: "20-08-2025" },
  { name: "Shrikant Borkar", amount: 1201, flat: "C", date: "20-08-2025" },
  { name: "Chaitanya Chikhalthane", amount: 1251, flat: "C", date: "20-08-2025" },
  { name: "Mahesh Somwanshi", amount: 1201, flat: "B", date: "20-08-2025" },
  { name: "Anil Patil", amount: 1201, flat: "B", date: "20-08-2025" },
  { name: "Dayanidhi Balabantray", amount: 1201, flat: "A", date: "20-08-2025" },
  { name: "Sharad Nagare", amount: 1200, flat: "A", date: "21-08-2025" },
  { name: "Kaveesh Pandey", amount: 1200, flat: "C", date: "21-08-2025" },
  { name: "Vishal Ekhande", amount: 1200, flat: "C", date: "21-08-2025" },
  { name: "Vikas Dhawale", amount: 101, flat: "C", date: "21-08-2025" },
  { name: "Vikas Undre", amount: 1201, flat: "C", date: "21-08-2025" },
  { name: "Vishwas Kole", amount: 1201, flat: "B", date: "21-08-2025" },
  { name: "Podilapu Lokeswararao", amount: 1201, flat: "C", date: "21-08-2025" },
  { name: "Prem Kumar", amount: 501, flat: "C", date: "21-08-2025" },
  { name: "Pramod Kavitake", amount: 1201, flat: "C", date: "21-08-2025" },
  { name: "Ketan Waigaonkar", amount: 1200, flat: "C", date: "21-08-2025" },
  { name: "Prashant Badure", amount: 1201, flat: "A", date: "21-08-2025" },
  { name: "Sandesh Kale", amount: 500, flat: "C", date: "21-08-2025" },
  { name: "Sanjay Bhoite", amount: 1201, flat: "C", date: "22-08-2025" },
  { name: "Arjun Pawar", amount: 1201, flat: "C", date: "23-08-2025" },
  { name: "Pradip Badwaik", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Ashok Kharat", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Chityana Dadar", amount: 501, flat: "A", date: "23-08-2025" },
  { name: "Deepaj Chanda", amount: 1201, flat: "A", date: "23-08-2025" },
  { name: "Sachin Shriprannavar", amount: 501, flat: "A", date: "23-08-2025" },
  { name: "Sudeep Pujari", amount: 1200, flat: "A", date: "23-08-2025" },
  { name: "Vyankatesh Khandade", amount: 1200, flat: "A", date: "23-08-2025" },
  { name: "Yogesh Bhise", amount: 1201, flat: "A", date: "23-08-2025" },
  { name: "Bindu Nair", amount: 501, flat: "A", date: "23-08-2025" },
  { name: "Alok Raj", amount: 1201, flat: "A", date: "23-08-2025" },
  { name: "Hussain Mujawar", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Gauri Parinchekar", amount: 501, flat: "B", date: "23-08-2025" },
  { name: "Ajit Tuwar", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Rose Mary Dsouza", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Vivek Sakharkar", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Nilesh Pimple", amount: 1201, flat: "B", date: "23-08-2025" },
  { name: "Supriya Awale", amount: 500, flat: "B", date: "23-08-2025" },
  { name: "Chandramani Kamble", amount: 1501, flat: "A", date: "24-08-2025" },
  { name: "Swapnil Pawar", amount: 1501, flat: "B", date: "24-08-2025" },
  { name: "Nandkishor Tyagi", amount: 501, flat: "B", date: "24-08-2025" },
  { name: "Faruk Shah", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Dheerendra Srivastava", amount: 2402, flat: "C", date: "24-08-2025" },
  { name: "Sachin Bhandare", amount: 1201, flat: "C", date: "24-08-2025" },
  { name: "Sudhir Walodare", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Ramkisan Garad", amount: 1201, flat: "A", date: "24-08-2025" },
  { name: "R.L.V.T Elevator", amount: 5001, flat: "Other", date: "24-08-2025" },
  { name: "Madhukar Landge", amount: 1221, flat: "A", date: "24-08-2025" },
  { name: "Navnath Sawant", amount: 500, flat: "Other", date: "24-08-2025" },
  { name: "Ajay Mundhe", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Shivam Chaudhari", amount: 1200, flat: "A", date: "24-08-2025" },
  { name: "Umesh Dhavan", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Ravi Kumar", amount: 1201, flat: "A", date: "24-08-2025" },
  { name: "Abhijeet Kumbhar", amount: 1201, flat: "A", date: "24-08-2025" },
  { name: "VinodKumar Adhav", amount: 1200, flat: "A", date: "24-08-2025" },
  { name: "Kamlakar Rathod", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Ganesh Bavkar", amount: 1201, flat: "A", date: "24-08-2025" },
  { name: "Farin Shaikh", amount: 1200, flat: "B", date: "24-08-2025" },
  { name: "Madhav Zampalwad", amount: 1200, flat: "B", date: "24-08-2025" },
  { name: "Prem Kumar", amount: 500, flat: "B", date: "24-08-2025" },
  { name: "Rajesh Kumar Singh", amount: 501, flat: "B", date: "24-08-2025" },
  { name: "Hemant Kumbhar", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Kiran Shinde", amount: 501, flat: "B", date: "24-08-2025" },
  { name: "Kiran Babar", amount: 1501, flat: "B", date: "24-08-2025" },
  { name: "Monali Shitkal", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Jayram Waghmode", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Kantilal Mhaske", amount: 1200, flat: "B", date: "24-08-2025" },
  { name: "Dasharath Waghamare", amount: 1200, flat: "B", date: "24-08-2025" },
  { name: "Vihan Chilimattur", amount: 1201, flat: "B", date: "24-08-2025" },
  { name: "Jai Bhavani Electrical works", amount: 2100, flat: "Other", date: "24-08-2025" },
  { name: "C A Joshi", amount: 1200, flat: "A", date: "25-08-2025" },
  { name: "Rahul Patil", amount: 1201, flat: "B", date: "25-08-2025" },
  { name: "Yash Natkar", amount: 1201, flat: "A", date: "25-08-2025" },
  { name: "Nanasaheb Shelke", amount: 1211, flat: "A", date: "26-08-2025" },
  { name: "Hussain Pathan", amount: 1201, flat: "C", date: "26-08-2025" },
  { name: "Mahesh Bhosale", amount: 1201, flat: "A", date: "27-08-2025" },
  { name: "Prince Gaikwad", amount: 1200, flat: "B", date: "27-08-2025" },
  { name: "Raj Kakade", amount: 1200, flat: "B", date: "27-08-2025" },
  { name: "Sankar Sakare", amount: 500, flat: "C", date: "27-08-2025" },
  { name: "Swapnil Jagtap", amount: 1201, flat: "B", date: "27-08-2025" },
  { name: "Sonali Karwar", amount: 1200, flat: "B", date: "28-08-2025" },
  { name: "Maruti Todakar", amount: 1201, flat: "A", date: "28-08-2025" },
  { name: "Tushar Arankalle", amount: 500, flat: "B", date: "29-08-2025" },
  { name: "Sudam Thorat", amount: 1200, flat: "B", date: "29-08-2025" },
  { name: "Akshay Halkanche", amount: 501, flat: "B", date: "29-08-2025" },
  { name: "Rajendra Kolhal", amount: 1200, flat: "C", date: "30-08-2025" },
  { name: "Deepa Borade", amount: 1200, flat: "B", date: "30-08-2025" },
  { name: "Narendra Badare", amount: 1205, flat: "B", date: "31-08-2025" },
  { name: "Anil Daiswal", amount: 501, flat: "C", date: "31-08-2025" },
  { name: "Vedant Kulkarni", amount: 1201, flat: "C", date: "31-08-2025" },
  { name: "Appa Jamadar", amount: 1200, flat: "C", date: "31-08-2025" },
  { name: "Kiran Zagade", amount: 500, flat: "C", date: "31-08-2025" },
  { name: "Pandurang Patil", amount: 501, flat: "C", date: "31-08-2025" },
  { name: "Archana Thakur", amount: 501, flat: "C", date: "31-08-2025" },
  { name: "Mangesh Chavan", amount: 5000, flat: "Other", date: "31-08-2025" },
  { name: "Abhishek Ghodake", amount: 500, flat: "C", date: "31-08-2025" },
  { name: "Suryanshi", amount: 500, flat: "Other", date: "31-08-2025" },
  { name: "Chakor Gaonkar", amount: 501, flat: "A", date: "31-08-2025" },
  { name: "Ashish Joshi", amount: 1200, flat: "B", date: "31-08-2025" },
  { name: "Ravi Nagarjoge", amount: 1200, flat: "B", date: "31-08-2025" },
  { name: "Dharmendra Utekar", amount: 1200, flat: "B", date: "31-08-2025" },
  { name: "Dipali Shendage", amount: 501, flat: "A", date: "31-08-2025" },
  { name: "Nikhil Vyas", amount: 501, flat: "C", date: "31-08-2025" },
  { name: "Amit Barahate", amount: 1201, flat: "C", date: "31-08-2025" },
  { name: "Santosh Karande", amount: 1200, flat: "B", date: "01-09-2025" },
  { name: "Shubham Dede", amount: 1200, flat: "C", date: "01-09-2025" },
  { name: "Deodhar Ushire", amount: 501, flat: "B", date: "01-09-2025" },
  { name: "Ajit Khude", amount: 1201, flat: "C", date: "01-09-2025" },
  { name: "Mahadev Kamble", amount: 1201, flat: "B", date: "01-09-2025" },
  { name: "Mangesh Khandekar", amount: 2000, flat: "Other", date: "02-09-2025" },
  { name: "Avinash Bansode", amount: 1201, flat: "B", date: "02-09-2025" },
  { name: "V P Collection", amount: 101, flat: "Other", date: "02-09-2025" },
  { name: "Rahul Awale", amount: 1200, flat: "A", date: "03-09-2025" },
  { name: "Amol Waghmare", amount: 1200, flat: "B", date: "04-09-2025" },
  { name: "Chetan Kamble", amount: 1001, flat: "A", date: "04-09-2025" },
  { name: "Girish Joshi", amount: 1200, flat: "A", date: "04-09-2025" },
  { name: "Vijay TambeWagh", amount: 1201, flat: "A", date: "04-09-2025" },
  { name: "Vijay Pratap Singh", amount: 500, flat: "B", date: "04-09-2025" },
  { name: "Aparna Gulmire", amount: 701, flat: "B", date: "05-09-2025" },
  { name: "Pravin", amount: 1001, flat: "C", date: "05-09-2025" },
  { name: "Nilesh Kadam", amount: 1200, flat: "C", date: "05-09-2025" },

  { name: "Borase family(Rice Contributed)", amount: 0, flat: "M", date: "05-09-2025" },
  { name: "Lavate family", amount: 1776, flat: "M", date: "05-09-2025" },
  { name: "Dhakne family", amount: 615, flat: "M", date: "05-09-2025" },
  { name: "Pandhare family", amount: 660, flat: "M", date: "05-09-2025" },
  { name: "Vijay Pawar & family(Aata Contributed)", amount: 0, flat: "M", date: "05-09-2025" },
  { name: "Shingne family(Aata Contributed)", amount: 0, flat: "M", date: "05-09-2025" },
  { name: "Firoz Shaikh & family(Ghee Contributed)", amount: 0, flat: "M", date: "05-09-2025" },
  { name: "Mhaske family", amount: 700, flat: "M", date: "05-09-2025" },
  { name: "Tambe family", amount: 2200, flat: "M", date: "05-09-2025" },
  { name: "(Kharche & Sonawane)family", amount: 2200, flat: "M", date: "05-09-2025" },
  { name: "(Pandit & Bavkar)family", amount: 2800, flat: "M", date: "05-09-2025" },
  { name: "Damade family", amount: 500, flat: "M", date: "05-09-2025" },
];


function displayRecords(data) {
  const container = document.getElementById('records');
  container.innerHTML = '';

  // Header Row
  const header = document.createElement('div');
  header.className = 'table-header';
  header.innerHTML = `
    <div class="table-cell">Name</div>
    <div class="table-cell">Amount</div>
    <div class="table-cell">Flat</div>
    <div class="table-cell">Date</div>
    `;
  container.appendChild(header);

  // Data Rows
  data.forEach(record => {
    const row = document.createElement('div');
    row.className = `table-row flat-${record.flat}`;
    row.innerHTML = `
    <div class="table-cell" data-label="Name">${record.name}</div>
    <div class="table-cell" data-label="Amount">₹${record.amount}</div>
    <div class="table-cell" data-label="Flat">${record.flat}</div>
    <div class="table-cell" data-label="Date">${record.date}</div>
    `;
    container.appendChild(row);
  });
}

function filterFlat(flat) {
  let filtered = [];
  if (flat === 'All') {
    filtered = allData;
  } else {
    filtered = allData.filter(r => r.flat === flat);
  }
    displayRecords(filtered);

  // Calculate total for the current filter
  const total = filtered.reduce((sum, record) => sum + parseFloat(record.amount), 0);

  // Display total
  const totalDiv = document.getElementById('total-contri');
  const formattedTotal = total.toLocaleString('en-IN', { minimumFractionDigits: 0 });
    totalDiv.innerHTML = `<h3>Total Received: ₹${formattedTotal}</h3>`;
  }
  


// Initial load
window.onload = () => {
  displayRecords(allData);

  // Calculate total
  const total = allData.reduce((sum, record) => sum + record.amount, 0);

  // Display in the existing div
  const totalDiv = document.getElementById('total-contri');
  if (totalDiv) {
    const formattedTotal = total.toLocaleString('en-IN', { minimumFractionDigits: 0 });
    totalDiv.innerHTML = `<h3>Total Received: ₹${formattedTotal}</h3>`;
  }
  else {
    console.warn("Element with id 'total-contribution' not found.");
  }
  
};