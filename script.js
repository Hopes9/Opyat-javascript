
let me = 'die' // Жизненная переменная
const print = console.log

const post = document.getElementById('let')


const render = (json) => {
    let data_ = json.data
    for (let me=0; me in data_; me++){
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        div.classList.add('card');
        img.src = data_[me].avatar
        h2.innerText = `${data_[me].first_name} ${data_[me].last_name}`
        p.innerText = `Email: ${data_[me].email}`
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        post.appendChild(div)
    }
}


function get_l() {
    fetch('https://reqres.in/api/users?page=2')
        .then(
            obj=>obj.json(),
            e=>print(e)
        )
        .then(
            json=>render(json),
            e=>print(e)
        )
}


get_l()