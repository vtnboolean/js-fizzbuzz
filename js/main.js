const numberWrapperRow=document.getElementById('number-wrapper');

 

for (let index = 1; index < 101 ; index++) {

    let flashyBox = document.createElement('div'); 
    flashyBox.classList.add('col-2', 'box');
    
    if (index % 3 == 0 && index% 5 == 0){
        console.log("fizzbuzz"); 
        flashyBox.innerHTML = "fizzbuzz";
        flashyBox.classList.add('col-2','boxfizzbuzz');
        numberWrapperRow.append(flashyBox); 

    } else if(index % 3 == 0){
        console.log("fizz");
        flashyBox.innerHTML = "fizz";
        flashyBox.classList.add('col-2','boxfizz');
        numberWrapperRow.append(flashyBox); 
    } else if (index % 5 ==0){
        console.log("buzz");
        flashyBox.innerHTML = "buzz";
        flashyBox.classList.add('col-2','boxbuzz');
        numberWrapperRow.append(flashyBox); 
    } else {
        console.log(flashyBox);
        flashyBox.innerHTML = index
        numberWrapperRow.append(flashyBox); 
    }     
}
