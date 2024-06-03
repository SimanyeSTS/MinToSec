document.querySelector('#convertButton').addEventListener('click', () => {
    const minutesInput = document.querySelector('#minutesInput').value
    const minutes = parseFloat(minutesInput)
    if(isNaN(minutes)) {
        document.querySelector('#result').textContent = "Please enter a valid number."
    }
    else{
        const seconds = minutes * 60
        document.querySelector('#result').textContent = seconds
    }
})