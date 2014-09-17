var feeding = function(username,userid){
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET','http://localhost:3000/showStatus?username=' + userid,false);
    xmlhttprequest.onreadystatechange = function(){
	   if(xmlhttprequest.readyState==4 && xmlhttprequest.status==200){
           var responseJSON = JSON.parse(xmlhttprequest.responseText);
            var json = responseJSON.success;  
            var renderHTML = "";
            for(var count=0; count < json.length; count++)
            {
                if(json[count].username!=userid){
                    var xmlhttprequest4 = new XMLHttpRequest();
                    xmlhttprequest4.open('GET','http://localhost:3000/getUser?name=' + json[count].username,false);
                    xmlhttprequest4.onreadystatechange = function(){
                        if(xmlhttprequest4.readyState==4 && xmlhttprequest4.status==200){
                            var responseJSON2 = JSON.parse(xmlhttprequest4.responseText);
                            var name = responseJSON2.success[0].name;
                            var xmlhttprequest5 = new XMLHttpRequest();
                            xmlhttprequest5.open('GET','http://localhost:3000/getUser?name=' + json[count].for,false);
                            xmlhttprequest5.send();
                            var responseJSON3 = JSON.parse(xmlhttprequest5.responseText);
                            var name1 = responseJSON3.success[0].name;
                            renderHTML = renderHTML + '    <h3>'+name+'</h3>';
                            renderHTML = renderHTML + '    <h3>'+name1+'</h3>';
                            renderHTML = renderHTML + '    <h3>'+json[count].status+'</h3>';
                            renderHTML = renderHTML + '     <div class="menu_box_lists">';
                            renderHTML = renderHTML + '   </div>';
                        }
                    };
                    xmlhttprequest4.send();
                }
            }
            document.getElementById('feeder').innerHTML = renderHTML;
        }
    };
    xmlhttprequest.send();
};