function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var box = document.getElementById("box").value;

    var formData = {
      name: name,
      age: age,
      dob: dob,
      gender: gender,
      box:box
    };

    var formDataArray = [];

    if (localStorage.getItem('formDataArray')) {
      formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
    }

    formDataArray.push(formData);

    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

    console.log('Form data:', formData);
    console.log('Form data array:', formDataArray);



    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var form = document.getElementById("form");
    var gender = form.elements['gender'].value;
    var box = form.elements['terms'].value; 
  
    var table = document.getElementById("dataTable");
    var row = table.insertRow();
    var nameCell = row.insertCell();
    var ageCell = row.insertCell();
    var dobCell = row.insertCell();
    var genderCell = row.insertCell();
    var boxCell = row.insertCell();

    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    dobCell.innerHTML = dob;
    genderCell.innerHTML = gender;
    boxCell.innerHTML = box;

    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("dob").value = '';
    document.querySelector('input[name="gender"]:checked').value = '';
    document.getElementById("box").value = 'off';
  } 


  

  var username = document.getElementById("name").value;
  var password =document.getElementById("pass1").value; 
  var confirmpassword = document.getElementById("confir-pass").value; 
  var email =document.getElementById("email").value;

  var numArry=[];
  if(localStorage.setItem('numArry')){
      numArry=JSON.parse (localStorage.setItem('numArry'))
  }
  numArry.push('num')
  consol.log('num:',num)