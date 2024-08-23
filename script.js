
let targetDate = new Date('2050-01-01T00:00:00');

function updateCountdown(){
    const currentDate = new Date();
    const timeDifference = targetDate-currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // console.log(`Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    let timer = document.getElementById('count-tracker');
    timer.innerHTML=(`Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    timer.style.fontSize='30px'
    timer.style.fontWeight = 'bold';
    timer.style.color = 'red';
    timer.style.backgroundColor = '#C1D8C3';
    timer.style.borderRadius = '10px';
    timer.style.padding = '10px';

    setTimeout(updateCountdown,1000)
    
}
updateCountdown();