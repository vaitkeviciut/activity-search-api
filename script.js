let activityForm = document.querySelector('#activity-form');
let activitySelection = document.querySelector('#category');
let activityOutput = document.querySelector('#activity-output');

activityForm.after(activityOutput);

let activityArr = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"];

activityArr.map(option => {
    let activityOption = document.createElement('option');
    activityOption.value = option
    activityOption.textContent = option[0].toUpperCase() + option.slice(1);

    activitySelection.append(activityOption)
})

activityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let selectedCategory = activitySelection.value;

    fetch(`https://www.boredapi.com/api/activity?type=${selectedCategory}`)
        .then(res => res.json())
        .then(data => {
            let activityType = data.type
            let action = data.activity
            console.log(activityType)
            console.log(action)

            activityOutput.textContent = `${action}`
        })
})
