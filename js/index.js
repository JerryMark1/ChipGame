var main = document.getElementById('main');
var next = document.getElementById('next');
var card = document.getElementById('card');

var ismove = false ;
var issell = false ;
var iscopy = false ;
var ismax = false ;
var ishundred = false ;
var isthousand =false ;
// var divs = document.createElement("div");
// divs.style.width = "50px";
// divs.style.height = "50px";
// divs.style.background = "url(images/chip1/chip1.png) 4px 4px no-repeat";
// main.appendChild(divs);

//这里是生成隐形的button 一共64个
var mainVessel = document.createElement("div");
mainVessel.id = "chipswrap";
mainVessel.style.overflow = "hidden";
for(var i = 0 ; i < 64 ; i ++){
	var buttonList = document.createElement("div");
	buttonList.style.width = "50px";
	buttonList.style.height = "50px";
	buttonList.style.float = "left";
	// buttonList.style.background = "url(images/chip1/chip1.png) 4px 4px no-repeat";
	buttonList.style.background = "url() 4px 4px no-repeat";
	mainVessel.appendChild(buttonList);
}

main.appendChild(mainVessel);

var chips = document.getElementById("chipswrap").getElementsByTagName('div');

var warehouseArr = [];
for(var i = 1 ; i <= 64 ; i ++){
	chips[i-1].index = i ;
	chips[i-1].isClick = false ;
	chips[i-1].onclick = function (){
		if(this.isClick == false){
			// getPosition(this.index);
			console.log(getPosition(this.index));
			var aa = nexts[0].style.background;
			var bb ;
			bb = aa.slice(aa.indexOf("chip")+10,aa.indexOf("chip")+15);
			var cc = parseInt(bb);
			chips[this.index-1].style.background = "url(images/chip1/chip"+ cc +".png) 4px 4px no-repeat";
			nextwrap.removeChild(nexts[0]);
			var nextList = document.createElement("div");
			nextList.style.width = "50px";
			nextList.style.height = "50px";
			nextList.style.float = "left";
			// nextList.style.background = "url(images/chip1/chip1.png) 4px 4px no-repeat";
			nextList.style.background = "url(images/chip1/chip"+ randomNext() +".png) 4px 4px no-repeat";
			// nextList.style.background = "url(images/chip1/chip"+ 1 +".png) 4px 4px no-repeat";
			nextVessel.appendChild(nextList);
			// nextwrap.appendChild();
			this.isClick = true ;
		}else if(this.isClick == true){
			if(isCard()){
				console.log("合成！");
				// var binaryTree = [] ;
				// while(){

				// }
				if((this.index-1 > 8 && this.index-1 <= 14) || (this.index-1 > 16 && this.index-1 <= 22) || (this.index-1 > 24 && this.index-1 <= 30) || (this.index-1 > 32 && this.index-1 <= 38) || (this.index-1 > 40 && this.index-1 <= 46) || (this.index-1 > 48 && this.index-1 <= 54)){
					// console.log("8个！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-9,c8);
					judge((this.index-1)-8,c8);
					judge((this.index-1)-7,c8);
					judge((this.index-1)-1,c8);
					judge((this.index-1)+1,c8);
					judge((this.index-1)+7,c8);
					judge((this.index-1)+8,c8);
					judge((this.index-1)+9,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if((this.index-1 > 0 && this.index-1 <= 6)){
					// console.log("上6个！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-1,c8);
					judge((this.index-1)+1,c8);
					judge((this.index-1)+7,c8);
					judge((this.index-1)+8,c8);
					judge((this.index-1)+9,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if((this.index-1 > 56 && this.index-1 <= 62)){
					// console.log("下6个！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-1,c8);
					judge((this.index-1)+1,c8);
					judge((this.index-1)-9,c8);
					judge((this.index-1)-8,c8);
					judge((this.index-1)-7,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if((this.index-1 == 8) || (this.index-1 == 16) || (this.index-1 == 24) || (this.index-1 == 32) || (this.index-1 == 40) || (this.index-1 == 48)){
					// console.log("左6个！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-8,c8);
					judge((this.index-1)-7,c8);
					judge((this.index-1)+1,c8);
					judge((this.index-1)+8,c8);
					judge((this.index-1)+9,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if((this.index-1 == 15) || (this.index-1 == 23) || (this.index-1 == 31) || (this.index-1 == 39) || (this.index-1 == 47) || (this.index-1 == 55)){
					// console.log("右6个！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-9,c8);
					judge((this.index-1)-8,c8);
					judge((this.index-1)-1,c8);
					judge((this.index-1)+7,c8);
					judge((this.index-1)+8,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if(this.index-1 == 0){
					// console.log("左上！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)+1,c8);
					judge((this.index-1)+8,c8);
					judge((this.index-1)+9,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if(this.index-1 == 7){
					// console.log("右上！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-1,c8);
					judge((this.index-1)+7,c8);
					judge((this.index-1)+8,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if(this.index-1 == 56){
					// console.log("左下！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-8,c8);
					judge((this.index-1)-7,c8);
					judge((this.index-1)+1,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}else if(this.index-1 == 63){
					// console.log("右下！");
					var a8 = chips[this.index-1].style.background;
					var b8 ;
					b8 = a8.slice(a8.indexOf("chip")+10,a8.indexOf("chip")+15);
					var c8 = parseInt(b8);
					judge((this.index-1)-9,c8);
					judge((this.index-1)-8,c8);
					judge((this.index-1)-1,c8);
					if(warehouseArr.length >= 2){
						for(var d8 = 0 ; d8 < warehouseArr.length ; d8++){
							del(warehouseArr[d8]);
						}
						warehouseArr = [] ;
						chips[this.index-1].style.background = "url(images/chip1/chip"+ (c8 + 1) +".png) 4px 4px no-repeat";
					}else{
						warehouseArr = [] ;
					}
				}
			}else{
				console.log("使用道具！");
				if(iscopy == true){
					var dd = chips[this.index-1].style.background;
					var ee ;
					ee = dd.slice(dd.indexOf("chip")+10,dd.indexOf("chip")+15);
					var ff = parseInt(ee);
					nexts[0].style.background = "url(images/chip1/chip"+ ff +".png) 4px 4px no-repeat";
					iscopy = false ;
				}else if(issell == true){
					chips[this.index-1].style.background = "url() 4px 4px no-repeat";
					issell = false ;
					this.isClick = false ;
				}else if(ismax == true){
					chips[this.index-1].style.background = "url(images/chip1/chip12.png) 4px 4px no-repeat";
					ismax = false ;
				}else if(ishundred == true){
					chips[this.index-1].style.background = "url(images/chip1/chip7.png) 4px 4px no-repeat";
					ishundred = false ;
				}else if(isthousand == true){
					chips[this.index-1].style.background = "url(images/chip1/chip10.png) 4px 4px no-repeat";
					isthousand = false ;
				}else if(ismove == true){
					var gg = chips[this.index-1].style.background;
					var hh ;
					hh = gg.slice(gg.indexOf("chip")+10,gg.indexOf("chip")+15);
					var ii = parseInt(hh);
					nexts[0].style.background = "url(images/chip1/chip"+ ii +".png) 4px 4px no-repeat";
					chips[this.index-1].style.background = "url() 4px 4px no-repeat";
					this.isClick = false ;
					ismove = false ;
				}
			}
		}
	}
}

function getPosition (getpos){
	var a = getpos;
	if(a > 8){
		a = a % 8 ;
	}
	var b = getpos;
	var c = 1 ;
	while(b > 8){
		b -= 8 ;
		c++ ;
	}
	return {c,a};
}
function isCard(){
	if(ismove == true){
		return false ;
	}else if(issell == true){
		return false ;
	}else if(iscopy == true){
		return false ;
	}else if(ismax == true){
		return false ;
	}else if(ishundred == true){
		return false ;
	}else if(isthousand == true){
		return false ;
	}
	return true ;
}
function judge(jNum,jindex){
	var j8 = chips[jNum].style.background;
	var k8 ;
	k8 = j8.slice(j8.indexOf("chip")+10,j8.indexOf("chip")+15);
	var l8 = parseInt(k8);
	if(jindex == l8){
		warehouseArr.push(jNum);
	}
}
function del(dNum){
	chips[dNum].style.background = "url() 4px 4px no-repeat";
	chips[dNum].isClick = false ;
}

//这里是生成隐形next按钮 一共8个
var nextVessel = document.createElement("div");
nextVessel.id = "nextwrap";
nextVessel.style.overflow = "hidden";
for(var i = 0 ; i < 8 ; i ++){
	var nextList = document.createElement("div");
	nextList.style.width = "50px";
	nextList.style.height = "50px";
	nextList.style.float = "left";
	// nextList.style.background = "url(images/chip1/chip1.png) 4px 4px no-repeat";
	nextList.style.background = "url() 4px 4px no-repeat";
	nextVessel.appendChild(nextList);
}

next.appendChild(nextVessel);

var nexts = document.getElementById("nextwrap").getElementsByTagName('div');

for(var n = 0 ; n < nexts.length ; n++){
	// randomNext();
	nexts[n].style.background = "url(images/chip1/chip"+ randomNext() +".png) 4px 4px no-repeat";
	// nexts[n].style.background = "url(images/chip1/chip"+ 1 +".png) 4px 4px no-repeat";
}
nextwrap.onclick = function (){
	console.log();
}

//这里是做随机数的，
// nextchip=1的概率为40%;
// =2为24%;   
// =3为14.4%;   
// =4为8.64%;  
// =5为6.48%; 
// 还有就是终极概率nextchip=最大筹码的概率为6.48%
function randomNext(){
	var nextChip ;
	if(parseInt(Math.random()*100) <= 40){
		nextChip = 1 ;
		return nextChip;
	}else if(parseInt(Math.random()*100) <= 40){
		nextChip = 2 ;
		return nextChip;
	}else if(parseInt(Math.random()*100) <= 40){
		nextChip = 3 ;
		return nextChip;
	}else if(parseInt(Math.random()*100) <= 40){
		nextChip = 4 ;
		return nextChip;
	}else if(parseInt(Math.random()*100) <= 50){
		nextChip = 5 ;
		return nextChip;
	}else{
		nextChip = 10 ;
		return nextChip;
	}
}



//这里是生成隐形卡牌按钮 一共4个
var cardVessel = document.createElement("div");
cardVessel.id = "cardwrap";
cardVessel.style.overflow = "hidden";
for(var i = 0 ; i < 4 ; i ++){
	var nextList = document.createElement("div");
	nextList.style.width = "100px";
	nextList.style.height = "100px";
	nextList.style.float = "left";
	// nextList.style.background = "url(images/chip1/chip1.png) 4px 4px no-repeat";
	nextList.style.background = "url() 4px 4px no-repeat";
	cardVessel.appendChild(nextList);
}

card.appendChild(cardVessel);

var cards = document.getElementById("cardwrap").getElementsByTagName('div');

for(var n = 0 ; n < cards.length ; n++){
	cards[n].style.background = "url(images/chip2/"+ randomCard() +".png) 4px 4px no-repeat";
}
cardwrap.onclick = function (e){
	var e = e || window.event;
	var oWidth = e.clientX - cardwrap.offsetLeft;
	var strcc ;
	var cardName = "";
	var n ;
	if(oWidth <= 100){
		strcc = cards[0].style.background;
		strcc.indexOf(".",18);
		n = strcc.indexOf(".",18) - (strcc.indexOf("/chip")+7) ;
		for(var i = 0 ; i < n ; i++){
			cardName = cardName + strcc.charAt((strcc.indexOf("/chip")+7) + i) ;
		}
		cards[0].style.background = "url(images/chip2/"+ randomCard() +".png) 4px 4px no-repeat";
		// console.log(cardName);
	}else if(oWidth > 100 && oWidth <= 200){
		strcc = cards[1].style.background;
		strcc.indexOf(".",18);
		n = strcc.indexOf(".",18) - (strcc.indexOf("/chip")+7)  ;
		for(var i = 0 ; i < n ; i++){
			cardName = cardName + strcc.charAt((strcc.indexOf("/chip")+7) + i) ;
		}
		cards[1].style.background = "url(images/chip2/"+ randomCard() +".png) 4px 4px no-repeat";
	}else if(oWidth > 200 && oWidth <= 300){
		strcc = cards[2].style.background;
		strcc.indexOf(".",18);
		n = strcc.indexOf(".",18) - (strcc.indexOf("/chip")+7)  ;
		for(var i = 0 ; i < n ; i++){
			cardName = cardName + strcc.charAt((strcc.indexOf("/chip")+7) + i) ;
		}
		cards[2].style.background = "url(images/chip2/"+ randomCard() +".png) 4px 4px no-repeat";
	}else{
		strcc = cards[3].style.background;
		strcc.indexOf(".",18);
		n = strcc.indexOf(".",18) - (strcc.indexOf("/chip")+7)  ;
		for(var i = 0 ; i < n ; i++){
			cardName = cardName + strcc.charAt((strcc.indexOf("/chip")+7) + i) ;
		}
		cards[3].style.background = "url(images/chip2/"+ randomCard() +".png) 4px 4px no-repeat";
	}
	switch(cardName){
		case "copy":
			iscopy = true ;
			console.log("copy");
			break ;
		case "sell":
			issell = true ;
			console.log("sell");
			break ;
		case "max":
			ismax = true ;
			console.log("max");
			break ;
		case "move":
			ismove = true ;
			console.log("move");
			break ;
		case "hundred":
			ishundred = true ;
			console.log("hundred");
			break ;
		case "thousand":
			isthousand = true ;
			console.log("thousand");
			break ;
	}
}


function randomCard(){
	var nextCard ;
	var randomNum = parseInt(Math.random()*100);
	if(randomNum <= 20){
		nextCard = "sell" ;
	}else if(randomNum > 20 && randomNum <= 40){
		nextCard = "copy" ;
	}else if(randomNum > 40 && randomNum <= 60){
		nextCard = "move" ;
	}else if(randomNum > 60 && randomNum <= 80){
		nextCard = "max" ;
	}else if(randomNum > 80 && randomNum <= 90){
		nextCard = "hundred" ;
	}else{
		nextCard = "thousand" ;
	}
	return nextCard;
}

var grade = document.getElementById("grade");
grade.onclick = function (){
	var grades = 0;
	for(var gra = 0 ; gra < 64 ; gra++){
		var g64 = chips[gra].style.background;
		var h64 ;
		h64 = g64.slice(g64.indexOf("chip")+10,g64.indexOf("chip")+15);
		var i64 = parseInt(h64);
		if(!isNaN(i64)){
			grades += i64 ;
		}
	}
	grade.innerHTML = "" + grades ;
}