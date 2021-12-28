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

      num2 = document.getElementById('n2').value;
      num2 = parseInt(num2);
      num2 = Number(num2);
      if (num1 >= 500000) {
        if (num1 <= 15000000) {

          if (num2 / num1 <= 0.99) {
            if (num2 / num1 >= 0.4) {
              let result1;
              result1 = (parseInt((num1 - num2) / 144 * 100)) / 100;
              let num3 = num1 * 0.0005
              if (num3 >= 1000) {
                let result2;
                result2 = (parseInt(num3 * 100)) / 100;
                count1(result1)
                count2(result2)
              } else {
                result2 = 1000;
                count1(result1)
                count2(result2)
              }
            } else {
              alert('Первоначальный взнос должен быть больше 40% от стоимости жилья!')
            }
          } else {
            alert('Первоначальный взнос должен быть меньше 99% от стоимости жилья!')
          }
        } else {
          alert('Стоимость жилья должны быть меньше 150000000!')
        }
      } else {
        alert('Стоимость жилья должны быть больше 500000!')
      }
    } else {
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

  function count2(result2) {
    document.getElementById('r2').innerHTML = result2;
  }

})