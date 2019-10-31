//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#BE2C07"; colorText="#000000"; colorSele="#FA1E05";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Muy bien.. Sigue asi.."; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkNA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["La etiqueta p, hace parte de las etiquetas de fundacion?","Se puede colocar una imagen como fondo de un div?","HTML 4 es es la ultima version de HTML?","CCS, se utiliza para crear enlaces a videos?","La etiqueta a, sirve para definir un enlace?","Es posible crear una tabla en HTML?"];
var answers1=["MXZlcmRhZGVybw","MGZhbHNv"];
var answers2=["MXZlcmRhZGVybw","MGZhbHNv"];
var answers3=["MUZhbHNv","MFZlcmRhZGVybw"];
var answers4=["MUZhbHNv","MENvcnJlY3Rv"];
var answers5=["MVZlcmRhZGVybw","MEZhbHNv"];
var answers6=["MVZlcmRhZGVybw","MEZhbHNv"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6];
var err=["Respuesta Incorrecta","","Respuesta Incorrecta.!","Respuesta Incorrecta.!","Respuesta Incorrecta.!","Respuesta Incorrecta.!"];
var ima=["","","","","",""];
var mp4=["","","","","",""];
var ogv=["","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad4_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
