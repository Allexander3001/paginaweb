//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#C41F02"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien, Sigue asi!"; messageTime=""; messageError="Respuesta Incorrecta"; messageErrorG="Respuesta Incorrecta"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkNQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["RGVmaW5lIGxhIGxleWVuZGEgZGUgdW5hIHRhYmxh", "Q2FwdGlvbg"],["RGVmaW5lIHVuIGNvbnRlbmlkbyBjdWVycG8gZGUgbGEgdGFibGE", "VGJvZHk"],["RGVmaW5lIGxhcyBmaWxhcyBkZSB1bmEgdGFibGE", "VHI"],["RGVmaW5lIHVuIGFyZWEgZGVsIGRvY3VtZW50bw", "U2VjdGlvbg"],["RGVmaW5lIHVuIGNvbnRlbmlkbyBkZWwgYXJ0aWN1bG8", "QXJ0aWNsZQ"],["Q29sb2NhIGVsIHRleHRvIGVuIEN1cnNpdmE", "aQ"],["Q29sb2NhIGVsIFRleHRvIGVuIE5lZ3JpdGE", "Yg"]];
var c=[[30,7],[38,5],[29,2],[28,7],[32,7],[26,1],[26,1]];
var con1=["Define la leyenda de una tabla","Define un contenido cuerpo de la tabla","Define las filas de una tabla","Define un area del documento","Define un contenido del articulo","Coloca el texto en Cursiva","Coloca el Texto en Negrita"];
var con2=["Caption","Tbody","Tr","Section","Article","i","b"];
var sel1=""; join1=[]; join2=[];
