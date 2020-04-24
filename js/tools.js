$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \d{3} \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('body').on('input', '.form-input textarea', function() {
        this.style.height = '242px';
        this.style.height = (this.scrollHeight) + 'px';
    });

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curName = curInput.val().replace(/.*(\/|\\)/, '');
        if (curName != '') {
            curField.find('.form-file-name').html(curName);
        } else {
            curField.find('.form-file-name').html('');
        }
    });

    $.validator.addMethod('inputDate',
        function(curDate, element) {
            if (this.optional(element) && curDate == '') {
                return true;
            } else {
                if (curDate.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
                    var userDate = new Date(curDate.substr(6, 4), Number(curDate.substr(3, 2)) - 1, Number(curDate.substr(0, 2)));
                    if ($(element).attr('min')) {
                        var minDateStr = $(element).attr('min');
                        var minDate = new Date(minDateStr.substr(6, 4), Number(minDateStr.substr(3, 2)) - 1, Number(minDateStr.substr(0, 2)));
                        if (userDate < minDate) {
                            $.validator.messages['inputDate'] = 'Минимальная дата - ' + minDateStr;
                            return false;
                        }
                    }
                    if ($(element).attr('max')) {
                        var maxDateStr = $(element).attr('max');
                        var maxDate = new Date(maxDateStr.substr(6, 4), Number(maxDateStr.substr(3, 2)) - 1, Number(maxDateStr.substr(0, 2)));
                        if (userDate > maxDate) {
                            $.validator.messages['inputDate'] = 'Максимальная дата - ' + maxDateStr;
                            return false;
                        }
                    }
                    return true;
                } else {
                    $.validator.messages['inputDate'] = 'Дата введена некорректно';
                    return false;
                }
            }
        },
        ''
    );

    $('form').each(function() {
        initForm($(this));
    });

    $('.gallery').each(function() {
        var curGallery = $(this);
        curGallery.on('init', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
        var options = {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            adaptiveHeight: true,
            fade: true,
            dots: true
        };
        if (curGallery.next().hasClass('gallery-preview')) {
            options.dots = false;
            options.responsive = [
                {
                    breakpoint: 1169,
                    settings: {
                        dots: true
                    }
                }
            ];
        }
        curGallery.slick(
            options
        ).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var curSlide = curGallery.find('.slick-slide:not(.slick-cloned)').eq(nextSlide);
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-dots').css({'top': curPhotoHeight});
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
            if (curGallery.next().hasClass('gallery-preview')) {
                curGallery.next().find('.gallery-preview-item').removeClass('active');
                curGallery.next().find('.gallery-preview-item').eq(nextSlide).addClass('active');
            }
        }).on('setPosition', function(event, slick) {
            if (curGallery.next().hasClass('gallery-preview')) {
                var currentSlide = curGallery.slick('slickCurrentSlide');
                curGallery.next().find('.gallery-preview-item').removeClass('active');
                curGallery.next().find('.gallery-preview-item').eq(currentSlide).addClass('active');
            }
        });

        if (curGallery.next().hasClass('gallery-preview')) {
            var galleryPreview = curGallery.next();
            galleryPreview.mCustomScrollbar({
                axis: 'x'
            });
            galleryPreview.find('.gallery-preview-item a').click(function(e) {
                var curIndex = galleryPreview.find('.gallery-preview-item').index($(this).parent());
                curGallery.slick('slickGoTo', curIndex);
                e.preventDefault();
            });
        }
    });

    $('.header-lang-link').click(function(e) {
        $('.header-lang').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.header-lang').length == 0) {
            $('.header-lang').removeClass('open');
        }
    });

    $('.main-news-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: 'unslick'
            }
        ]
    });

    $('.tabs').each(function() {
        var curTabs = $(this);
        var curTabsMenu = curTabs.find('> .tabs-menu');
        var curTabsContainer = curTabs.find('> .tabs-container');
        var newHTML = '';
        curTabsContainer.find('> .tabs-content').each(function() {
            var curTabTitle = $(this).find('> .tabs-content-title').html();
            newHTML += '<div class="tabs-menu-item"><a href="#">' + curTabTitle + '</a></div> ';
        });
        curTabsContainer.find('> .tabs-content').eq(0).addClass('active');
        curTabsMenu.html(newHTML);
        curTabsMenu.find('.tabs-menu-item').eq(0).addClass('active');
        curTabsMenu.mCustomScrollbar({
            axis: 'x'
        });
    });

    $('body').on('click', '.tabs-menu-item a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            var curTabs = curLi.parents().filter('.tabs');
            curTabs.find('.tabs-menu-item.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curTabs.find('.tabs-menu-item').index(curLi);
            curTabs.find('.tabs-content.active').removeClass('active');
            curTabs.find('.tabs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('body').on('mouseover', '.main-scheme-list ul li a', function(e) {
        var curItem = $(this);
        var curId = curItem.attr('data-id');
        $('.main-scheme-content-point[data-id="' + curId + '"]').addClass('hover');
        $('.main-scheme-content-areas path[data-id="' + curId + '"]').addClass('hover');
    });

    $('body').on('mouseout', '.main-scheme-list ul li a', function(e) {
        $('.main-scheme-content-point').removeClass('hover');
        $('.main-scheme-content-areas path').removeClass('hover');
    });

    $('body').on('mouseover', '.main-scheme-content-point', function(e) {
        var curItem = $(this);
        var curId = curItem.attr('data-id');
        $('.main-scheme-list ul li a[data-id="' + curId + '"]').addClass('hover');
        $('.main-scheme-content-areas path[data-id="' + curId + '"]').addClass('hover');
    });

    $('body').on('mouseout', '.main-scheme-content-point', function(e) {
        $('.main-scheme-list ul li a').removeClass('hover');
        $('.main-scheme-content-areas path').removeClass('hover');
    });

    $('body').on('mouseover', '.main-scheme-content-areas path', function(e) {
        var curItem = $(this);
        var curId = curItem.attr('data-id');
        $('.main-scheme-list ul li a[data-id="' + curId + '"]').addClass('hover');
        $('.main-scheme-content-point[data-id="' + curId + '"]').addClass('hover');
    });

    $('body').on('mouseout', '.main-scheme-content-areas path', function(e) {
        $('.main-scheme-list ul li a').removeClass('hover');
        $('.main-scheme-content-point').removeClass('hover');
    });

    $('body').on('click', '.main-scheme-list ul li a', function(e) {
        var curItem = $(this);
        var curId = curItem.attr('data-id');
        $('.main-scheme-content-point[data-id="' + curId + '"]').addClass('hover');
        $('.main-scheme-content-areas path[data-id="' + curId + '"]').addClass('hover');
        if ($(window).width() < 1170) {
            $('html, body').animate({'scrollTop': $('.main-scheme-content-point[data-id="' + curId + '"]').find('.main-scheme-content-point-popup').offset().top - 87});
            $('.main-scheme-content').mCustomScrollbar('scrollTo', $('.main-scheme-content-point[data-id="' + curId + '"]').find('.main-scheme-content-point-popup'));
        }
        e.preventDefault();
    });

    $('.main-reviews-list-inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    var clipboard = new ClipboardJS('.main-location-coords span');
    clipboard.on('success', function(e) {
        alert('Координаты скопированы в буфер');
    });

    $('.main-location-routes a').click(function(e) {
        $('.main-location').toggleClass('main-location-routes-enable');
        if ($('.main-location').hasClass('main-location-routes-enable')) {
            if (myMap !== undefined) {
                myMap.controls.add('routePanelControl', {float: 'right'});

                var control = myMap.controls.get('routePanelControl');

                control.routePanel.state.set({
                    type: 'auto',
                    fromEnabled: true,
                    to: coords,
                    toEnabled: false
                });

                control.routePanel.options.set({
                    allowSwitch: false,
                    reverseGeocoding: true
                });
            }
        } else {
            if (myMap !== undefined) {
                myMap.controls.remove('routePanelControl');
            }
        }
        e.preventDefault();
    });

    $('.main-slider').each(function() {
        var curSlider = $(this);
        var curID = 0;
        curSlider.find('.main-slider-item').each(function() {
            var curItem = $(this);
            curItem.html('<svg width="907" height="1000" viewBox="0 0 907 1000" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                            '<mask id="mask' + curID + '" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="907" height="1000">' +
                                '<path class="main-slider-hexagon-1" d="M256.208 396.351L341.472 544.032L256.208 691.712H85.681L0.417511 544.032L85.681 396.351H256.208Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-2" d="M520.229 244.031L605.492 391.712L520.229 539.393H349.702L264.438 391.712L349.702 244.031H520.229Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-3" d="M519.101 550.927L604.364 698.608L519.101 846.289H348.574L263.31 698.608L348.574 550.927H519.101Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-4" d="M783.12 90.5834L868.384 238.264L783.12 385.945H612.593L527.33 238.264L612.593 90.5834H783.12Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-5" d="M783.12 397.479L868.384 545.16L783.12 692.841H612.593L527.33 545.16L612.593 397.479H783.12Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-6" d="M783.12 704.375L868.384 852.056L783.12 999.737H612.593L527.33 852.056L612.593 704.375H783.12Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-7" d="M1047.14 -61.7364L1132.4 85.9444L1047.14 233.625H876.614L791.35 85.9444L876.614 -61.7364H1047.14Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-8" d="M1047.14 244.031L1132.4 391.712L1047.14 539.393H876.614L791.35 391.712L876.614 244.031H1047.14Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-9" d="M1047.14 550.927L1132.4 698.608L1047.14 846.289H876.614L791.35 698.608L876.614 550.927H1047.14Z" fill="#C4C4C4"/>' +
                            '</mask>' +
                            '<g mask="url(#mask' + curID + ')">' +
                                '<image id="image' + curID + '" width="907" height="1000" xlink:href="' + curItem.attr('data-image') + '"/>' +
                            '</g>' +
                        '</svg>');
            curID++;
        });
        curSlider.find('.main-slider-item').eq(0).addClass('active');

        window.setInterval(function() {
            var curIndex = curSlider.find('.main-slider-item').index(curSlider.find('.main-slider-item.active'));
            curIndex++;
            if (curIndex > curSlider.find('.main-slider-item').length - 1) {
                curIndex = 0;
            }
            curSlider.find('.main-slider-item.active').removeClass('active');
            curSlider.find('.main-slider-item').eq(curIndex).addClass('active');
        }, 5000);
    });

    $('.header-menu').each(function() {
        $('.header-menu ul').append('<li class="header-menu-hover"></li>');
        var $navActive = $('.header-menu .header-menu-hover');

        $navActive.data('origLeft', 0).data('origWidth', 0);

        $('.header-menu ul li a').on('mouseover', function() {
            var $el = $(this);
            var leftPos = $el.parent().offset().left - $el.parent().parent().offset().left;
            var newWidth = $el.parent().outerWidth();
            $navActive.stop().animate({
                left: leftPos,
                width: newWidth
            });
        });

        $('.header-menu ul li a').on('mouseout', function() {
            $navActive.stop().animate({
                left: $navActive.data('origLeft'),
                width: $navActive.data('origWidth')
            });
        });
    });

    $('.up-link').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

    $('body').on('click', '.partcipant-prefs-menu-item a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.partcipant-prefs-menu-item.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.partcipant-prefs-menu-item').index(curLi);
            $('.partcipant-prefs-content.active').removeClass('active');
            $('.partcipant-prefs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('body').on('click', '.video-detail-link', function(e) {
        $('.video-detail-player').html('');
        $(this).parent().addClass('start');
        $(this).parent().find('.video-detail-player').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        e.preventDefault();
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('.mobile-menu-link').click(function(e) {
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('mobile-menu-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        $('html').data('scrollTop', curScroll);
        $('.wrapper').css('margin-top', -curScroll);
        e.preventDefault();
    });

    $('.mobile-menu-close').click(function(e) {
        $('html').removeClass('mobile-menu-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $('.wrapper').css('margin-top', 0);
        $(window).scrollTop($('html').data('scrollTop'));
        e.preventDefault();
    });

    $('.mobile-menu-bg').click(function() {
        $('html').removeClass('mobile-menu-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $('.wrapper').css('margin-top', 0);
        $(window).scrollTop($('html').data('scrollTop'));
    });

    $('.mobile-menu-header-lang-link').click(function(e) {
        $('.mobile-menu-header-lang').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.mobile-menu-header-lang').length == 0) {
            $('.mobile-menu-header-lang').removeClass('open');
        }
    });

    $('.footer-block-title').click(function(e) {
        $(this).parent().toggleClass('open');
    });

    $('.tabs-content-title').click(function(e) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', '.contacts-item-mobile-link', function(e) {
        $(this).parent().parent().parent().toggleClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.catalogue-filter-group-header', function(e) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', '.catalogue-filter-group-all a', function(e) {
        $(this).parent().parent().toggleClass('all');
        e.preventDefault();
    });

    $('body').on('change', '.catalogue-view input', function(e) {
        $('.catalogue-list').stop(true, true).animate({'opacity': 0}, 150, 'easeInQuad', function() {
            if ($('#catalogue-view-rows').prop('checked')) {
                $('.catalogue-list').addClass('catalogue-list-rows');
                $('.catalogue-rows-header').addClass('visible');
            } else {
                $('.catalogue-list').removeClass('catalogue-list-rows');
                $('.catalogue-rows-header').removeClass('visible');
            }
            $('.catalogue-list').css({'top': 20}).animate({'opacity': 1, 'top': 0}, 250, 'easeInQuad');
        });
    });

    $('.catalogue-view input').each(function(e) {
        $('.catalogue-list').stop(true, true).animate({'opacity': 0}, 150, 'easeInQuad', function() {
            if ($('#catalogue-view-rows').prop('checked')) {
                $('.catalogue-list').addClass('catalogue-list-rows');
                $('.catalogue-rows-header').addClass('visible');
            } else {
                $('.catalogue-list').removeClass('catalogue-list-rows');
                $('.catalogue-rows-header').removeClass('visible');
            }
            $('.catalogue-list').css({'top': 20}).animate({'opacity': 1, 'top': 0}, 250, 'easeInQuad');
        });
    });

    $('body').on('click', '.catalogue-filter-item-parent-label-inner', function(e) {
        $(this).parent().parent().parent().toggleClass('open');
    });

    $('body').on('change', '.catalogue-filter-item-parent input', function(e) {
        if ($(this).prop('checked')) {
            var curBlock = $(this).parents().filter('.catalogue-filter-item');
            curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').prop('checked', true);
        } else {
            var curBlock = $(this).parents().filter('.catalogue-filter-item');
            curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').prop('checked', false);
        }
    });

    $('body').on('change', '.catalogue-filter-item-sub .catalogue-filter-item input', function(e) {
        var curBlock = $(this).parent().parent().parent().parent().parent();
        if (curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input:checked').length == curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').length) {
            curBlock.find('.catalogue-filter-item-parent input').prop('checked', true);
        } else {
            curBlock.find('.catalogue-filter-item-parent input').prop('checked', false);
        }
    });

    $('body').on('change', '.catalogue-filter-container input[type="checkbox"]', function(e) {
        $('.catalogue-list').addClass('loading');
        var curForm = $('.catalogue-filter-container form');
        var formData = new FormData(curForm[0]);

        $.ajax({
            type: 'POST',
            url: $(curForm).attr('action'),
            processData: false,
            contentType: false,
            dataType: 'html',
            data: formData,
            cache: false
        }).done(function(html) {
            $('.catalogue-list').html($(html).find('.catalogue-list').html());
            $('.catalogue-count strong').eq(0).html($(html).find('.catalogue-list').attr('count_filter'));
            $('.pager').html($(html).find('.pager').html());
            $('.catalogue-list').removeClass('loading');
        });
    });

    $('body').on('click', '.window-catalogue-descr-more a', function(e) {
        $('.window-catalogue-descr').toggleClass('open');
        e.preventDefault();
    });

});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('input.phoneRU').mask('+7 000 000-00-00');

    curForm.find('.form-input textarea').each(function() {
        $(this).css({'height': this.scrollHeight, 'overflow-y': 'hidden'});
    });

    curForm.find('.form-input-date input').mask('00.00.0000');
    curForm.find('.form-input-date input').attr('autocomplete', 'off');
    curForm.find('.form-input-date input').addClass('inputDate');

    curForm.find('.form-input-date input').on('keyup', function() {
        var curValue = $(this).val();
        if (curValue.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
            var isCorrectDate = true;
            var userDate = new Date(curValue.substr(6, 4), Number(curValue.substr(3, 2)) - 1, Number(curValue.substr(0, 2)));
            if ($(this).attr('min')) {
                var minDateStr = $(this).attr('min');
                var minDate = new Date(minDateStr.substr(6, 4), Number(minDateStr.substr(3, 2)) - 1, Number(minDateStr.substr(0, 2)));
                if (userDate < minDate) {
                    isCorrectDate = false;
                }
            }
            if ($(this).attr('max')) {
                var maxDateStr = $(this).attr('max');
                var maxDate = new Date(maxDateStr.substr(6, 4), Number(maxDateStr.substr(3, 2)) - 1, Number(maxDateStr.substr(0, 2)));
                if (userDate > maxDate) {
                    isCorrectDate = false;
                }
            }
            if (isCorrectDate) {
                var myDatepicker = $(this).data('datepicker');
                if (myDatepicker) {
                    var curValueArray = curValue.split('.');
                    myDatepicker.selectDate(new Date(Number(curValueArray[2]), Number(curValueArray[1]) - 1, Number(curValueArray[0])));
                    myDatepicker.show();
                    $(this).focus();
                }
            } else {
                $(this).addClass('error');
                return false;
            }
        }
    });

    curForm.find('.form-input-date input').each(function() {
        var minDateText = $(this).attr('min');
        var minDate = null;
        if (typeof (minDateText) != 'undefined') {
            var minDateArray = minDateText.split('.');
            minDate = new Date(Number(minDateArray[2]), Number(minDateArray[1]) - 1, Number(minDateArray[0]));
        }
        var maxDateText = $(this).attr('max');
        var maxDate = null;
        if (typeof (maxDateText) != 'undefined') {
            var maxDateArray = maxDateText.split('.');
            maxDate = new Date(Number(maxDateArray[2]), Number(maxDateArray[1]) - 1, Number(maxDateArray[0]));
        }
        if ($(this).hasClass('maxDate1Year')) {
            var curDate = new Date();
            curDate.setFullYear(curDate.getFullYear() + 1);
            curDate.setDate(curDate.getDate() - 1);
            maxDate = curDate;
            var maxDay = curDate.getDate();
            if (maxDay < 10) {
                maxDay = '0' + maxDay
            }
            var maxMonth = curDate.getMonth() + 1;
            if (maxMonth < 10) {
                maxMonth = '0' + maxMonth
            }
            $(this).attr('max', maxDay + '.' + maxMonth + '.' + curDate.getFullYear());
        }
        var startDate = new Date();
        if (typeof ($(this).attr('value')) != 'undefined') {
            var curValue = $(this).val();
            if (curValue != '') {
                var startDateArray = curValue.split('.');
                startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
            }
        }
        $(this).datepicker({
            language: 'ru',
            minDate: minDate,
            maxDate: maxDate,
            startDate: startDate,
            toggleSelected: false
        });
        if (typeof ($(this).attr('value')) != 'undefined') {
            var curValue = $(this).val();
            if (curValue != '') {
                var startDateArray = curValue.split('.');
                startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
                $(this).data('datepicker').selectDate(startDate);
            }
        }
    });

    curForm.find('.form-select select').each(function() {
        var curSelect = $(this);
        var options = {
            minimumResultsForSearch: 99
        }

        curSelect.select2(options);
        if (curSelect.find('option:selected').legnth > 0 || curSelect.find('option').legnth == 1 || curSelect.find('option:first').html() != '') {
            curSelect.trigger({type: 'select2:select'})
        }
    });

    curForm.validate({
        ignore: ''
    });
}

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (windowScroll > 0) {
        $('html').addClass('header-fixed');
        var lastScroll = $('header').data('lastScroll');
        if (typeof (lastScroll) == 'undefined') {
            lastScroll = 0;
        }

        if (Math.abs(lastScroll - windowScroll) > 5) {
            if (windowScroll > lastScroll){
                $('header').addClass('header-up');
            } else {
                $('header').removeClass('header-up');
            }
            $('header').data('lastScroll', windowScroll);
        }
    } else {
        $('html').removeClass('header-fixed');
    }

    if ($('.up-link').length == 1) {
        if (windowScroll > windowHeight) {
            $('.up-link').addClass('visible');
        } else {
            $('.up-link').removeClass('visible');
        }

        if ($(window).width() > 1169) {
            if (windowScroll + windowHeight > $('footer').offset().top) {
                $('.up-link').css({'margin-bottom': (windowScroll + windowHeight) - $('footer').offset().top});
            } else {
                $('.up-link').css({'margin-bottom': 0});
            }
        } else {
            if (windowScroll + windowHeight > $('.footer-left').offset().top) {
                $('.up-link').css({'margin-bottom': (windowScroll + windowHeight) - $('.footer-left').offset().top});
            } else {
                $('.up-link').css({'margin-bottom': 0});
            }
        }
    }

});

$(window).on('load resize', function() {
    $('.main-scheme-content').each(function() {
        if ($(window).width() < 1170) {
            $(this).mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $(this).mCustomScrollbar('destroy');
        }
    });

    $('.partcipant-prefs-menu').each(function() {
        if ($(window).width() < 1170) {
            $(this).mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $(this).mCustomScrollbar('destroy');
        }
    });

    $('.window-catalogue-descr-wrap').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open');
        if (curBlock.height() < curBlock.find('.window-catalogue-descr-inner').height()) {
            curBlock.addClass('with-more');
        } else {
            curBlock.removeClass('with-more');
        }
    });
});

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});
        $('header').css({'padding-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"></a>');
            $('.window .window-loading').remove();
        }

        $('.window-catalogue-descr-wrap').each(function() {
            var curBlock = $(this);
            curBlock.removeClass('open');
            if (curBlock.height() < curBlock.find('.window-catalogue-descr-inner').height()) {
                curBlock.addClass('with-more');
            } else {
                curBlock.removeClass('with-more');
            }
        });

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });
    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('header').css({'padding-right': 0});
        $('.wrapper').css({'top': 0});
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}