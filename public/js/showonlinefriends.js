var xmlhttprequest2 = new XMLHttpRequest();
xmlhttprequest2.open('GET','http://localhost:3000/getFollow?from=true&user=deysub',true);
xmlhttprequest2.onreadystatechange = function(){
    if(xmlhttprequest2.readyState==4 && xmlhttprequest2.status==200){
        var responseJSON = JSON.parse(xmlhttprequest2.responseText);
        var htmlRes = '<ul>';
        for(var count=0;count<responseJSON.success.length;count++){
            var name = '';
            var xmlhttprequest4 = new XMLHttpRequest();
            xmlhttprequest4.open('GET','http://localhost:3000/getUser?name=' + responseJSON.success[count].to,false);
            xmlhttprequest4.onreadystatechange = function(){
                if(xmlhttprequest4.readyState==4 && xmlhttprequest4.status==200){
                    var responseJSON2 = JSON.parse(xmlhttprequest4.responseText);
                    name = responseJSON2.success[0];
                }
            };
            xmlhttprequest4.send();
            var xmlhttprequest3 = new XMLHttpRequest();
            xmlhttprequest3.open('GET','http://localhost:3000/showStatus?username=' + responseJSON.success[count].to,false);
            xmlhttprequest3.onreadystatechange = function(){
                if(xmlhttprequest3.readyState==4 && xmlhttprequest3.status==200){
                    var responseJSON1 = JSON.parse(xmlhttprequest3.responseText);
                    htmlRes = htmlRes + '<li id="button" onclick="feeding(\'' + name.username + '\',\'' + responseJSON.success[count].from + '\')" name="toggle" value="toggle"><a href="#" ><span>' + name.name + '</span><label class="digits active">' + responseJSON1.success.length + '</label><div class="clear"></div></a></li>';
                }
            };
            xmlhttprequest3.send();
        }
        htmlRes = htmlRes + '</ul>';
        document.getElementById("menu1").innerHTML = htmlRes;
        debugger;
    }
};
xmlhttprequest2.send();