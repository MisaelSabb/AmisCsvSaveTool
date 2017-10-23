var Utility=new (function(){
  //------------------------------------------------------------------------------------------------------------------
  /**
  * create Amisi menu
  */
  //------------------------------------------------------------------------------------------------------------------
  this.createMenu = function(){
    
    //create the menu voice
    SpreadsheetApp.getUi()
    .createMenu('AMIS SECRETARIAT')
    .addItem('Open', 'openSidebar')
    .addToUi()
  }
  //------------------------------------------------------------------------------------------------------------------
  // END --  create menu
  //------------------------------------------------------------------------------------------------------------------
  
  //------------------------------------------------------------------------------------------------------------------
  /**
  * open amis Sidebar
  */
  //------------------------------------------------------------------------------------------------------------------
  this.openSidebar = function(){
    dbName=Config.dbName;
    apiKey=Config.apiKey;
    //countryCell=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(Config.Sheet.countryCell).getValue();
    //datasourceCell=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(Config.Sheet.datasourceCell).getValue();
    
    countryCell='Save data tool';
    datasourceCell='';
    
    devMode=Config.devMode;
    var html = HtmlService.createTemplateFromFile('menu')
    .evaluate()
    .setTitle('SAVE DATA TOOL')
    .setWidth(500)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .showSidebar(html);
  }
  //------------------------------------------------------------------------------------------------------------------
  // END --  open amis Sidebar
  //------------------------------------------------------------------------------------------------------------------
  
  
  /**
  * includes html files into an html
  * @param  {string} filename
  * @return {string}          the content
  */
  this.include=function(filename) {
    return HtmlService.createTemplateFromFile(filename).evaluate().getContent();
  };
  
   /**
  * workaround that allows you to call any library function if you paste in this one generic wrapper function. Then you can call this from the spreadsheet.
  * For example, if I had a library called MyLib with a function add(x, y) (pretend x is in cell A1 and y is in cell A2) I could call it like this: =LIB_FUNC("MyLib", "add", A1, A2).
  * @param       {string} functionName
  * @constructor
  */
  this.LIB_FUNC=function(functionName) {
    var currFn=this;
    var extraArgs = [];
    var fnArr=functionName.split(".");

    var fnArr_length=fnArr.length;
    for (var i = 0; i<fnArr_length; i++) {
      currFn=currFn[fnArr[i]];

      if(!currFn) throw "No such function: " + fnArr[i];
    }

    if (arguments.length > 1) {
      extraArgs = Array.apply(null, arguments).slice(1);
    }

    return currFn.apply(this, extraArgs);
  };
  
  this.test=function(filename) {
    Browser.msgBox('test');
  };
  
   /**
  * return the saving node for firebase
  * @param  {Spreadsheet} the spreadsheet object (optional)
  * @return {string} the firebase node where to save data
  */
  this.getSavingNode = function( spreadsheet ) {
    spreadsheet = spreadsheet || SpreadSheetCache.getActiveSpreadsheet();
    //get the spreadsheet name lowercased
    var name = spreadsheet.getName().toLowerCase();  
    //look into 
    for(var key in Config.fileNameDataSaveNodeMapping){    
      if(name.indexOf(key) > -1)
      {
        return Config.fileNameDataSaveNodeMapping[key]+'/';
      }      
    }    
  };
  
});