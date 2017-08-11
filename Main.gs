function onOpen(){
  
  //build the menu
  Utility.createMenu();
  
  //alert for amis menu
  if (!Config.devMode) {
  Browser.msgBox('To Open SAVE DATA TOOL click on "SAVE DATA TOOL" in the menu');
  }
  
}  
function onEdit(e){}
function LIB_FUNC(){AmisLib.Utility.LIB_FUNC.apply(this, arguments);}

function openSidebar(){
  //create sidebar
  Utility.openSidebar();
}

function test(){
  //this function split one column with values like 'december/november' into two columns like 'december' and 'november'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var values1 = sheet.getRange('K:K').getValues();
  var values2 = sheet.getRange('K:K').getValues();
 // sheet.insertColumns(7,2);
 
  for (var i=1; i < values1.length ; i++){
    
    if(values1[i]!=''){
      sheet.getRange('M'+(i+1)).setValue(JSON.stringify(values1[i]).split('/')[1].replace('"]',''))
      sheet.getRange('L'+(i+1)).setValue(JSON.stringify(values1[i]).split('/')[0].replace('["',''))
    }
  //  if(i==5)
   //   break;
   // res.push(splitted[0]);
  }
  //Browser.msgBox(res);
  
}