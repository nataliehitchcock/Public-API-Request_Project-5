// With information provided from The Random User Generator API, send a request to the API
  // and use the response data to display 12 users, along with some basic information for each:

  $(document).ready(function() {
    let api = 'https://randomuser.me/api/?results=12&nat=us,ca&exc=gender,login,registered,id,phone';
    $.getJSON(api, function(data){
      let employeeData = data.results; // storing the array in a variable to use for the modal window
      console.log(employeeData, 'employeeData variable'); // test to make sure the variable is stored correctly
  
  // Get and display 12 random users
      let employeeHTML = '';
        $.each(data.results, function(index, employee){
          employeeHTML += '<div class="card">';
          employeeHTML += '<div class="card-img-container">';
  
          employeeHTML += '<img class="card-img" src="' + employee.picture.large + '" alt="profile picture">';
          employeeHTML += '</div>'; 
          employeeHTML += '<div class="card-info-container">';
  
          // First and Last Name:
          employeeHTML += '<h3 id="name" class="card-name cap">' + employee.name.first + ' ' + employee.name.last + '</h3>';
  
          // Email:
          employeeHTML += '<p class="card-text">' + employee.email + '</p>';
  
          // City & State:
          employeeHTML += '<p class="card-text cap">' + employee.location.city + ', ' + employee.location.state + '</p>';
  
          // Close the divs
          employeeHTML += '</div>'; 
          employeeHTML += '</div>'; 
          $('#gallery').html(employeeHTML); // append to page in gallery ID
        }); 
  