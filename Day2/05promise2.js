function buyPack() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if(Math.random()>0.5){
                resolve('买');
            }else {
                reject('不买');
            }
        }, Math.random() * 1000)

    });
}


buyPack().then(function (data) {
    console.log('data is ' + data);
}, function (err) {
    console.log('err is ' + err);
});

