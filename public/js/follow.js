var table = new sap.m.Table()
var urlparams = window.location.href.split('?')[1];
var userId = urlparams.split('=')[1];
var xmlhttprequest = new XMLHttpRequest();
xmlhttprequest.open('GET','http://localhost:3000/getFollow?from=true&user=' + userId,false);
xmlhttprequest.send();
var responseJson1 = JSON.parse(xmlhttprequest.responseText);
var xmlhttprequest1 = new XMLHttpRequest();
xmlhttprequest1.open('GET','http://localhost:3000/getFavorite?from=true&user=' + userId,false);
xmlhttprequest1.send();
var responseJson2 = JSON.parse(xmlhttprequest.responseText);
var data = [];
for(var count=0;count<responseJson1.success.length;count++){
    data.push(responseJson1.success[count]);
}
for(var count=0;count<responseJson2.success.length;count++){
    data.push(responseJson2.success[count]);
}
var json = {
  "data": data 
};
var oJsonModel = new sap.ui.model.json.JSONModel();
oJsonModel.setData(json);
    
    	table.addColumn(new sap.m.Column({width:"16em",hAlign:"Center",header: new sap.m.Label({design:"Bold", text:'Name'}), minScreenWidth:"Large", demandPopin:true}));
    	table.addColumn(new sap.m.Column({width:"32em",hAlign:"Center",header: new sap.m.Label({design:"Bold", text:'About'}), minScreenWidth:"Large", demandPopin:true}));
      table.addColumn(new sap.m.Column({width:"10em",hAlign:"Center",header: new sap.m.Label({design:"Bold", text:'Follow'}), minScreenWidth:"Large", demandPopin:true}));
    	
for(var i=0; i < json.data.length; i++){

var oTemp=new sap.m.ColumnListItem({
										cells: [

										        new sap.m.VBox({
										        	items:[new sap.m.Image({src:"img/logo.png"}),  new  sap.m.Text({text:"{from}"})]
										        }).addStyleClass("box"),
										        new sap.m.VBox({
										        	items:[new  sap.m.Text({text:"{to}"})]
										        }).addStyleClass("box"),
                            new sap.m.VBox({
                              items:[new  sap.m.Image({src:"images/favourite.png"})]
                            }).addStyleClass("box"),
										        
										        ]
										    });

}
oJsonModel.setData({items : json.data});
table.setModel(oJsonModel);
table.bindItems("/items", oTemp);


    table.placeAt("menu_box_follow");


   