var table = new sap.m.Table()
var json = {
  "data": [
    {
      "name": "Arghya Chowdhury", 
      "id": "713813173",
      "message": "NEW DELHI, Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "

    }, 
    {
      "name": "Veeranjaneyulu Kacherla", 
      "id": "1187040703",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states." 
    }, 
    {
      "name": "Subhobrata Dey", 
      "id": "10204822643314742",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "
    }, 
    {
      "name": "Ravi Ranjan", 
      "id": "100000069393711",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "
    }, 
    {
      "name": "Annesha Paul", 
      "id": "100000423766025",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "
    }, 
    {
      "name": "Kalyan Bhunia", 
      "id": "100000592945092",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "
    }, 
    {
      "name": "Ratna Saha", 
      "id": "100000745437682",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "
    }, 
    {
      "name": "DK Pathak", 
      "id": "784004758307795",
       "message": "NEW DELHI: Tuesday's bypoll results will come as a shock to the BJP not just be cause it lost several sitting seats in crucial states like Uttar Pradesh, Rajasthan and Gujarat, but also because the party has lost vote share in most states, not just in comparison to the Lok Sabha elections of April-May but even in relation to the performance in the last assembly polls in these states. "
    }, 
    ]};
var oJsonModel = new sap.ui.model.json.JSONModel();
oJsonModel.setData(json);
    
      table.addColumn(new sap.m.Column({width:"16em",hAlign:"Center",header: new sap.m.Label({design:"Bold", text:'Name'}), minScreenWidth:"Large", demandPopin:true}));
      table.addColumn(new sap.m.Column({width:"42em",hAlign:"Left",header: new sap.m.Label({design:"Bold", text:'Message Body'}), minScreenWidth:"Large", demandPopin:true}));
      
for(var i=0; i < json.data.length; i++){

var oTemp=new sap.m.ColumnListItem({
                    cells: [

                            new sap.m.VBox({
                              items:[new sap.m.Image({src:"img/logo.png"}),  new  sap.m.Text({text:"{name}"})]
                            }).addStyleClass("box"),
                            new sap.m.VBox({
                              items:[new  sap.m.Text({text:"{message}"}), new  sap.m.HBox({items:[new sap.m.Input({width: "36em", height: "6em"}),new sap.m.Button({text:"Send" ,height: "1.5em"})]})]
                            }).addStyleClass("box"),
                            
                            ]
                        });

}
oJsonModel.setData({items : json.data});
table.setModel(oJsonModel);
table.bindItems("/items", oTemp);


    table.placeAt("menu_box_messages");


   