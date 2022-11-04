
fetch('https://whatyearisit-backend-one.vercel.app/year')
.then(res => res.json())
.then(data =>{
    let stringData = data.year+""
    document.querySelector('#year').textContent = stringData
})