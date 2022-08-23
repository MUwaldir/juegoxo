const caja = document.querySelector('#container')

    

const box = [
    ['','',''],
    ['','',''],
    ['','','']
]
let userStatus = 'o';

function checkStatus(user){
    if(box[0][0] == user && box[0][1] == user  && box[0][2] == user){
        return true
    }
    if(box[1][0] == user && box[1][1] == user  && box[1][2] == user){
        return true
    }
    if(box[2][0] == user && box[2][1] == user  && box[2][2] == user){
        return true
    }
    if(box[0][0] == user && box[1][0] == user  && box[2][0] == user){
        return true
    }
    if(box[0][1] == user && box[1][1] == user  && box[2][1] == user){
        return true
    }
    if(box[0][2] == user && box[1][2] == user  && box[2][2] == user){
        return true
    }
    if(box[0][0] == user && box[1][1] == user  && box[2][2] == user){
        return true
    }
    if(box[0][2] == user && box[1][1] == user  && box[2][0] == user){
        return true
    }
    return false
}
function btn(){
    location.reload()
}



function winer(){
    const p = document.querySelector('.mensaje')
    if(checkStatus(userStatus)){
        p.style.cssText = 'display:block';
        p.innerHTML = `gano ${userStatus}`

    }else{
        if(contador >= 9){
            p.style.cssText = 'display:block';
            p.innerHTML = `gano ${userStatus}`
        }
    }
}
let contador = 0
function insertdata(){
    contador += 1
    if(userStatus === 'o'){
        userStatus = 'x'
    }else if(userStatus === 'x'){
        userStatus = 'o'
    }
    
    
    box[this.dataset.row][this.dataset.col] = userStatus
    actualizar()
    winer()
}

function insertar({col,indicerow,indicecol},container){
    
    const el = document.createElement('span')
    el.textContent = col
    el.dataset.row = indicerow
    el.dataset.col = indicecol
    el.addEventListener('click', insertdata)
    container.append(el)

}

function actualizar(){
    caja.innerHTML = ''
    box.forEach((row, indicerow) => {
        row.forEach((col, indicecol) => {
         
            insertar({col,indicerow,indicecol},caja)
        });
    
    });

}

actualizar()