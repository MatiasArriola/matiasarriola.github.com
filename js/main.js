'use strict';

document.addEventListener('DOMContentLoaded', function(event) {

  var emailLink = document.querySelector('.email');
  emailLink.addEventListener('click', function(e){
    e.preventDefault();
    var code = document.createElement('code');
    code.innerText = [109, 97, 116, 105, 97, 115, 46, 97, 114, 114, 105, 111, 108, 97, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109].map(function(c){ return String.fromCharCode(c);}).join('');
    emailLink.className = 'hidden';
    emailLink.parentNode.appendChild(code);
  });

});
