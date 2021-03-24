	var CharTimeout = 250; // скорость печатания
	var StoryTimeout = 3000; // время ожидания перед переключением

	var Summaries = new Array();
	var SiteLinks = new Array();

		Summaries[0] = 'love';

		Summaries[1] = 'pixel perfect ';

		Summaries[2] = 'inspiration';

		Summaries[3] = 'pleasure';

		Summaries[4] = 'joy';

		Summaries[5] = 'meaning';


	/* Печатание текста - Тиккер
	----------------------------------------------------------------
	var CharTimeout = 20;
	var StoryTimeout = 7000;
	var Summaries = new Array();
	var SiteLinks = new Array();
		Summaries[0] = "CMS для простых сайтов GetSimple на русском языке";
		SiteLinks[0] = "#link1";
		Summaries[1] = "Spectrum - шикарная тема для WordPress на русском языке";
		SiteLinks[1] = "#link2";
	startTicker();
	*/

	function startTicker(){
		massiveItemCount =  Number(Summaries.length); //количество элементов массива
		// Определяем значения запуска
		CurrentStory     = -1;
		CurrentLength    = 0;
		// Расположение объекта
		AnchorObject     = document.getElementById("Ticker");
		runTheTicker();     
	}
	// Основной цикл тиккера
	function runTheTicker(){
		var myTimeout;  
		// Переход к следующему элементу
		if(CurrentLength == 0){
			CurrentStory++;
			CurrentStory      = CurrentStory % massiveItemCount;
			StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');      
			AnchorObject.href = SiteLinks[CurrentStory];
		}
		// Располагаем текущий текст в анкор с печатанием
		AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
		// Преобразуем длину для подстроки и определяем таймер
		if(CurrentLength != StorySummary.length){
			CurrentLength++;
			myTimeout = CharTimeout;
		} else {
			CurrentLength = 0;
			myTimeout = StoryTimeout;
		}
		// Повторяем цикл с учетом задержки
		setTimeout("runTheTicker()", myTimeout);
	}
	// Генератор подстановки знака
	function znak(){
		if(CurrentLength == StorySummary.length) return "";
		else return "|";
	}

	startTicker();

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

