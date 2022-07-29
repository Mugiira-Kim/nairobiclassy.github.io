console.log(searchBar);

const searchModel = () => {
    const val = modelSearch.value;
    message.forEach(user => {
        let name = modelSearch.querySelector('.ingo').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            modelSearch.style.display = 'flex';
        } else{
            modelSearch.style.display = 'none';
        }
    })
}

searchBar.addEventListener('keyup', searchModel); 