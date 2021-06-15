function getData(){
    const endpoint = 'https://60c6c0c019aa1e001769f9f8.mockapi.io/menu';

    fetch(endpoint)
    .then((response) => response.json())
    .then((datas) => makeView(datas));
}

const menus = document.querySelector(".items");
const root = document.querySelector(".list1");


function makeParentOption(datas){

    
    datas.forEach((data)=>{
        const li = document.createElement('li');
        const label = document.createElement('div');
        const checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.value = data.id;
        label.append(checkbox);
        label.append(data.name);    
        menus.appendChild(label);
    })
  

}

function makeChildOption(datas){

    datas.forEach((data,i)=>{
        const li = document.createElement('li');
        li.innerText = data.name;
        menus.append(li);
    })
   
}

function dataSorted(datas){
    datas.sort((a,b)=>{
        if(a.order<b.order){
            return -1;  
        }
    })

    return datas;
}


function makeView(datas){

    let parent=[];
    let child=[];

    datas.forEach((data,i) => {
        if(data.parentId == null){
            parent.push(data);
           
        }else{
            child.push(data);
            
        }
    });
    
    parent=dataSorted(parent);
    child=dataSorted(child);

    makeParentOption(parent);
    
}

function init(){
    getData();
    var checkList = document.getElementById('list1');
    checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible'))
        checkList.classList.remove('visible');
    else
        checkList.classList.add('visible');
    }
}

window.addEventListener('load',init);