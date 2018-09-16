/*
MUSTAFA YASAR OZKAN - 05442844054
ATLAS ENERJI -  YAZILIM SORUMLUSU
*/
function bgCover() {
	var id = 1;
	setInterval(function () {
		if (id >= 5) {
			id = 0;
		}
		$(".bgCover").animate({
			opacity: 0.1,
			}, 1000, function () {
				$(".bgCover").css({ 'background-image': 'url("images/slider/bg-' + id + '.jpg")' }).animate({ opacity: 1 }, 1000);
		});
		id=(id + 1);
	}, 6000);
}
function titleSilde() {
	var myArray = new Array();
	myArray.push("Film Dizi paketi kredi kartına 12 taksitle evinizde.");
	myArray.push("Size en uygun fırsat D-Smart'ta..");
	myArray.push("Yüzlerce içerik elinizin altında..");
	myArray.push("Filmden diziye, belgeselden spora ve daha fazlası.");
	var id = 0;
	setInterval(function () {
		if (id >= 3) {
			id = 0;
		}
		$("h1.titles").animate({
			opacity: 0,
			}, 1000, function () {
				$("h1.titles").text(myArray[id]).animate({ opacity: 1 }, 1000);
		});
		id=(id + 1);
	}, 6000);
}