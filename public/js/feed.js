var xmlhttprequest = new XMLHttpRequest();
xmlhttprequest.open('GET','http://localhost:3000/showStatus?username=deysub',true);
xmlhttprequest.send();
xmlhttprequest.onreadystatechange = function(){
	if(xmlhttprequest.readystate==4){
var responseJSON = JSON.parse(xmlhttprequest.responseText);
var json = {
  "data": [
    {
      "name": "Arghya Chowdhury", 
      "id": "713813173"
    }, 
    {
      "name": "Veeranjaneyulu Kacherla", 
      "id": "1187040703"
    }, 
    {
      "name": "Subhobrata Dey", 
      "id": "10204822643314742"
    }, 
    {
      "name": "Ravi Ranjan", 
      "id": "100000069393711"
    }, 
    {
      "name": "Annesha Paul", 
      "id": "100000423766025"
    }, 
    {
      "name": "Kalyan Bhunia", 
      "id": "100000592945092"
    }, 
    {
      "name": "Ratna Saha", 
      "id": "100000745437682"
    }, 
    {
      "name": "DK Pathak", 
      "id": "784004758307795"
    }, 
    ]};
for(var i=0; i < json.data.length; i++)
{
document.write('<div class="wrap">');
document.write('<div class="column_right">');
document.write('  <div class="menu_box_feed">');
document.write('    <h3>'+json.data[i].name+'</h3>');
document.write('    <h3>'+json.data[i].name+'</h3>');
document.write('    <h3>'+json.data[i].name+'</h3>');
document.write('    <h3>'+json.data[i].name+'</h3>');
document.write('     <div class="menu_box_lists">');
document.write('   </div>');
document.write('   </div>');
document.write(' </div>');
document.write('</div>');

}
}
};



