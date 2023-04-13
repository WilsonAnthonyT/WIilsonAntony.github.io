const consultants = [
    {
      name: 'Gilbert Arya Utama',
      service: 'Consultation',
      photo: 'Image/GB.jpg',
      rating: 4.5,
    },
    {
      name: 'Jessica Tan',
      service: 'Booking',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.8,
    },
    {
      name: 'Alex Lee',
      service: 'Consultation',
      photo: 'Image/We.jpg',
      rating: 4.3,
    },
    
    {
      name: 'Empang dong',
      service: 'Booking',
      photo: 'Image/We.jpg',
      rating: 4.6,
    },
    {
      name: 'Ludwig Beethoven',
      service: 'Consultation',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.0,
    },
    
  ];
  
  const serviceSelect = document.getElementById('service');
  const consultantList = document.querySelector('#consultants');
  
  serviceSelect.addEventListener('change', () => {
    const selectedService = serviceSelect.value;
    consultantList.innerHTML = '';
  
    if (selectedService === '') {
      consultantList.parentElement.classList.remove('show');
      return;
    }
  
    const filteredConsultants = consultants.filter((consultant) => consultant.service === selectedService);
  
    filteredConsultants.forEach((consultant) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${consultant.photo}" alt="${consultant.name}">
        <div class="consultant-details">
          <h3>${consultant.name}</h3>
          <p>Service: ${consultant.service}</p>
          <p>Rating: ${consultant.rating}</p>
          <button class="select-consultant-button">Select</button>
          <button class="back-button">Back</button>
        </div>
      `;
      const selectButton = li.querySelector('.select-consultant-button');
      selectButton.addEventListener('click', () => {
        console.log(`Selected consultant: ${consultant.name}, Service: ${consultant.service}`);
        // Remove all the other cards
        consultantList.querySelectorAll('li').forEach((card) => {
          if (card !== li) {
            card.remove();
          }
        });
        // Add a class to highlight the selected card
        li.classList.add('selected');
        selectButton.textContent = 'Back';
        selectButton.classList.remove('select-consultant-button');
        selectButton.classList.add('back-button');
        // Add an event listener to the Back button
        const backButton = li.querySelector('.back-button');
        backButton.addEventListener('click', () => {
          // Remove the selected class from the selected card
          li.classList.remove('selected');
          // Show all the cards again
          consultantList.querySelectorAll('li').forEach((card) => {
            consultantList.appendChild(card);
          });
          // Change the Back button to a Select button
          selectButton.textContent = 'Select';
          selectButton.classList.remove('back-button');
          selectButton.classList.add('select-consultant-button');
          // Remove the event listener from the Back button
          backButton.removeEventListener('click');
        });
      });
      consultantList.appendChild(li);
    });
    
  
    consultantList.parentElement.classList.add('show');
  });
  
  
  const photoInput = document.getElementById('photo');
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        const photo = reader.result;
        const img = document.querySelector('#preview');
        img.src = photo;
      });
    }
  });
  
