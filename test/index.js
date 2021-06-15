function getData(){
    const endpoint = 'https://60c6c0c019aa1e001769f9f8.mockapi.io/menu';


    fetch(endpoint)
    .then((response) => response.json())
    .then((datas) => makeView(datas));
}

const menus = document.querySelector(".menus");
const root = document.querySelector(".root");

function makeParentOption(data){
    console.log(data);
    const li = document.createElement('li');
    li.innerText = data.name;
    menus.append(li);
}

function makeChildOption(data){
    console.log(data);
    const li = document.createElement('li');
    li.innerText = data.name;
    menus.append(li);
}

function makeView(datas){

    let parent;
    let child;

    datas.forEach((data,i) => {
        if(data.parentId == null){
            makeParentOption(data);
        }else{
            //makeChildOption(data)
        }
    
    });
    //const option = document.createElement('option');

    
}

function init(){
    getData();

}

window.addEventListener('load',init);