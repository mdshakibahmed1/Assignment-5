function scrollsection(){
    document.getElementById('target-section').scrollIntoView({
        behavior: 'smooth',
    })
}



let point = 0;
const ticketPrice = 550; 
function updateScore() {
    document.getElementById('score').innerText = point;
    document.getElementById('total').innerText = point * ticketPrice + " Taka";

   

    const selectedButtons = document.querySelectorAll('.selected');
    const columnDisplay = document.getElementById('selected-buttons-display');
    columnDisplay.innerHTML = ''; // Clear previous display
    selectedButtons.forEach(button => {
      const div = document.createElement('div');
      div.innerText = button.innerText;
      columnDisplay.appendChild(div);
    })




    // // Update the selected buttons display

    // const selectedButtons = document.querySelectorAll('.selected');
    // let name = [];
    // selectedButtons.forEach(button => {

    //     name.push(button.innerText);
    // });
    // document.getElementById('selected-buttons-display').innerText = name.join('');

  
}

function handleButtonClick(btn) {
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected');
      point-- ;
    } else {
      const selectedCount = document.querySelectorAll('.selected').length;
      if (selectedCount < 4) {
        btn.classList.add('selected');
        point++;

      } else {
        

        alert("A maximum of four tickets can be selected.");
      }
    }
    updateScore();
  
 }
 
  

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => handleButtonClick(btn));
  });


  

 









 