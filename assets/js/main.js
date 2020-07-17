/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// (function($) {
// 	var	$window = $(window),
// 		$body = $('body'),
// 		$header = $('#header');
// 		$all = $body.add($header);

// 	// Breakpoints.
// 		breakpoints({
// 			xxlarge: [ '1681px',  '1920px' ],
// 			xlarge:  [ '1281px',  '1680px' ],
// 			large:   [ '1001px',  '1280px' ],
// 			medium:  [ '737px',   '1000px' ],
// 			small:   [ '481px',   '736px'  ],
// 			xsmall:  [ null,      '480px'  ]
// 		});

// 	// Play initial animations on page load.
// 		$window.on('load', function() {
// 			setTimeout(function() {
// 				$body.removeClass('is-preload');
// 			}, 100);
// 		});

// 	// Touch mode.
// 		if (browser.mobile)
// 			$body.addClass('is-touch');

// 		breakpoints.on('<=small', function() {
// 			$body.addClass('is-touch');
// 		});

// 		breakpoints.on('>small', function() {
// 			$body.removeClass('is-touch');
// 		});
		
// 	// Section transitions.
// 	// 「「「「「必要箇所」」」」」」
// 		if (browser.canUse('transition')) {

// 			var on = function() {

// 				// Galleries.
// 					$('.gallery')
// 						.scrollex({
// 							top:		'30vh',
// 							bottom:		'30vh',
// 							delay:		50,
// 							initialize:	function() { $(this).addClass('inactive'); },
// 							terminate:	function() { $(this).removeClass('inactive'); },
// 							enter:		function() { $(this).removeClass('inactive'); },
// 							leave:		function() { $(this).addClass('inactive'); }
// 						});

// 				// Generic sections.
// 					$('.main.style1')
// 						.scrollex({
// 							mode:		'middle',
// 							delay:		30,
// 							initialize:	function() { $(this).addClass('inactive'); },
// 							terminate:	function() { $(this).removeClass('inactive'); },
// 							enter:		function() { $(this).removeClass('inactive'); },
// 							leave:		function() { $(this).addClass('inactive'); }
// 						});

// 					$('.main.style2')
// 						.scrollex({
// 							mode:		'middle',
// 							delay:		30,
// 							initialize:	function() { $(this).addClass('inactive'); },
// 							terminate:	function() { $(this).removeClass('inactive'); },
// 							enter:		function() { $(this).removeClass('inactive'); },
// 							leave:		function() { $(this).addClass('inactive'); }
// 						});

// 				// Contact.
// 					$('#contact')
// 						.scrollex({
// 							top:		'50%',
// 							delay:		30,
// 							initialize:	function() { $(this).addClass('inactive'); },
// 							terminate:	function() { $(this).removeClass('inactive'); },
// 							enter:		function() { $(this).removeClass('inactive'); },
// 							leave:		function() { $(this).addClass('inactive'); }
// 						});

// 			};

// 			var off = function() {

// 				// Galleries.
// 					$('.gallery')
// 						.unscrollex();

// 				// Generic sections.
// 					$('.main.style1')
// 						.unscrollex();

// 					$('.main.style2')
// 						.unscrollex();

// 				// Contact.
// 					$('#contact')
// 						.unscrollex();

// 			};

// 			breakpoints.on('<=small', off);
// 			breakpoints.on('>small', on);

// 		}
// })(jQuery);


const btnAs = $('.btn-a');
const btnBs = $('.btn-b');
const tableAs = $('.table-a');
const tableBs = $('.table-b');
// .table-d-a -> 概要の第２回
// .table-d-b -> 概要の第３回
// .table-c-a -> カリキュラムの第２回
// .table-c-b -> カリキュラムの第３回

// フィリピン休日の注釈（第３回の時だけ表示したい）
const holiday = $('.holiday-note')[0];

// 第２回のボタンがクリックされた時
for(let i = 0; i < btnAs.length; i++) {
	const btnA = btnAs[i];
	btnA.addEventListener('click', function() {
		console.log('第2回がクリックされました');
		holiday.classList.add('hide-element');
		// btnAがアクティブじゃないとき
		if(!btnA.classList.contains('btn-active')) {
			// btnAをアクティブにする
			btnAs[0].classList.add('btn-active');
			btnAs[1].classList.add('btn-active');

			// tableA表示する
			$('.table-c-a').fadeIn(500);
			$('.table-d-a').fadeIn(500);
			tableAs[0].classList.remove('hide-element');
			tableAs[1].classList.remove('hide-element');
			
			// tableBを隠す
			$('.table-c-b').fadeOut(500);
			$('.table-d-b').fadeOut(500);
			tableBs[0].classList.add('hide-element');
			tableBs[1].classList.add('hide-element');

			// btnBを非アクティブにする
			btnBs[0].classList.remove('btn-active');
			btnBs[1].classList.remove('btn-active');
		}
	});
}

// 第３回のボタンがクリックされた時
for(let i = 0; i < btnBs.length; i++) {
	const btnB = btnBs[i];
	btnB.addEventListener('click', function() {
		console.log('第３回がクリックされました');
		holiday.classList.remove('hide-element');
		console.log(holiday);
		// btnBがアクティブじゃないとき
		if(!btnB.classList.contains('btn-active')) {
			// btnBをアクティブにする
			btnBs[0].classList.add('btn-active');
			btnBs[1].classList.add('btn-active');
			// tableB表示する
			$('.table-c-b').fadeIn(500);
			$('.table-d-b').fadeIn(500);
			tableBs[0].classList.remove('hide-element');
			tableBs[1].classList.remove('hide-element');
			// フィリピン休日の注釈を表示
			// holiday.classList.remove('hide-element');

			// tableAを隠す
			$('.table-c-a').fadeOut(500);
			$('.table-d-a').fadeOut(500);
			tableAs[0].classList.add('hide-element');
			tableAs[1].classList.add('hide-element');

			// btnAを非アクティブにする
			btnAs[0].classList.remove('btn-active');
			btnAs[1].classList.remove('btn-active');
		}
	});
}

// animation 

$(window).on('load scroll', function(){

    //animatedのclassを持った要素をセレクタに指定
    const elem = $('.animated');
    // console.log(elem, 'elem')
  
    elem.each(function () {
		// console.log('each')
        //data属性からアニメーション名を取得
        // const isAnimate = $(this).data('animate');
        // console.log(isAnimate); // => bounce
        //animated要素に位置を取得
        const elemOffset = Math.round($(this).offset().top);
        // console.log(elemOffset, 'elemOffset');
        //現在のスクロールポジションを取得
        const scrollPos = Math.round($(window).scrollTop());
        // console.log(scrollPos, 'scrollPos')
        //ウィンドウの高さを取得
        const wh = $(window).height();
        // console.log(wh, 'wh')

        // while elem is in the window, keep showing
        if(scrollPos > elemOffset - wh){
            $(this).addClass('showUp');
			$(this).removeClass('showOff');
			$(this).removeClass('invisible');
			// console.log($(this));
        } 
        // when elem is top of window, elem off
        if(scrollPos > elemOffset + 75) {
            $(this).addClass('showOff');
			$(this).removeClass('showUp');
			// console.log($(this));
        }
        // keep hiding elem until elem comes into window 
        if(scrollPos < elemOffset - wh + 75) {
            $(this).removeClass('showUp');
			$(this).addClass('showOff');
			$(this).addClass('invisible');
			// console.log($(this));
        }
    });
});

const texts = $('.feature-card-description');
const features = $('#features');
const elemOffset = Math.round(features.offset().top);
console.log(elemOffset);


// console.log('big');
$(window).on('load scroll', function(){
	if($(window).width() > 780) {
		// console.log(features, "~~~~~~~~~~~");
		
		// console.log(elemOffset)
		//現在のスクロールポジションを取得
		const scrollPos = Math.round($(window).scrollTop());
		// console.log(scrollPos)
		//ウィンドウの高さを取得
		const wh = $(window).height();
		// console.log(wh, 'wh')
		// while elem is in the window, keep showing
		// console.log(scrollPos)
		// 要素より上
		if(scrollPos < elemOffset - wh + 75) {
			// console.log('上');
			
			$('.des-one').css('animation', 'disappear .5s forwards');
			$('.des-two').css('animation', 'disappear .5s forwards');
			$('.des-three').css('animation', 'disappear .5s forwards');
		}
		if(scrollPos > elemOffset - wh + 300 && scrollPos <= elemOffset + wh){
			// console.log('中');
			// $('.des-one').css('color', 'red');
			$('.des-one').css('animation', 'appear .5s forwards .5s');
			$('.des-two').css('animation', 'appear .5s forwards .8s');
			$('.des-three').css('animation', 'appear .5s forwards 1.1s');
		}
		//  
		if(scrollPos > elemOffset + wh) {
			// console.log('下')
			$('.des-one').css('animation', 'disappear .5s forwards');
			$('.des-two').css('animation', 'disappear .5s forwards');
			$('.des-three').css('animation', 'disappear .5s forwards');
		}
	}
});

// スマホ画面のスクロール設定
const navsSp = $('#nav-content').children();

navsSp.each(function() {
	// console.log($(this).attr("href"));
	const a = $(this).children();
	// console.log(a.text(), "a________");
	const href = a.attr('href');
	// console.log(href);
	const destinationElement = $(href);
	// console.log(destinationElement);
	const destinationElementLocation = destinationElement.offset().top;
	// console.log(destinationElementLocation);

	$(this).on("click", function() {
		$('body, html').animate({ scrollTop: destinationElementLocation }, 500);
	})
})

// Desktop画面のスクロール設定
const navsDesktop = $('.nav-items-desktop').children();
// console.log(navsDesktop);
navsDesktop.each(function() {
	const a = $(this).children();
	const href = a.attr('href');
	const destinationElement = $(href);
	// console.log(destinationElement);
	const destinationElementLocation = destinationElement.offset().top;
	// console.log(destinationElementLocation);

	$(this).on("click", function() {
		console.log('dfjlkjfkaslkfjdfkjalskdjkl')
		console.log($(this))
		console.log(destinationElementLocation, 'clicked!!!!');
		$('body, html').animate({ scrollTop: destinationElementLocation }, 500);
	})
})
