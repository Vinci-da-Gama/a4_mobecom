$(document).ready(function() {

	var fComment = $('#muulla-comment');
	var sComment = $('#clique-comment');
	var tComment = $('#abux-comment');
	var foComment = $('#liq-comment');
	var ffComment = $('#fiitr-comment');
	var fsComment = $('#sh-comment');
	initComment(fComment, sComment, tComment, foComment, ffComment, fsComment);

	// console.log(window.location);
	var fBrand = $('#click_brand-Row > div:first-child');
	var sBrand = $('#click_brand-Row > div:nth-child(2)');
	var tBrand = $('#click_brand-Row > div:nth-child(3)');
	var foBrand = $('#click_brand-Row > div:nth-child(4)');
	var ffBrand = $('#click_brand-Row > div:nth-child(5)');
	var fsBrand = $('#click_brand-Row > div:nth-child(6)');

	fbClick(fBrand, fComment, sComment, tComment, foComment, ffComment, fsComment);
	sbClick(sBrand, fComment, sComment, tComment, foComment, ffComment, fsComment);
	tbClick(tBrand, fComment, sComment, tComment, foComment, ffComment, fsComment);
	foClick(foBrand, fComment, sComment, tComment, foComment, ffComment, fsComment);
	ffClick(ffBrand, fComment, sComment, tComment, foComment, ffComment, fsComment);
	fsClick(fsBrand, fComment, sComment, tComment, foComment, ffComment, fsComment);
	
	// var topLinks = $('ul.navbar-nav > li:not(:first-child) > a');
	var topLinks = $('[data-toggle="popover"]');
	ComeSoon(topLinks);

	var bratTitles = $('#brat a');
	ComeSoon(bratTitles);

	var cdcTitles = $('#cdc a');
	ComeSoon(cdcTitles);

	clientsSlickCarousel();



});

function clientsSlickCarousel() {
    var slickUtensil = $('.the-slick-images');
    slickUtensil.slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
};

function initComment(f, s, t, fo, ff, fs) {
	f.show();
	s.hide();
	t.hide();
	fo.hide();
	ff.hide();
	fs.hide();
};

function fbClick(fb, f, s, t, fo, ff, fs) {
	fb.click(function() {
		f.show('slow').fadeIn('slow');;
		s.hide('slow').fadeOut('slow');
		t.hide('slow').fadeOut('slow');
		fo.hide('slow').fadeOut('slow');
		ff.hide('slow').fadeOut('slow');
		fs.hide('slow').fadeOut('slow');
	});
};

function sbClick(sb, f, s, t, fo, ff, fs) {
	sb.click(function() {
		f.hide('slow').fadeOut('slow');
		s.show('slow').fadeIn('slow');
		t.hide('slow').fadeOut('slow');
		fo.hide('slow').fadeOut('slow');
		ff.hide('slow').fadeOut('slow');
		fs.hide('slow').fadeOut('slow');
	});
};

function tbClick(tb, f, s, t, fo, ff, fs) {
	tb.click(function() {
		f.hide('slow').fadeOut('slow');
		s.hide('slow').fadeOut('slow');
		t.show('slow').fadeIn('slow');
		fo.hide('slow').fadeOut('slow');
		ff.hide('slow').fadeOut('slow');
		fs.hide('slow').fadeOut('slow');
	});
};

function foClick(fb, f, s, t, fo, ff, fs) {
	fb.click(function() {
		f.hide('slow').fadeOut('slow');
		s.hide('slow').fadeOut('slow');
		t.hide('slow').fadeOut('slow');
		fo.show('slow').fadeIn('slow');
		ff.hide('slow').fadeOut('slow');
		fs.hide('slow').fadeOut('slow');
	});
};

function ffClick(fi, f, s, t, fo, ff, fs) {
	fi.click(function() {
		f.hide('slow').fadeOut('slow');
		s.hide('slow').fadeOut('slow');
		t.hide('slow').fadeOut('slow');
		fo.hide('slow').fadeOut('slow');
		ff.show('slow').fadeIn('slow');
		fs.hide('slow').fadeOut('slow');
	});
};

function fsClick(fsb, f, s, t, fo, ff, fs) {
	fsb.click(function() {
		f.hide('slow').fadeOut('slow');
		s.hide('slow').fadeOut('slow');
		t.hide('slow').fadeOut('slow');
		fo.hide('slow').fadeOut('slow');
		ff.hide('slow').fadeOut('slow');
		fs.show('slow').fadeIn('slow');
	});
};

function ComeSoon(al) {
	// al.click(function() {
	// 	alert('Comming Soon!');
	// });
	al.popover();
};