const searchInput = document.getElementById('searchInput');
const searchRes = document.getElementById("searchRes");
let debounceTimeout;

const api = (searchInput) =>{
  return new Promise((res)=>{
    const resultArr = [{id:1,name:'Apple'},{id:2,name:'Apricot'}];
    const filter = resultArr.filter((result)=>result.name.toLowerCase().includes(searchInput.toLowerCase()));
    setTimeout(()=>{
      res(filter);
    },1000)
  })
}

const handleSearch = async(searchInput)=>{
  const result = await api(searchInput);
  searchRes.innerHTML="";
  result.forEach(ele => {
    const list = document.createElement('li');
    list.textContent = ele.name;
    searchRes.appendChild(list);
  });
}

searchInput.addEventListener('input',(e)=>{
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    handleSearch(e.target.value);
  },500);
})