

let container = document.createElement('div')
container.setAttribute('class','container');
document.body.append(container);

let calculator = document.createElement('div')
calculator.setAttribute('class','calculator');
container.append(calculator);

let form = document.createElement('form');
calculator.appendChild(form);

let displaydiv = document.createElement('div');
displaydiv.setAttribute('class','display');
form.appendChild(displaydiv);

let input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('name','display');
displaydiv.appendChild(input);

  let divline1 = document.createElement('div');
  divline1.setAttribute('class','divline1');
  form.appendChild(divline1);

  let divline1input1 = document.createElement('input');
  divline1.appendChild(divline1input1);
  divline1input1.setAttribute('type','button');
  divline1input1.setAttribute('value','AC');
  divline1input1.addEventListener('click', function() {
    input.value = '';
  });

  let divline1input2 = document.createElement('input');
  divline1.appendChild(divline1input2);

  divline1input2.setAttribute('type','button');
  divline1input2.setAttribute('value','DE');
  divline1input2.addEventListener('click', function() {
    input.value = input.value.toString().slice(0,-1);
  });



  let divline1input3 = document.createElement('input');
  divline1.appendChild(divline1input3);

  divline1input3.setAttribute('type','button');
  divline1input3.setAttribute('value','.');
  divline1input3.addEventListener('click', function() {
    input.value += '.';
  });

  
  let divline1input4 = document.createElement('input');
  divline1.appendChild(divline1input4);

  divline1input4.setAttribute('type','button');
  divline1input4.setAttribute('value','/');
  divline1input4.addEventListener('click', function() {
    input.value += '/';
  });


      
      let divline2 = document.createElement('div');
      form.appendChild(divline2);

      let divline2input1 = document.createElement('input');
      divline2.appendChild(divline2input1);

          divline2input1.setAttribute('type', 'button');
    divline2input1.setAttribute('value', '7');
    divline2input1.addEventListener('click', function() {
      input.value += '7';
    });

    let divline2input2 = document.createElement('input');
    divline2.appendChild(divline2input2);

    divline2input2.setAttribute('type', 'button');
    divline2input2.setAttribute('value', '8');
    divline2input2.addEventListener('click', function() {
      input.value += '8';
    });

    let divline2input3 = document.createElement('input');
    divline2.appendChild(divline2input3);

    divline2input3.setAttribute('type', 'button');
    divline2input3.setAttribute('value', '9');
    divline2input3.addEventListener('click', function() {
      input.value += '9';
    });

      
      let divline2input4 = document.createElement('input');
      divline2.appendChild(divline2input4);

      divline2input4.setAttribute('type','button');
      divline2input4.setAttribute('value','*');
      divline2input4.addEventListener('click', function() {
        input.value += '*';
      });


      let divline3 = document.createElement('div');
      form.appendChild(divline3);

      let divline3input1 = document.createElement('input');
      divline3.appendChild(divline3input1);

      divline3input1.setAttribute('type','button');
      divline3input1.setAttribute('value','4');
      divline3input1.addEventListener('click', function() {
        input.value += '4';
      });


      let divline3input2 = document.createElement('input');
      divline3.appendChild(divline3input2);

      divline3input2.setAttribute('type','button');
      divline3input2.setAttribute('value','5');
      divline3input2.addEventListener('click', function() {
        input.value += '5';
      });


      let divline3input3 = document.createElement('input');
      divline3.appendChild(divline3input3);

      divline3input3.setAttribute('type','button');
      divline3input3.setAttribute('value','6');
      divline3input3.addEventListener('click', function() {
        input.value += '6';
      });

       
      let divline3input4 = document.createElement('input');
      divline3.appendChild(divline3input4);

      divline3input4.setAttribute('type','button');
      divline3input4.setAttribute('value','-');
      divline3input4.addEventListener('click', function() {
        input.value += '-';
      });


          
          let divline4 = document.createElement('div');
          form.appendChild(divline4);
 
          let divline4input1 = document.createElement('input');
          divline4.appendChild(divline4input1);

          divline4input1.setAttribute('type','button');
          divline4input1.setAttribute('value','1');
          divline4input1.addEventListener('click', function() {
            input.value += '1';
          });
    

          let divline4input2 = document.createElement('input');
          divline4.appendChild(divline4input2);

          divline4input2.setAttribute('type','button');
          divline4input2.setAttribute('value','2');
          divline4input2.addEventListener('click', function() {
            input.value += '2';
          });
    


          let divline4input3 = document.createElement('input');
          divline4.appendChild(divline4input3);

          divline4input3.setAttribute('type','button');
          divline4input3.setAttribute('value','3');
          divline4input3.addEventListener('click', function() {
            input.value += '3';
          });
    

          
          let divline4input4 = document.createElement('input');
          divline4.appendChild(divline4input4);

          divline4input4.setAttribute('type','button');
          divline4input4.setAttribute('value','+');
          divline4input4.addEventListener('click', function() {
            input.value += '+';
          });
    


              let divline5 = document.createElement('div');
              form.appendChild(divline5);

              let divline5input1 = document.createElement('input');
              divline5.appendChild(divline5input1);

              divline5input1.setAttribute('type','button');
              divline5input1.setAttribute('value','00');
              divline5input1.addEventListener('click', function() {
                input.value += '00';
              });
        

              let divline5input2 = document.createElement('input');
              divline5.appendChild(divline5input2);

              divline5input2.setAttribute('type','button');
              divline5input2.setAttribute('value','0');
              divline5input2.addEventListener('click', function() {
                input.value += '0';
              });
        

              let divline5input3 = document.createElement('input');
              divline5.appendChild(divline5input3);

              divline5input3.setAttribute('type','button');
              divline5input3.setAttribute('value','=');
              divline5input3.addEventListener('click', function() {
                input.value = eval(input.value);
              }) 
  