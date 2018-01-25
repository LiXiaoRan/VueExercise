/**
 * 自己封装的ajax
 * @param url 默认为空
 * @param type 如果不传值的话，默认为get
 * @param dataType 默认为json
 */
function ajax({url = '', type = 'get', dataType = 'json'}) {

    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        // xhr.responseType = dataType;
        xhr.onload = function () {//xhr.readState==4 xhr.status==200
            //成功
            if (xhr.status === 200)
                resolve(xhr.response);
            else
                reject('not found');
        };
        xhr.onerror = function (err) {
            //失败
            reject(err);
        };
        xhr.send();
    });
}

/*ajax({url: './file/carts.json'}).then(function (data) {


}, function (err) {
    console.log('err is ' + err);
});*/


/*ajax的写法
$.ajax({
    url:'',
    data:{},
    type:'get',
    dataType:'json'
});*/
