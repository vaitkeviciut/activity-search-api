const form = document.querySelector('#form')
const selectElement = document.querySelector('#activity-type')
const selectParticipantsElement = document.querySelector('#participants')
const selectAccessibilityElement = document.querySelector('#accessibility')
const selectedInputButton = document.querySelector('#selected-input')
const inputButton = document.querySelector('#input')
const container = document.querySelector('.container')
const priceRangeInputLeft = document.querySelector('#price-range-left')
const priceRangeInputRight = document.querySelector('#price-range-right')
const priceAccessibilityInputLeft = document.querySelector('#accessibility-range-left')
const priceAccessibilityInputRight = document.querySelector('#accessibility-range-right')


let typesArr = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
let participantsArr = [1, 2, 3, 4, 5, 6, 7, 8]


function getActivity(type, minPrice, maxPrice, participants, minAccessibility, maxAccessibility) {

    const outputWrapper = document.createElement('div')
    outputWrapper.classList.add('output-wrapper')

    const activityOutputWrapper = document.createElement('div')
    activityOutputWrapper.classList.add('activity-output-wrapper')

    const activityWrapper1 = document.createElement('div')
    activityWrapper1.className = 'activity-wrapper'
    const activityWrapper2 = document.createElement('div')
    activityWrapper2.className = 'activity-wrapper'
    const activityWrapper3 = document.createElement('div')
    activityWrapper3.className = 'activity-wrapper'
    const activityWrapper4 = document.createElement('div')
    activityWrapper4.className = 'activity-wrapper'
    const activityWrapper5 = document.createElement('div')
    activityWrapper5.className = 'activity-wrapper'

    const activityOutputTitle1 = document.createElement('h3')
    activityOutputTitle1.classList.add('activity-output-title')
    activityOutputTitle1.textContent = 'Activity to do:'
    const activityOutputTitle2 = document.createElement('h3')
    activityOutputTitle2.classList.add('activity-output-title')
    activityOutputTitle2.textContent = 'Activity type:'
    const activityOutputTitle3 = document.createElement('h3')
    activityOutputTitle3.classList.add('activity-output-title')
    activityOutputTitle3.textContent = 'Participants required for the activity:'
    const activityOutputTitle4 = document.createElement('h3')
    activityOutputTitle4.classList.add('activity-output-title')
    activityOutputTitle4.textContent = 'Expenses:'
    const activityOutputTitle5 = document.createElement('h3')
    activityOutputTitle5.classList.add('activity-output-title')
    activityOutputTitle5.textContent = 'Accessibility rating:'
    
    const activityElement = document.createElement('span')
    activityElement.className = 'activity-type-name'
    const activityTypeElement = document.createElement('span')
    activityTypeElement.className = 'activity-type-name'
    const participantElement = document.createElement('span')
    participantElement.className = 'activity-type-name'
    const priceElement = document.createElement('span')
    priceElement.className = 'activity-type-name'
    const accessibilityElement = document.createElement('span')
    accessibilityElement.className = 'activity-type-name'
    

    activityWrapper1.append(activityOutputTitle1, activityElement)
    activityWrapper2.append(activityOutputTitle2, activityTypeElement)
    activityWrapper3.append(activityOutputTitle3, participantElement)
    activityWrapper4.append(activityOutputTitle4, priceElement)
    activityWrapper5.append(activityOutputTitle5, accessibilityElement)


    activityOutputWrapper.append(activityWrapper1, activityWrapper2, activityWrapper3, activityWrapper4, activityWrapper5)
    outputWrapper.append(activityOutputWrapper)
    container.append(outputWrapper)

    fetch(`https://www.boredapi.com/api/activity?type=${type}&minprice=${minPrice}&maxprice=${maxPrice}&participants=${participants}&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            activityOutputWrapper.textContent = 'Sorry, couldn\'t find activity with these options :('
            activityOutputWrapper.className += ' new'
            return
        }
        const activity = data.activity
        const type = data.type[0].toUpperCase() + data.type.slice(1)
        const participants = data.participants
        const price = data.price * 10
        const accessibility = data.accessibility * 10

        activityElement.textContent = activity
        activityTypeElement.textContent = type
        participantElement.textContent = participants
        priceElement.textContent = `${price}/10`
        accessibilityElement.textContent = `${accessibility}/10`
        activityOutputWrapper.className += ' new'
    })

}
function listTypeActivity(arr) {
    let firstOptionElement = document.createElement('option')
    firstOptionElement.textContent = 'Any'
    firstOptionElement.value = ''
    selectElement.append(firstOptionElement)

    arr.map(type => {
        let optionElement = document.createElement('option')
        optionElement.textContent = type.charAt(0).toUpperCase() + type.slice(1)
        optionElement.value = type
        selectElement.append(optionElement)
    })
}
listTypeActivity(typesArr)

function listParticipants(arr) {
    let firstOptionElement = document.createElement('option')
    firstOptionElement.textContent = 'Any'
    firstOptionElement.value = ''
    selectParticipantsElement.append(firstOptionElement)

    arr.map(price => {
        let participantsOptionElement = document.createElement('option')
        participantsOptionElement.textContent = price
        participantsOptionElement.value = price
        selectParticipantsElement.append(participantsOptionElement)
    })
}
listParticipants(participantsArr)

function removePrevious() {
    let previousElement = document.querySelector('.new')
    if(previousElement) {
        previousElement.remove()
    }
}

inputButton.addEventListener('click', (event) => {
    event.preventDefault()

    const outputWrapper = document.createElement('div')
    outputWrapper.classList.add('output-wrapper')

    const activityOutputWrapper = document.createElement('div')
    activityOutputWrapper.classList.add('activity-output-wrapper')
    
    const activityWrapper1 = document.createElement('div')
    activityWrapper1.className = 'activity-wrapper'
    const activityWrapper2 = document.createElement('div')
    activityWrapper2.className = 'activity-wrapper'
    const activityWrapper3 = document.createElement('div')
    activityWrapper3.className = 'activity-wrapper'
    const activityWrapper4 = document.createElement('div')
    activityWrapper4.className = 'activity-wrapper'
    const activityWrapper5 = document.createElement('div')
    activityWrapper5.className = 'activity-wrapper'

    const activityOutputTitle1 = document.createElement('h3')
    activityOutputTitle1.classList.add('activity-output-title')
    activityOutputTitle1.textContent = 'Activity to do:'
    const activityOutputTitle2 = document.createElement('h3')
    activityOutputTitle2.classList.add('activity-output-title')
    activityOutputTitle2.textContent = 'Activity type:'
    const activityOutputTitle3 = document.createElement('h3')
    activityOutputTitle3.classList.add('activity-output-title')
    activityOutputTitle3.textContent = 'Participants required for the activity:'
    const activityOutputTitle4 = document.createElement('h3')
    activityOutputTitle4.classList.add('activity-output-title')
    activityOutputTitle4.textContent = 'Expenses:'
    const activityOutputTitle5 = document.createElement('h3')
    activityOutputTitle5.classList.add('activity-output-title')
    activityOutputTitle5.textContent = 'Accessibility rating:'
    
    const activityElement = document.createElement('span')
    activityElement.className = 'activity-type-name'
    const activityTypeElement = document.createElement('span')
    activityTypeElement.className = 'activity-type-name'
    const participantElement = document.createElement('span')
    participantElement.className = 'activity-type-name'
    const priceElement = document.createElement('span')
    priceElement.className = 'activity-type-name'
    const accessibilityElement = document.createElement('span')
    accessibilityElement.className = 'activity-type-name'
    

    activityWrapper1.append(activityOutputTitle1, activityElement)
    activityWrapper2.append(activityOutputTitle2, activityTypeElement)
    activityWrapper3.append(activityOutputTitle3, participantElement)
    activityWrapper4.append(activityOutputTitle4, priceElement)
    activityWrapper5.append(activityOutputTitle5, accessibilityElement)

    activityOutputWrapper.append(activityWrapper1, activityWrapper2, activityWrapper3, activityWrapper4, activityWrapper5)
    outputWrapper.append(activityOutputWrapper)
    container.append(outputWrapper)


    fetch("https://www.boredapi.com/api/activity/")
        .then(res => res.json())
        .then(data => {
            const activity = data.activity
            const type = data.type[0].toUpperCase() + data.type.slice(1)
            const participants = data.participants
            const price = data.price * 10
            const accessibility = data.accessibility * 10

            activityElement.textContent = activity
            activityTypeElement.textContent = type
            participantElement.textContent = participants
            priceElement.textContent = `${price}/10`
            accessibilityElement.textContent = `${accessibility}/10`

            outputWrapper.className += ' new'
        })
    removePrevious()
})

selectedInputButton.addEventListener('click', (event) => {
    event.preventDefault()

    const selectedType = selectElement.value
    const selectedPriceLeft = priceRangeInputLeft.value / 10
    const selectedPriceRight = priceRangeInputRight.value / 10
    const selectedParticipants = selectParticipantsElement.value
    const selectedAccessibilityLeft = priceAccessibilityInputLeft.value / 10
    const selectedAccessibilityRight = priceAccessibilityInputRight.value / 10

    getActivity(selectedType, selectedPriceLeft, selectedPriceRight, selectedParticipants, selectedAccessibilityLeft, selectedAccessibilityRight)
    removePrevious()

})
    
    