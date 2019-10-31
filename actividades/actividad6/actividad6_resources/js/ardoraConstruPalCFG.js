//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=2;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#C41502"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy Bien Sigue Asi"; messageTime=""; messageError="Respuesta Incorrecta!"; messageErrorG="Respuesta Incorrecta!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["SU1H","VEFCTEU","QklH","TEk","T0w","U1VC","UA","VFQ","VUw","VQ"];var cp_ima=["","","","","","","","","",""];var cp_mp3=["","","","","","","","","",""];var cp_ogg=["","","","","","","","","",""];var cp_que=["ZW5sYWNlIGRlIGltYWdlbg","Y3JlYXIgdGFibGE","QXVtZW50YSBlbCB0YW1h8W8gZGUgZnVlbnRlICsx","RWxlbWVudG8gZGUgbGEgbGlzdGE","TGlzdGEgT3JkZW5hZGEgKE51bWVyYWRhKQ","VGV4dG8gZW4gSW5kaWNl","UGFycmFmbw","RXN0aWxvIDp0ZXh0byBtYXF1aW5hIGRlIGVzY3JpYmly","TGlzdGEgbm8gb3JkZW5hZGE","U3VicmF5YSBlbCB0ZXh0bw"];var cp_num=[3,5,3,2,2,3,1,2,2,1];
var wordsGame="YWN0aXZpZGFkNg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
