window.onload=function(){
	function $(id){
			return document.getElementById(id);
		}
		function fn(){
			var time=new Date();
			var ms=time.getMilliseconds();
			var s=time.getSeconds()+ms/1000;
			var m=time.getMinutes()+s/60;
			var h=time.getHours()+m/60;
			$("s").style.transform="rotate("+s*6+"deg)";
			$("m").style.transform="rotate("+m*6+"deg)";
			$("h").style.transform="rotate("+h*30+"deg)";
		}
		setInterval(fn,1000)
}
