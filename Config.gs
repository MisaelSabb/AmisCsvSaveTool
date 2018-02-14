/**
 * app configuration
 * @type {Object}
 */
var Config={
	/**
	 * dbName on firebase
	 * @type {String}
	 */
	dbName:"",

	/**
	 * apiKey on firebase
	 * @type {String}
	 */
	apiKey: "",

	/**
	 * spreadsheet config
	 * @type {Object}
	 */
	Sheet:{
		countryCell:"B1",
		datasourceCell:"B3",
        commodityCell: "B2"
	},
	/**
	 * developer mode
	 * @type {bool}
	 */
	devMode:false,

	/**
	 * email address for errors informations
	 * @type {String}
	 */
	errorEmail:"",

	/**
	 * the keyword to recognize the master spreadsheet by the filename
	 * @type {String}
	 */
	masterKeyword:"MASTER",

	/**
	 * the keyword to recognize the template spreadsheet by the filename
	 * @type {String}
	 */
	fileNameDataSaveNodeMapping:{
      crop:"dataFromCsvTool",
      datasource:"dataFromDataSourceTool" ,       
      footnotestool: "dataFromFootNotesTool"
	},

    /**
	 * the keyword to recognize the template spreadsheet by the filename
	 * @type {String}
	 */
	templatePrefix:"Template_"

};