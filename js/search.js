window.onscroll=function(){
	var oForm=document.getElementById('form');
	var oScroll=document.documentElement.scrollTop || document.body.scrollTop;
	if(oScroll>=800){

		move(oForm,{top:0});

	}else if(oScroll<500){
		move(oForm,{top:-42});
	}
	// 菜单栏
	var oMenu=document.getElementById('menu');
	if(oScroll>=1900){
		// oMenu.style.display='block';
		move(oMenu,{opacity:100});
	}else if(oScroll<1850){
		// oMenu.style.display='none';
		move(oMenu,{opacity:0});
	}
}
// 轮播图
window.onload=function(){
	var oDiv=document.getElementById('div');
	var aLi=oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var aUl=oDiv.getElementsByTagName('ul')[0];
	var aLi1=aUl.getElementsByTagName('li');
	var oleft=document.getElementById('left');
	var oleft1=document.getElementById('left1');
	var now=0;
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
				aLi[i].onmouseover=function(){
					now=this.index;
					smove();
					smove1();
				}
		
	}
	function smove1(){
		for(var i=0;i<aLi1.length;i++){
			aLi1[i].className='';
			
		}
		aLi1[now].className='list';
	
	}

	function smove(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';
			move(aLi1[i],{opacity:0});
			
		}
		aLi[now].className='active';
		move(aLi1[now],{opacity:100});
		
	}
	function next(){
		now++;
		if (now==aLi.length){
			now=0;
		}
		smove();
		smove1();
	}

	function next1(){
		now--;
		if (now<0){
			now=aLi1.length-1;
		}
		smove();
		smove1();
	}
	var time=setInterval(next,4000);
	
	oDiv.onmouseover=function(){
		clearInterval(time);
		oleft.style.display='block';
		oleft1.style.display='block';
	}
	oDiv.onmouseout=function(){
		time=time=setInterval(next,4000);
		oleft.style.display='none';
		oleft1.style.display='none';
	}
	oleft.onclick=function(){
		clearInterval(time);
		next();
	}
	oleft1.onclick=function(){
		clearInterval(time);
		next1();
	}

	// 倒计时

	var oHour=document.getElementById('hour');
	var oMinute=document.getElementById('minute');
	var oScend=document.getElementById('scend');
	timer();
	function timer(){
		var oDate=new Date();
		var end=new Date('2018/4/29,00:00:00');
		var changeT=parseInt((end.getTime()-oDate.getTime())/1000);
		var s=parseInt(changeT%60);
		var m=parseInt(changeT/60%60);
		var h=parseInt(changeT/(60*60)%24);
		oScend.innerHTML=s;
		if(s<10){
			oScend.innerHTML='0'+s;
		}
		oMinute.innerHTML=m;
		if(m<10){
			oMinute.innerHTML='0'+m;
		}
		oHour.innerHTML=h;
		if(h<10){
			oHour.innerHTML='0'+h;
		}
		
	}

	var times=setInterval(timer,1000);



	//选项卡
	var oCard=document.getElementById('card');
	var oCard1=document.getElementById('card1');
	var oCard2=document.getElementById('card2');
	var oLib=document.getElementById('lib');
	var oLib1=document.getElementById('lib1');
	oCard.onmouseover=function(){
		move(oCard1,{left:55});
		oLib1.style.display='block';
		oLib.style.display='none';
	}
	oCard2.onmouseover=function(){
		move(oCard1,{left:0});
		oLib1.style.display='none';
		oLib.style.display='block';
	}


	var oFour1=document.getElementById('four-1');
	var oU=oFour1.getElementsByTagName('ul')[0];
	var aL=oU.getElementsByTagName('li');
	var oFour2=document.getElementById('four-2');
	var aIm=oFour2.getElementsByTagName('img');

	for(var i=0;i<aL.length;i++){
		aL[i].index=i;
		aL[i].onmouseover=function(){
			aIm[this.index].style.display='block';
		}
		aL[i].onmouseout=function(){
			aIm[this.index].style.display='none';
		}
	}

}

