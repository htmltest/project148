$(document).ready(function() {

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
            $('html, body').animate({'scrollTop': $('.main-scheme-content-point[data-id="' + curId + '"]').find('.main-scheme-content-point-popup').offset().top - 107});
            $('.main-scheme-content').mCustomScrollbar('scrollTo', Number($('.main-scheme-content-point[data-id="' + curId + '"]').css('left').replace('px', '')) - 132);
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
            html = '<div>' + html + '</div>';
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

    $('.omni-link').click(function(e) {
        $('.omni').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.omni').length == 0) {
            $('.omni').removeClass('open');
        }
    });

    $('body').on('click', '.main-partners-item > a', function(e) {
        if ($(window).width() < 1170) {
            var curBlock = $(this).parent();
            if (curBlock.find('.main-partners-item-window').length > 0) {
                if (curBlock.hasClass('open')) {
                    curBlock.removeClass('open');
                } else {
                    $('.main-partners-item.open').removeClass('open');
                    curBlock.addClass('open');
                }
                e.preventDefault();
            }
        }
    });

    $('body').on('click', '.main-partners-item-window-close', function(e) {
        $('.main-partners-item.open').removeClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-partners-item').length == 0) {
            $('.main-partners-item.open').removeClass('open');
        }
    });

    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Закрыть (Esc)',
        tLoading: 'Загрузка...',
        gallery: {
            tPrev: 'Предыдущая',
            tNext: 'Следующая',
            tCounter: '%curr% из %total%'
        },
        image: {
            tError: '<a href="%url%">Изображение</a> не может быть загружено.'
        },
        ajax: {
            tError: '<a href="%url%">Контент</a> не может быть загружен.'
        }
    });

    $('.archive-gallery').each(function() {
        $(this).find('.archive-gallery-item-inner a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    $('.event-cards').each(function() {
        var curTabs = $(this);
        var curTabsMenu = curTabs.find('> .event-cards-tabs');
        var curTabsContainer = curTabs.find('> .event-cards-tabs-container');
        var newHTML = '';
        curTabsContainer.find('> .event-cards-tabs-content').each(function() {
            var curTabTitle = $(this).find('> .event-cards-tabs-content-title').html();
            newHTML += '<a href="#" class="event-cards-tabs-item">' + curTabTitle + '</a>';
        });
        curTabsContainer.find('> .event-cards-tabs-content').eq(0).addClass('active');
        curTabsMenu.append(newHTML);
        curTabsMenu.find('.event-cards-tabs-item').eq(0).addClass('active');
    });

    $('body').on('click', '.event-cards-tabs-item', function(e) {
        var curLi = $(this);
        if (!curLi.hasClass('active')) {
            var curTabs = curLi.parents().filter('.event-cards');
            curTabs.find('.event-cards-tabs-item.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curTabs.find('.event-cards-tabs-item').index(curLi);
            curTabs.find('.event-cards-tabs-content.active').removeClass('active');
            curTabs.find('.event-cards-tabs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.event-cards-tabs-content-title').click(function(e) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', '.archive-card-descr-more a', function(e) {
        $('.archive-card-descr-container').toggleClass('open');
        e.preventDefault();
    });
    
    $('body').on('click', '.reviews-item-header', function(e) {
        $(this).parent().find('.reviews-item-text').slideToggle();
    });

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

    $('.news').each(function() {
        var curList = $(this);

        curList.find('.news-item-inner').css({'height': 'auto'});

        curList.find('.news-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.news-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.catalogue-list').each(function() {
        var curList = $(this);

        curList.find('.catalogue-item-source').css({'height': 'auto'});

        if (!curList.find('.catalogue-list').hasClass('catalogue-list-rows')) {

            curList.find('.catalogue-item').each(function() {
                var curBlock = $(this);
                var curHeight = curBlock.find('.catalogue-item-source').outerHeight();
                var curTop = curBlock.offset().top;

                curList.find('.catalogue-item').each(function() {
                    var otherBlock = $(this);
                    if (otherBlock.offset().top == curTop) {
                        var newHeight = otherBlock.find('.catalogue-item-source').outerHeight();
                        if (newHeight > curHeight) {
                            curBlock.find('.catalogue-item-source').css({'height': newHeight + 'px'});
                        } else {
                            otherBlock.find('.catalogue-item-source').css({'height': curHeight + 'px'});
                        }
                    }
                });
            });
        }
    });

    $('.archive-card-descr-container').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open');
        if (curBlock.height() < curBlock.find('.archive-card-descr-content').height()) {
            curBlock.addClass('with-more');
        } else {
            curBlock.removeClass('with-more');
        }
    });

});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if ($('.omni').length == 1) {

        if ($(window).width() > 1169) {
            if (windowScroll + windowHeight > $('footer').offset().top) {
                $('.omni').css({'margin-bottom': (windowScroll + windowHeight) - $('footer').offset().top});
            } else {
                $('.omni').css({'margin-bottom': 0});
            }
        } else {
            if (windowScroll + windowHeight > $('.footer-left').offset().top) {
                $('.omni').css({'margin-bottom': (windowScroll + windowHeight) - $('.footer-left').offset().top});
            } else {
                $('.omni').css({'margin-bottom': 0});
            }
        }
    }

});

$(window).on('load', function() {
    $('.archive-gallery').each(function() {
        var shuffleInstance = new Shuffle(this, {
            itemSelector: '.archive-gallery-item',
            roundTransforms: false,
            throttleTime: 0
        });
    });
});