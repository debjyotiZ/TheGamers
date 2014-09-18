if(window.location.href.indexOf('?')!=-1){
    var urlparams = window.location.href.split('?')[1];
    var userId = urlparams.split('=')[1];
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET','http://localhost:3000/getUser?name=' + userId,true);
    xmlhttprequest.onreadystatechange = function(){
        if(xmlhttprequest.readyState==4 && xmlhttprequest.status==200){
            var responseJSON = JSON.parse(xmlhttprequest.responseText);
            var renderHTML = '';
            renderHTML = renderHTML + '    <h3><p>'+responseJSON.success[0].username+'</p>';
            renderHTML = renderHTML + '    <p>'+responseJSON.success[0].usertype+'</p>';
            renderHTML = renderHTML + '    <p>'+responseJSON.success[0].name+'</p></h3>';
            renderHTML = renderHTML + '     <div class="menu_box_lists">';
            renderHTML = renderHTML + '   </div>';

            document.getElementById('feeder').innerHTML = renderHTML;
        }
    };
    xmlhttprequest.send();
}else{
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET','http://localhost:3000/getUser?name=deysub',true);
    xmlhttprequest.onreadystatechange = function(){
        if(xmlhttprequest.readyState==4 && xmlhttprequest.status==200){
            var responseJSON = JSON.parse(xmlhttprequest.responseText);
            var renderHTML = '';
            renderHTML = renderHTML + '    <h3><p>'+responseJSON.success[0].username+'</p>';
            renderHTML = renderHTML + '    <p>'+responseJSON.success[0].usertype+'</p>';
            renderHTML = renderHTML + '    <p>'+responseJSON.success[0].name+'</p></h3>';
            renderHTML = renderHTML + '     <div class="menu_box_lists">';
            renderHTML = renderHTML + '   </div>';

            document.getElementById('feeder').innerHTML = renderHTML;
        }
    };
    xmlhttprequest.send();
}