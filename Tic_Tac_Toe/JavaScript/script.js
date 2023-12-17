let buttons = document.querySelectorAll('.btn');
let count = 0;
let X_Combinations = [];
let O_Combinations = [];
let main_result = [];
let combinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function lineThrough(value,colorValue){
    buttons[main_result[0]-1].style.textDecoration=value;
    buttons[main_result[0]-1].style.backgroundColor=colorValue;
    buttons[main_result[1]-1].style.textDecoration=value;
    buttons[main_result[1]-1].style.backgroundColor=colorValue;
    buttons[main_result[2]-1].style.textDecoration=value;
    buttons[main_result[2]-1].style.backgroundColor=colorValue;
}

function X_O_func(combinations, X_or_O_Combinations) {
    let increment = 0;
    let flag = false;
    for (let i of combinations) {
        for (let j of X_or_O_Combinations) {
            if (i.includes(j)) {
                increment++;
            }
        }
        if (increment === 3) {
            main_result = i;
            return main_result;
            flag = true;
            break;
        }
        else {
            flag = false;
            increment = 0
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if ((count & 1) === 0) {
            buttons[i].setAttribute('value', 'X');
            buttons[i].style.color='red';
            document.getElementById('turn').innerHTML='Turn for Venkata Sai "X"';
            X_Combinations.push(i + 1);
            if (count > 3) {
                X_Combinations.sort();
                X_O_func(combinations, X_Combinations)
                if (X_O_func(combinations, X_Combinations)) {
                    lineThrough('line-through','yellow');
                    document.getElementById('turn').style.display='none';
                    document.getElementById('output').innerHTML = `"X" won the game....<img src='./Assets/winner_Image.jpeg' id='img-output'>`;
                }
            }
        }
        else {
            buttons[i].setAttribute('value', 'O');
            buttons[i].style.color='blue';
            document.getElementById('turn').innerHTML='Turn for Venkata Sai "O" ';
            O_Combinations.push(i + 1);
            if (count > 3) {
                O_Combinations.sort();
                if (X_O_func(combinations, O_Combinations)) {
                    lineThrough('line-through','yellow');
                    document.getElementById('turn').style.display='none';
                    document.getElementById('output').innerHTML = `"O" won the game....<img src='./Assets/Winner_image2.jpeg' id='img-output'>`;
                }
            }
        }
        if(count===8 && main_result==0){
            document.getElementById('output').innerHTML=`Good Luck Next Time...<img src='./Assets/No_result_image.jpeg' id='img-output'>`;
            document.getElementById('output').style.color='red';
        }
        count += 1;
    })
}

document.getElementById('reset').addEventListener('click',function(){
    lineThrough('','rgb(230, 169, 228)');
    X_Combinations=[];
    O_Combinations=[];
    main_result=[];
    count=0;
    document.getElementById('turn').style.display='block';
    document.getElementById('output').innerHTML='';
    document.getElementById('turn').innerHTML='';
    for(let i=0;i<buttons.length;i++){
        buttons[i].setAttribute('value',' ');
    }
})