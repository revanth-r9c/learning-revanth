function add(a,b){
    return a+b;
}

const delay = setTimeout(add(10,20),4000);
alert(delay);