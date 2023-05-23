function calculate(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    const outputBox = document.getElementById('outputBox');
    let bmi = weight / ((height/100) **2); 
    let status = 'You have not entered any values'
    let message = 'According to the Body Mass Index, you are: <br>'

    if (bmi > 0.1 && bmi < 16){
        status = (`${message} Severely Underweight`) ;
    }else if (bmi >= 16 && bmi <= 18.4 ){
        status = (`${message} Underweight`);
    } else if (bmi >= 18.5 && bmi <= 24.9 ){
        status = (`${message} Normal`) ;
    } else if (bmi >= 25 && bmi <= 29.9 ){
        status = (`${message} Overweight`) ;
    } else if (bmi >= 30 && bmi <= 34.9 ){
        status = (`${message} Moderately Obese`);
    } else if (bmi >= 35 && bmi <= 39.9 ){
        status = (`${message} Severely Obese`);
    } else if (bmi >= 40){
        status = (`${message} Morbidly Obese`);
    } 
    
    outputBox.innerHTML =  status
}

