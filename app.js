

let slugifyCont = document.getElementById('slugifyCont')
let copyContent = document.getElementById('copyContent')
let returning = document.querySelector('.return')


slugifyCont.addEventListener('click', async () => {
    returning.innerHTML = ''
    let sluger = document.getElementById('sluger').value
        function stringify(sluger){
            return sluger.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .split('')
            .map(character => (/[a-z0-9]/.test(character) ? character : '-'))
            .join('')
            .replace(/-+/g, '-')
            .replace(/^- |- $/g, '')
        }
        let response = await stringify(sluger)
        document.getElementById('sluger').value = ''
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'headd')
        newDiv.innerHTML = `
                <p>
                    ${response}
                </p>
                <button class="copyContent">Copy</button>
        `
        newDiv.querySelector('.copyContent').addEventListener('click', () => {
            copyTolip(response)
        })
        returning.appendChild(newDiv)
})

function copyTolip(response){
    navigator.clipboard.writeText(response)
    alert('Copied to clipboard')
}
