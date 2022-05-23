function Fun1()
{
    alert("HOŞGELDİNİZ, SAYFA YÜKLENMESİ BAŞARILI BİR ŞEKİLDE GERÇEKLEŞTİ")
}
function Fun2(){
    var d = new Date();
var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.getElementById("gun").innerHTML = gunler[d.getDay()];
}

function Fun3()
{
    KayanYazi=function(nesne,zaman)
    {

        let yaziNesne=nesne;
       
       setInterval(function(){
           let yaz= yaziNesne.innerHTML;
           let harf= yaz.substring(0,1);

           let kalan = yaz.substring(1,yaz.length);
           kalan=kalan+harf

           yaziNesne.innerHTML=kalan;
       }, zaman);
   }
       
   var nesne=document.getElementById("yaz"); 
   KayanYazi(nesne,750);  

}
function Fun4()
{
		alert(Math.random());
}
function Fun5()
{
    var dizi=["#D24D57","#e74c3c","#f1c40f","#2c3e50","#8e44ad","#bdc3c7","#1abc9c","#3498db","#95a5a6"];
var renk=document.getElementById("btn2");
 
 
renk.onclick=function(){
 
var rasgele=Math.floor(Math.random()*dizi.length);
 
document.body.style.backgroundColor=dizi[rasgele];

}
}

function Fun6(){

    var kutu=document.getElementById("kutucuk");
kutu.style.position="absolute"; 
window.onmousemove=function(e){
kutu.style.left=e.clientX+"px";
kutu.style.top=e.clientY+"px";
}
}

function Fun7(){
    var KAEU=document.getElementById("KAEU");
	KAEU.onclick=function(){
        
      window.location.replace("https://www.ahievran.edu.tr")
        
    }
}
function Fun8()
{
   
    var metin=window.prompt("Metin Girin");
    var adet=window.prompt("Metin kaç defa yazdırılsın?");
    for(var i=1;i<=adet;i++)
        {
            document.write(metin+"<br>")
        }

        setInterval(()=>window.location.reload(false),2000);
        
}
function fun9(){
    alert("Sayfamız 1 dakikada bir kendini yeniler!")
    setInterval(()=>window.location.reload(false),60000);
}

function Fun10(){
   
    var yukseklik=window.prompt("Yüksekliği Girin");
var genislik=window.prompt("Genişliği Girin");
for (var i = 1; i <= yukseklik; i++)
            {
                for (var j = 1; j <= genislik; j++)
                {
                    if (i == 1 || i == yukseklik)
                        document.write("*");
                    else
                        if (j == 1 || j == genislik)
                            document.write("*");
                        else
				{
					document.write("&nbsp;");
					document.write("&nbsp;");
				}
                            
                }
                document.write("<br>");
            }
            setInterval(()=>window.location.reload(false),2000);
}

function jq1(){

    $(document).ready(function(){
        var x = 0;
        $("#sol").click(function(){
            x=x-10;
            $("#resim").css("left",x+"px");
        });
        $("#sag").click(function(){
            x=x+10;
            $("#resim").css("left",x+"px");
        });
    });
}   

 function jq2(){

    $( function() {
        $( "#dialog" ).dialog();
      } );
 }

 function jq3(){

    $( function() {
        $( "#btnn" ).on( "click", function() {
            
          $( ".anima" ).switchClass( "anima", "nonAnima", 1000 );
          $( ".nonAnima" ).switchClass( "nonAnima", "anima", 1000 );
        });
      } );
 }





 