var slide ;
var but;
var _name, nameList =[];
var move;
var wrapper;
var myScroll;
var page;
var show = false;

function CreatePage(){
    for(i=0; i< 6; i++){
        slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = 'url(img/'+(i+1)+'.png)';
        slide.style.left = (i*1024)+'px';
        nameList[i] = new Image();
        nameList[i].src = 'img/name-'+(i+1)+'.png';
        move.appendChild(slide);
    }
    //name = document.createElement('img');
    //name.className = 'name';
    //name.style.opacity = 0;
}

function loaded() {
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
                onScrollMove:function(){
                    //console.log(name.className);
                    //name.style.opacity = 0;
                    _name.className = 'name2';
                    if(show) {
                        popup.style.opacity = 0;
                        show = false;
                    }
                },
		onScrollEnd: function () {
			//document.querySelector('#indicator > li.active').className = '';
			//document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
                        var n = this.currPageX-1;
                        var obj = document.getElementById('forcus');
                        obj.className = 'but-blur';
                        obj.id = '';
                        but[n+1].className = 'but-forcus';
                        but[n+1].id = 'forcus';
                        _name.src = nameList[n+1].src;
                        _name.className = 'name1';
                        //name.style.opacity = 1;
		}
	 });
};

function Popup(){
    if(show==false){
        popup.style.opacity = 1;
        show = true;
    }
    else{
        popup.style.opacity = 0;
        show = false;
    }
};

function ClosePopup(){
    popup.style.opacity = 0;
    show = false;
}

window.onload = function(){
    move = document.getElementById('move');
    page = document.getElementById('but');
    but = page.getElementsByTagName('div');
    popup = document.getElementById('popup');
    _name = document.getElementById('name');
    _name.addEventListener('touchstart',Popup,false);
    popup.addEventListener('touchstart',ClosePopup,false);
    CreatePage();
    loaded() ;
}