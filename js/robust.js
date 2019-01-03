/*
 * Basic responsive mashup template
 * @owner Medeiros
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );
	
require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );
 
	
    /*try{
        var global = qlik.getGlobal(config);
        global.getAuthenticatedUser(function(reply){
            $("#user").replaceWith(reply.qReturn);
        });
    }catch(err){
         alert(err.message);
    }*/
    
	//callbacks -- inserted here --


	//open apps -- inserted here --
	var app = qlik.openApp('ZEBU CRM VIEW 2_3b.qvf', config);



	//get objects -- inserted here --
	app.getObject('KPI-01','evnNj');
	
	app.getObject('KPI-02','bxfrj');
	
	app.getObject('KPI-03','JQaqbM');
	
	
	
	
	
	app.getObject('CurrentSelections','CurrentSelections');
	
	

	//create cubes and lists -- inserted here --
	
	
} );


function chamaDash(){
    window.location = 'robust.html'
}
function chamaCRM(){
    window.location = 'crm.html';
}  
function chamaSAC(){
    window.location = 'sac.html';
} 
function chamaCobranca(){
    window.location = 'cobranca.html';
}  


function appCRM(){
    //$("#pseudo-frame").hide();
    $("#pseudo-frame").html("<iframe id='frame' src='http://localhost:4848/sense/app/C%3A%5CUsers%5Cjoaomedeiros%5CDocuments%5CQlik%5CSense%5CApps%5CCALEGARIS%20CRM%20VIEW%201_3N.qvf'></iframe>");
    $("#CurrentSelections").hide();
}   

function appSAC(){
    $("#pseudo-frame").html("<iframe src='http://localhost:4848/sense/app/C%3A%5CUsers%5Cjoaomedeiros%5CDocuments%5CQlik%5CSense%5CApps%5CCALEGARIS%20SAC%20VIEW%201_0.qvf'></iframe>");
    $("#CurrentSelections").hide();
}   

function appCobranca(){
    $("#pseudo-frame").html("<iframe src='http://localhost:4848/sense/app/C%3A%5CUsers%5Cjoaomedeiros%5CDocuments%5CQlik%5CSense%5CApps%5CCALEGARIS%20T%C3%ADtulos%20vCRM.qvf'></iframe>");
    $("#CurrentSelections").hide();
}     

function chamaSuporte(){
    $( "#pseudo-frame" ).html("<iframe src='http://189.2.151.226:8080/crw/'></iframe>", function() {
    });
}   

function chamaSobre(){
    $( "#pseudo-frame" ).html("<iframe src='https://www.vortice.inf.br/'></iframe>", function() {
    });
    $("#CurrentSelections").hide();
}