//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=2;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#C54101"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Muy Bien sigue asi !"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["IURvY3R5cGU","VGl0bGU","Qm9keQ","Rm9udA","SQ","VmFy","Rm9ybQ","U2VsZWN0","SW5wdXQ"];
var img_G=["","","","","","","","",""];
var mp3_G=["","","","","","","","",""];
var ogg_G=["","","","","","","","",""];
var n_G=["MQ","MQ","MQ","Mg","Mg","Mg","Mw","Mw","Mw"];
var e_G=["Incorrecto.!","Incorrecto.!","Incorrecto.!","Incorrecto.!","Incorrecto.!","Incorrecto.!","Incorrecto.!","Incorrecto.!","Incorrecto.!"];
var mp4_G=["","","","","","","","",""];
var ogv_G=["","","","","","","","",""];
var txtGr=["Etiquetas de Fundacion","Etiquetas de  formato","Etiquetas de formulario "];
var imgGr=["","",""];
var mp3Gr=["","",""];
var oggGr=["","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="";
var dirMedia="actividad3_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="YWN0aXZpZGFkMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
