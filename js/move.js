function getStyle(obj,attr){     //获取非行间样式函数
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
function move(obj,json,fn){      //主函数
	clearInterval(obj.time);	//停止上一次定时器
	obj.time=setInterval(function(){     //开始定时器时。要注意防止多个对象同时用一个move()，同一个定时器，保持每一个物体运动的定时器。
		var bStop=true;  //判断同时运动标志
		for(var attr in json){   
			
			var iCur=0; //创建一个变量
			if(attr=='opacity'){
				//针对在FF中opacity属性值为浮点数值问题，将属性值 四舍五入、转换成浮点型。乘以100，使opacity属性值与IE统一为百分数
				iCur=Math.round(parseFloat(getStyle(obj,attr))*100); 
			}else{
				iCur=parseInt(getStyle(obj,attr));
			}
			var iSpeed=(json[attr]-iCur)/10;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			if(iCur!=json[attr]){
				bStop=false;
			}
			if(attr=='opacity'){
				iCur+=iSpeed;
				obj.style.filter='alpha(opacity:'+iCur+')';
				obj.style.opacity=iCur/100;
			}else{
				obj.style[attr]=iCur+iSpeed+'px';
			}
			if(bStop){
				clearInterval(obj.time);
				if(fn)fn();
			}
		}
	
	},30);

}