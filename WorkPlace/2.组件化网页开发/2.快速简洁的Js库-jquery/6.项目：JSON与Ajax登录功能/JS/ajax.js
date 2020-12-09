var $ = {
    ajax:function(options){
        var xhr = null,
            url = options.url,
            method = options.method || "get",
            async = typeof(options.async) === "undefined" ? true : options.async,
            data = options.data || null,
            callback = options.success;
            params = "";
        //将data的对象字面量形式转换成字符串形式
        if (data) {
            for (var i in data) {
                params += i + '=' + data[i] + '&';
            }
            params = params.replace(/&$/, "");
        }
        //根据method的值改变url
        if (method === "get") {
            url += '?' + params;
        }
        //1.创建XMLHttpRequest对象
        if (typeof XMLHttpRequest != undefined) {
            xhr = new XMLHttpRequest();
        } else if (typeof ActiveXObject != undefined) {
            //将所有可能出现的ActiveObject版本放在一个数组中
            var xhrArr = ['Miscroft.XMLHTTP', 'MSXML2.XMLHTTP.6.0',
                'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0',
                'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP.2.0'
            ]
            //遍历创建XMLHttpRequest对象
            var len = xhrArr.length;
            for (var i = 0; i < len; i++) {
                try {
                    xhr = new ActiveXObject(xhrArr[i]);
                    break;
                } catch (e) {};
            }
        } else {
            throw new Error('No XHR Object availbel');
        }
        //响应对象变化的变化函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    callback && callback(JSON.parse(xhr.responseText));
                }
            }
        }
        //创建请求
        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }

}