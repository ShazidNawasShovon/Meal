//  fetch('https://jsonplaceholder.typicode.com/posts')
//      .then(res=> res.json())
//      .then(data=>console.log(data));
function loadPost(){
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => displayTitle(data))
}
function displayTitle(data)
{
    const ul=document.getElementById('user');
    for(const title of data)
    {
        const li=document.createElement('li');
        li.innerText=`Title: ${title.title}`
        ul.appendChild(li);
    }
}
function loadData()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => displayId(data))
}
function displayId(data)
{
    const ul= document.getElementById('user');
    for(const user of data)
    {
        const li= document.createElement('li');
        // console.log(user.id);
        li.innerText=`ID : ${user.id}`;
        ul.appendChild(li);
    }
}