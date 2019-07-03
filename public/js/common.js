
// Для лэзи загрузки
function lazyLoad(){


	document.addEventListener("DOMContentLoaded", function() {
		let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
		let active = false;

		const lazyLoad = function() {
			if (active === false) {
				active = true;

				setTimeout(function() {
					lazyImages.forEach(function(lazyImage) {
						if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
							lazyImage.src = lazyImage.dataset.src;
							// lazyImage.srcset = lazyImage.dataset.srcset;
							lazyImage.classList.remove("lazy");

							lazyImages = lazyImages.filter(function(image) {
								return image !== lazyImage;
							});

							if (lazyImages.length === 0) {
								document.removeEventListener("scroll", lazyLoad);
								window.removeEventListener("resize", lazyLoad);
								window.removeEventListener("orientationchange", lazyLoad);
								window.addEventListener("DOMContentLoaded", lazyLoad);
							}
						}
					});

					active = false;
				}, 200);
			}
		};

		document.addEventListener("scroll", lazyLoad);
		window.addEventListener("resize", lazyLoad);
		window.addEventListener("orientationchange", lazyLoad);
		window.addEventListener("DOMContentLoaded", lazyLoad);
	});


	// лэзи
	document.addEventListener("DOMContentLoaded", function() {
		let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
		let active = false;

		const lazyLoad = function() {
			if (active === false) {
				active = true;

				setTimeout(function() {
					lazyImages.forEach(function(lazyImage) {
						if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
							lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src +')';
							lazyImage.src = lazyImage.dataset.src;
							// lazyImage.srcset = lazyImage.dataset.srcset;
							lazyImage.classList.remove("lazy");

							lazyImages = lazyImages.filter(function(image) {
								return image !== lazyImage;
							});

							if (lazyImages.length === 0) {
								document.removeEventListener("scroll", lazyLoad);
								window.removeEventListener("resize", lazyLoad);
								window.removeEventListener("orientationchange", lazyLoad);
								window.addEventListener("DOMContentLoaded", lazyLoad);
							}
						}
					});

					active = false;
				}, 200);
			}
		};

		document.addEventListener("scroll", lazyLoad);
		window.addEventListener("resize", lazyLoad);
		window.addEventListener("orientationchange", lazyLoad);
		window.addEventListener("DOMContentLoaded", lazyLoad);
	});



	document.addEventListener("DOMContentLoaded", function() {
		var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

		if ("IntersectionObserver" in window) {
			let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						lazyBackgroundObserver.unobserve(entry.target);
					}
				});
			});

			lazyBackgrounds.forEach(function(lazyBackground) {
				lazyBackgroundObserver.observe(lazyBackground);
			});
		}
	});
}
lazyLoad();
jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


	// галерея
	$('[data-fancybox]').fancybox({
		// protect    : true,
		toolbar: false,
		smallBtn: true,
		buttons: [
			'zoom',
			// 'thumbs',
			'close'
		]
	});
	// закрыть/открыть мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").toggleClass("active");
		$("body, html").toggleClass("fixed");
		return false;
	});
	$('.hidden-mnu ul li a').on('click', function () {
		$(".hidden-mnu .toggle-mnu").click();
	});
	$(document).mouseup(function (e) {
		var container = $(".hidden-mnu.active");
		if (container.has(e.target).length === 0) {
			$(".toggle-mnu-1").removeClass("on");
			// $("body").toggleClass("fixed");
			$(".hidden-mnu").removeClass("active");
			$("body, html").removeClass("fixed");
		}
	});
	// закрыть меню при горизонтальном свайпе
	$('.hidden-mnu.active').swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
			if (direction == 'right') {
				$(".toggle-mnu-1").removeClass("on");
				$(".hidden-mnu.active").removeClass("active");
				$("body, html").removeClass("fixed");
			}
		},
		triggerOnTouchEnd: false,
	});
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню


	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-mnu-1").removeClass("on");
		// $("body").removeClass("fixed");
		$(".hidden-mnu").removeClass("active");
		$("body").removeClass("fixed");
	}

	// изменить размер меню при скроле
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.top-nav  ').addClass('fixed');
		} else {
			$('.top-nav  ').removeClass('fixed');
		}
	});


	// листалка по стр
	// $(" .top-nav a").click(function () {
	//        var elementClick = $(this).attr("href");
	//        var destination = $(elementClick).offset().top;

	//            $('html, body').animate({ scrollTop: destination }, 1100);

	//        return false;
	//    });


	// табы  .
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tabs');
	tabscostume('tabs-contact');


	// выравнивает высоту в миниатюрах
	function heightses() {



		$(".s-catalog").each(function () {
			// if (window.matchMedia("(min-width: 992px)").matches) {
			$(this).find(".item-prod__title--js").height('auto').equalHeights();
			$(this).find(".item-prod__text--js").height('auto').equalHeights();
			// $(this).find(".item-prod__caption").height('auto').equalHeights();
			// }
			$(this).find(".item-prod__inner--js").height('auto').equalHeights();
			$(this).find(".item-prod--js").height('auto').height($(this).find(".item-prod__inner--js").height());
			// $(this).find(".item-prod__inner").height('auto').equalHeights();
		})

	}
	$(window).on("load", function () {
		heightses();

	})
	$(window).resize(function () {
		heightses();

	});


	heightses();

	var $li = $('.header .dropdown-cat , .header-block__link--dropdown').hover(
		function () {
			var self = this;
			hovertimer = setTimeout(function () {
				$(self).addClass('hover-block');
				// $("html, .top-nav.fixed").addClass("fixed-brand");
			}, 500);
		},
		function () {
			clearTimeout(hovertimer);
			$li.removeClass('hover-block');
			$("html, .top-nav.fixed").removeClass("fixed-brand");
		}
	);
	// показывает скрытый блок в миниатюрах
	$(".item-prod").each(function () {
		var item = $(this).find(".item-prod__toggle-block");
        var container = $(this).closest(".s-catalog");
		$(this).hover(
			function () {
				hovertimer = setTimeout(function () {
                    container.css( "z-index", "100" );
                    container.css( "position", "relative" );
					item.slideDown(100);
				}, 500);
			},
			function () {
				clearTimeout(hovertimer);
                container.css( "z-index", "20" );
				item.slideUp(100);
			}
		)
	});

	var icon = '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
		'<g filter="url(#filter0_d)">\n' +
		'<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5157 0.460261C14.1614 1.07394 14.1614 2.06892 13.5157 2.6826L4.76369 11L13.5157 19.3174C14.1614 19.9311 14.1614 20.9261 13.5157 21.5397C12.8699 22.1534 11.823 22.1534 11.1772 21.5397L1.64575 12.4816C0.784752 11.6633 0.78475 10.3367 1.64575 9.51844L11.1772 0.460261C11.823 -0.15342 12.8699 -0.15342 13.5157 0.460261Z" fill="white" fill-opacity="0.716"/>\n' +
		'</g>\n' +
		'<defs>\n' +
		'<filter id="filter0_d" x="0" y="0" width="15" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
		'<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
		'<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
		'<feOffset dy="1"/>\n' +
		'<feGaussianBlur stdDeviation="0.5"/>\n' +
		'<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>\n' +
		'<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
		'<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
		'</filter>\n' +
		'</defs>\n' +
		'</svg>\n';

    var iconRight = '<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<g filter="url(#filter0_d)">\n' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M1.4843 0.460261C0.838601 1.07394 0.838601 2.06892 1.4843 2.6826L10.2363 11L1.4843 19.3174C0.838601 19.9311 0.838601 20.9261 1.4843 21.5397C2.1301 22.1534 3.177 22.1534 3.8228 21.5397L13.3543 12.4816C14.2152 11.6633 14.2153 10.3367 13.3543 9.51844L3.8228 0.460261C3.177 -0.15342 2.1301 -0.15342 1.4843 0.460261Z" fill="white" fill-opacity="0.716"/>\n' +
        '</g>\n' +
        '<defs>\n' +
        '<filter id="filter0_d" x="0" y="0" width="15" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
        '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
        '<feOffset dy="1"/>\n' +
        '<feGaussianBlur stdDeviation="0.5"/>\n' +
        '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>\n' +
        '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
        '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
        '</filter>\n' +
        '</defs>\n' +
        '</svg>\n';

	// var icon = '<svg   viewBox="0 0 49 95" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M48 0.5L1 47.5L48 94.5" stroke="rgba(255, 255, 255, 0.716);"/> </svg>';

	var arrl2 = (' <div class="l">' + icon),
		arrr2 = (' <div class="r">' + iconRight);
	// слайдер   одинарныйs-catalog__slider
	$('.s-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		adaptiveHeight: true,
		// appendArrows: '.s-slider-wrap .container',
		//  autoplay: true,
		// autoplaySpeed: 3000,
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,

		prevArrow: arrl2,
		nextArrow: arrr2,
		adaptiveHeight: true
	});
	//  карусель в каталоге
	$('.s-patner__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		//  autoplay: true,
		// autoplaySpeed: 3000,
		prevArrow: arrl2,
		nextArrow: arrr2,

		responsive: [

			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
				}
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 4,
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
				}
			}
		]
	});

	$('.s-catalog__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		//  autoplay: true,
		// autoplaySpeed: 3000,
		prevArrow: arrl2,
		nextArrow: arrr2,
		responsive: [{
				breakpoint: 1200,
				settings: {

					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},

			{
				breakpoint: 992,
				settings: {

					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},

			{
				breakpoint: 576,
				settings: {

					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 320,
				settings: "unslick"
			},

		]
	});

    $('.item-config__wrapper-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 450,
        infinite: true,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        // variableWidth: true,
    });

	$('.s-catalog__slider-combined').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: false,
		arrows: false,
		prevArrow: arrl2,
		nextArrow: arrr2,
        swipe: false,
	});



	$(".prod-head__sliders").each(function () {
		var th = $(this);


		//  слайдер в  карточке товара
		th.find(' .prod-head__slider-big').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			asNavFor: th.find(' .prod-head__slider-small'),
			infinite: false,
			loop: false,
			arrows: false,

		});
		th.find('.col-xl-auto .prod-head__slider-small').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: false,
			loop: false,
			arrows: false,
			vertical: true,
			verticalSwiping: true,
			focusOnSelect: true,
			asNavFor: th.find('.prod-head__slider-big'),
			responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 4,
						vertical: false,
						verticalSwiping: false,
					}
				},

			]
			// swipeToSlide: false
		});



		th.find(' .prod-head__slider-small--modal').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			speed: 450,
			infinite: false,
			loop: false,
			arrows: false,

			focusOnSelect: true,
			asNavFor: th.find('.prod-head__slider-big'),

		});

	})


	$('[href="#modal-prod"]').click(function () {

		$("#modal-prod").find(".slick-slider").slick('refresh');
	})
	// модальное окно
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


	// маска на инпут
	// $("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
	// 	"mask": "+7(999)999-99-99"
	// });


	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		var name = $(".add-file__filename  ");
		name.text(filename);

	});
	// или
	// $(".dropzone").dropzone({
	//  url: "/file/post",
	//  addRemoveLinks: true,
	//      acceptedFiles: 'image/*',
	//      uploadMultiple: true,
	//   });


	$(".top-nav__btn--basket").click(function (e) {
		e.preventDefault();
		$(this)
			.next().toggleClass("show")
			.parent().toggleClass("show");
	})

	$(document).mouseup(function (e) {
		var container = $(".basket-dropdown.show");
		if (container.parent().has(e.target).length === 0) {
			container.removeClass("show")
				.prev().attr("aria-expanded", "false")
				.parent().removeClass("show");
		}
	});

	// показать поиск в меню
	$(".top-nav__btn--search , .search-block__btn--close").click(function (e) {
		e.preventDefault();
		$(".search-block").fadeToggle().find("input").focus();
	})

	// замедление ховера в меню
	var $li = $('.header .dropdown-cat , .header-block__link--dropdown').hover(
		function () {
			var self = this;
			hovertimer = setTimeout(function () {
				$(self).addClass('hover-block');
				// $("html, .top-nav.fixed").addClass("fixed-brand");
			}, 500);
		},
		function () {
			clearTimeout(hovertimer);
			$li.removeClass('hover-block');
			$("html, .top-nav.fixed").removeClass("fixed-brand");
		}
	);

	// для плаваюещего label
	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').closest('label').addClass('empty');

	$('input, textarea').keyup(function () {
		if ($(this).val().trim() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
	});

	$('.s-order-nav, .breadcrumb, .tabs__caption').slick({
		dots: false,
		arrows: false,
		infinite: false,
		loop: false,
		speed: 450,
		slidesToShow: 1,
		// centerMode: true,

		variableWidth: true
	});

	// видеоо в модалке
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	// скрыть/показать меню в ЛК
	$(".aside__btn--js").click(function () {
		$(this).toggleClass("active").next().slideToggle();
	})

	$(".trop .dropdown-cat__link--toggle-js").click(function (e) {
		e.preventDefault;
		$(this).next().slideToggle();
		console.log($(this).next())
	})

	// показать историю заказов
	$(".tr-history").click(function () {
		$(this).toggleClass("active").next().fadeToggle();
		$(this).find(".s-po__toggle").toggleClass("active");
	})


	$(".face-input").change(function () {
		$(this).hasClass("fiz-input") ? $(".toggle-block").fadeOut() : $(".toggle-block").fadeIn()
	})


	// для плаваюещего label


	$('input:empty, textarea:empty').not('[type="radio"]').not('[type="checkbox"]').each(function () {

		if ($(this).val().trim() !== '') {
			$(this).closest('label').removeClass('empty');
		} else {
			$(this).closest('label').addClass('empty');
		}
		$(this).on('.keyup', function () {
			if ($(this).val().trim() !== '') {
				$(this).closest('label').removeClass('empty');
			} else {
				$(this).closest('label').addClass('empty');
			}
		});
	})


	function footerH() {

		var w = $(window).width();
		$(".main-wrapper").css("padding-bottom", $('footer').innerHeight());

		$(".s-catalog").each(function () {

			var imW = $(this).find(".item-prod__img-wrap").innerHeight() - 2;

			$(this).find(" .slick-arrow").css('top', imW);
		})
	}


	$(window).resize(function () {
		footerH();

	});
	footerH();


	$(window).on("load", function () {
		$(".basket-dropdown__items--js").mCustomScrollbar({
			autoHideScrollbar: true,
		});
	});


	$('.aside-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
	});


	$('.btn-input').popover({
		html: true,
		placement: 'top',
	})

	$('.s-po__label-status--js').popover({
		// html: true,
		placement: 'top',
	})
		// show all  item in order in basket
		$(".s-basket-order__toggle-link--js").click(function(e){
			e.preventDefault();
			$('.s-basket-order__item:nth-child(n + 3)').slideToggle();
		})


			//  слайдер сравнения
	$('.s-compare__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		speed: 450,
		infinite: false,
		dots: false,
		useTransform: false,
		arrows: false,
		touchMove: false,
		// swipe: false,

		asNavFor: '.s-compare__slider--js'
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
	});

	$(".s-compare__slider-wrap").stick_in_parent({
		parent: '.s-compare',
		offset_top: 56,
		recalc_every: 1,
	});

		// подсветка при наведении пуктов в сравнении
		// $('.s-compare__group--js').hover(function () {
		// 	var theq = $(this).index();

		// 	// $(this).toggleClass('hover');
		// 	$(".s-compare__slide").each(function () {
		// 		$(this).find('.s-compare__group--js').eq(theq).toggleClass('hover');
		// 	})

		// })
    // $('[data-toggle="tooltip-table"]').tooltip({
    //     html: true,
    //     placement: 'bottom',
    //     template: '<div class="tooltip tooltip-table" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    // });

    $('[data-toggle="popover-aside"]').popover({
        html: true,
        placement: 'right',
        // trigger: 'focus',

        // template: '<div class="popover tooltip-configuration" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        template: '<div class="popover popover-configuration" role="tooltip"><div class="popover-body"></div></div>'
    });

    // $(".aside-config__reinforce-item").click(function(e) {
    //     e.preventDefault();
    //     $(".aside-config__reinforce-item").removeClass('aside-config__reinforce-item--active');
    //     $(this).addClass('aside-config__reinforce-item--active');
    // });


    $(".aside-config__reinforce-item").click(function () {
        $(".aside-config__reinforce-item").removeClass('aside-config__reinforce-item--active');
        $(this).addClass('aside-config__reinforce-item--active');
        if(screen.width < 768){
            var elementClick = $(this).attr("scroll");
            $('html, body').animate({scrollTop: $('#'+ elementClick).offset().top - 55 }, 1100);
        }
    });

    $(".item-config__wrapper").each(function () {
        var item = $(this).find(".item-config__toggle-block");
        $(this).hover(
            function () {
                hovertimer = setTimeout(function () {
                    item.slideDown(100);
                }, 500);
            },
            function () {
                clearTimeout(hovertimer);
                item.slideUp(100);
            }
        )
    });

    $(window).on("load", function () {
        $(".aside-config__reinforce-list").mCustomScrollbar({
            autoHideScrollbar: true,
        });
    });
    // $(".tabs__table-wrap--compatibility").mCustomScrollbar({
    //     axis:"x" // horizontal scrollbar
    // });

    $(".search-block__btn--close").click(function () {
        $(".search-block__input").blur();
    });
});
