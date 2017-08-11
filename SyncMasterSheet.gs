var SyncMasterSheet=new function(){ 
  //---------------------------------------------------------
  /**
	 * Saving Sheet Data function     
     * @param  {string} auth token     
	 */
  //---------------------------------------------------------
  this.startSync=function(userToken) {
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();    
    
    //this range rappresent the whole sheet
    var range = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());    
    
    //get all sheet data
    var excelData = range.getValues();
    
    //node where save
    var saveNode = 'dataFromCsvTool/';
    
    //call the library to store data into FIREBASE
    FirebaseConnector.writeOnFirebase(excelData,saveNode,userToken);
  }
  //---------------------------------------------------------
  // END Saving Sheet Data function
  //---------------------------------------------------------
  
  
  //---------------------------------------------------------
  /**
	 * Fetch Sheet Data  from FIREBASE function     
     * @param  {string} auth token     
	 */
  //---------------------------------------------------------
  this.startFetch=function(userToken) {
  }
  //---------------------------------------------------------
  // END Fetch Sheet Data from FIREBASE function
  //---------------------------------------------------------
  
  
}