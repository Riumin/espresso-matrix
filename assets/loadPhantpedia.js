function loadXML(){
    var xmlDoc;
    try{ //IE
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    }catch(e){ //firefox,opera
    xmlDoc = document.implementation.createDocument("","",null);
    }
    try{
    xmlDoc.asyc = false; //是否异步调用
    xmlDoc.load("phantpedia.xml"); //文件路径
    }catch(e){ //chrome
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.open("GET","phantpedia.xml",false); //创建一个新的http请求，并指定此请求的方法、URL以及验证信息
    xmlDoc = xmlhttp.responseXML;
    }
    return xmlDoc;
    }