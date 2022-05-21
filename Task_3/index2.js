'use strict';

var first1 = document.getElementById('first1')
var email1 = document.getElementById('email1')
var website=document.getElementById('formFile')
var ph_no = document.getElementById('no1')
var btn1 = document.querySelector('.enroll1');

var card1 = document.querySelector('.card1');
var op1 = document.getElementById('inlineRadio1')
var op2 = document.getElementById('inlineRadio2')
var chk1 = document.getElementById('inlineCheckbox1')
var chk2 = document.getElementById('inlineCheckbox2')
var chk3 = document.getElementById('inlineCheckbox3')
var form = document.querySelector('form');

var el
btn1.addEventListener('click',function(){

     ///checkbox
      let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      let values = []
      checkboxes.forEach((checkbox) => {
          values.push(checkbox.value);
      });

    
    if(!first1.value  || !email1.value || !formFile.value || !ph_no.value){
      alert('ERROR: Please enter all fields!')
    }
    else{
      card1.innerHTML += `
  <div class="card" style="max-width: 500px; max-height:300px; margin-bottom:10px; background-color:#cc9e9e;">
  <div class="row g-0">
  
    <div class="col-15">
      <div class="card-body">
        <h5 class="card-title">${first1.value} </h5>
        <p class="card-text">${op1.checked ? op1.value : op2.checked ? op2.value : 'Others'}</p>
        <p class="card-text">${email1.value}</p>
        <p class="card-text">${formFile.value} </p>
        <p class="card-text">${ph_no.value}</p>
        <p class="card-text">${values}</p>
      </div>
    </div>
  </div>
  </div>`
  
  
  form.reset()
    }
  
});