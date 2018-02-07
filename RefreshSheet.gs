var RefreshSheet=new function(){ 
  
  /**
	 * Refresh Metadata&Nodes function     
     * @param  {string} auth token     
	 */  
  this.refreshMetadataAndNodeAllSpreadSheets=function(templateCompilerForCountry, sheetId) {      
    var isReset=false;            
    
    if(sheetId!='false'){
      Logger.log(templateCompilerForCountry);
      Logger.log(sheetId);
      //get specific country values
      var templateCompiler = templateCompilerForCountry;
      
      //read config from firebase
      var valuesNode = '';
      var valuesToBeWritten = '';
      
      for (var values in templateCompiler) {            
        valuesToBeWritten = templateCompiler[values];
        var spreadSheetById= SpreadsheetApp.openById( sheetId );
        var sheet = spreadSheetById.getSheetByName(values);
        //get TEMPLATE sheet
        var templateSheet = spreadSheetById.getSheetByName(Config.templatePrefix+values);
        
        
        for (var subNode in valuesToBeWritten) {
          //contain the range
          //valuesToBeWritten[subNode][0]
          //contain the value
          //valuesToBeWritten[subNode][1]
          
          if(isReset){
            //delete all the data/notes. The master will be restored
            sheet.getRange(valuesToBeWritten[subNode][0]).setValue('');
            templateSheet.getRange(valuesToBeWritten[subNode][0]).setValue('');
          }else{
            //set the values from Firebase
            sheet.getRange(valuesToBeWritten[subNode][0]).setValue(valuesToBeWritten[subNode][1])
            templateSheet.getRange(valuesToBeWritten[subNode][0]).setValue(valuesToBeWritten[subNode][1]);
          }
          
          
          
        }
        
      }     
    }
    
  }
  //---------------------------------------------------------
  // END  Refresh Metadata&Nodes function
  //---------------------------------------------------------  
  
  
}