document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      let num1, num2, num3, num4;

      num1 = document.getElementById('n1').value;
      num1 = parseInt(num1);
      num1 = Number(num1);
      if (500000 < num1 > 150000000) {
        
      }
      else {
        alert('Стоимость жилья от 500000 - 150000000!')
      }

      num2 = document.getElementById('n2').value;
      num2 = parseInt(num2);
      num2 = Number(num2);

      num3 = document.getElementById('n3').value;
      num3 = parseInt(num3);
      num3 = Number(num3);

      num4 = document.getElementById('n4').value;
      num4 = parseInt(num4);
      num4 = Number(num4);

      let result1;
      result1 = num1 + num2;
      count1(result1)
    }

    else {
      alert('Проверьте, что все поля заполнены правильно!');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === '') {
        formAddError(input);
        error++;
      }

    }
    return error;
  }

  function formAddError(input) {
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.classList.remove('_error');
  }

  function count1(result1) {
    document.getElementById('r1').innerHTML = result1;
  }

})