
document.getElementById('submit');
document.getElementById('rating');
document.getElementById('thankyou');
document.getElementById('rated');

const nums = Array.from(document.getElementsByClassName('num'))
let selected = 0;

const darkBlue = '#2A343E'
const orange = '#FF6600'
const gray = '#9AA1AB'

function resetbackground(){
   nums.forEach((num) => {
    console.log(num);
        num.style.backgroundColor = darkBlue
        num.style.color = gray
    })
}

function changeBackground(e) { 
    resetbackground()  
    e.target.style.backgroundColor = orange;
    e.target.style.color = 'white';

    selected = e.target.textContent;
}

function submitRating(e){
    if(selected==0){
        alert('Please select a rating')
        return;
    }
    rating.style.display = 'none';
    thankyou.style.display = 'flex';
    rated.textContent = `you rated ${selected} out of 5`
}

nums.forEach((num) => {
    num.addEventListener('click', changeBackground)
})


submit.addEventListener('click', submitRating);


