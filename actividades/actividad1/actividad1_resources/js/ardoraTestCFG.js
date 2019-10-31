//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#1F200B"; colorText="#070707"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy Bien!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cual es la etiqueta en HTML para colocar la letra cursiva ?","¿Cuál es el código HTML correcto para un salto de línea?","¿Cuál es el código HTML correcto para el siguiente atributo y su valor?","En HTML, la etiqueta caption se emplea para?","En HTML, la etiqueta p se utiliza para?"];
var answers1=["MWk","MGNlbnRlcg","MGE","MGltZw"];
var answers2=["MWJy","MS9icg","MGNlbnRlcg","MGRpdg"];
var answers3=["MXdpZHRoPSI4MCI","MFdJRFRIPSI4MCI","MHdpZHRoPTgw","MFdJRFRIPTgw"];
var answers4=["MURlZmluaXIgZWwgdO10dWxvIGRlIHVuYSB0YWJsYQ","MERlZmluaXIgZWwgdO10dWxvIGRlIGxhIHDhZ2luYQ","MERlZmluaXIgZWwgdO10dWxvIGRlIHVuYSBpbWFnZW4","MExhcyBhbnRlcmlvcmVzIHJlc3B1ZXN0YXMgbm8gc29uIGNvcnJlY3Rhcw"];
var answers5=["MURlZmluaXIgdW4gcOFycmFmbw","MERlZmluaXIgdW4gcHVudG8gZGUgZGVzdGlubyBwYXJhIHVuIGhpcGVydu1uY3Vsbw","MEluc2VydGFyIHVuIHNhbHRvIGRlIGztbmVh","MExhcyBhbnRlcmlvcmVzIHJlc3B1ZXN0YXMgbm8gc29uIGNvcnJlY3Rhcw"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["Respuesta Incorrecta","Respuesta Incorrecta!","Respuesta Incorrecta","Respuesta Incorrecta","Respuesta Incorrecta"];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad1_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
