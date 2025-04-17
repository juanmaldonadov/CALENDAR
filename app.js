const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

const firstDay = new Date(year, month, 1).getDay(); 
const lastDate = new Date(year, month + 1, 0).getDate();

const monthNames = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];

monthYear.textContent = `${monthNames[month]} ${year}`;

// Empty cells for days before the 1st
for(let i = 0; i < firstDay; i++) {
  const emptyCell = document.createElement('div');
  calendar.appendChild(emptyCell);
}

// Days of the month
for(let day = 1; day <= lastDate; day++) {
  const dayElement = document.createElement('div');
  dayElement.textContent = day;

  if(day === now.getDate()) {
    dayElement.classList.add('today');
  }

  calendar.appendChild(dayElement);
}
