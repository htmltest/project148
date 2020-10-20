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
        var curBlock = curLi.parents().filter('.partcipant-prefs');
        if (!curLi.hasClass('active')) {
            curBlock.find('.partcipant-prefs-menu-item.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curBlock.find('.partcipant-prefs-menu-item').index(curLi);
            curBlock.find('.partcipant-prefs-content.active').removeClass('active');
            curBlock.find('.partcipant-prefs-content').eq(curIndex).addClass('active');
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

    $('.catalogue-filter-group-all').each(function() {
        var curBlock = $(this).parent();
        if (curBlock.find('> .catalogue-filter-item').length > 6) {
            $(this).addClass('visible');
        }
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
            $(window).trigger('resize');
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
            $(window).trigger('resize');
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
        updateMobileFilter();
    });

    updateMobileFilter();

    $('body').on('change', '.catalogue-filter-item-sub .catalogue-filter-item input', function(e) {
        var curBlock = $(this).parent().parent().parent().parent().parent();
        if (curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input:checked').length == curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').length) {
            curBlock.find('.catalogue-filter-item-parent input').prop('checked', true);
        } else {
            curBlock.find('.catalogue-filter-item-parent input').prop('checked', false);
        }
    });

    $('body').on('change', '.catalogue-filter-container input[type="checkbox"], .catalogue-filter-container input[type="radio"]', function(e) {
        $('.catalogue-list').addClass('loading');
        var curForm = $('.catalogue-filter-container form');
        var formData = new FormData(curForm[0]);

        if (typeof (history.pushState) !== undefined) {
            var historyData = curForm.serialize();
            if ($('.pager').length > 0 && $('.pager a:not(.pager-prev, .pager-next)').index($('.pager a.active'))) {
                historyData += '&PAGEN_1=' + $('.pager a.active').html();
            }
            history.pushState(null, null, curForm.attr('action') + '?' + historyData);
        }

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
            $(window).trigger('resize');
        });
        updateMobileFilter();
    });

    $('.catalogue-search form').each(function() {
        var curForm = $(this);
        var validator = curForm.validate();
        if (validator) {
            validator.destroy();
        }
        curForm.validate({
            ignore: '',
            submitHandler: function(form) {
                $('.catalogue-list').addClass('loading');
                var formData = new FormData(curForm[0]);
                $.ajax({
                    type: 'POST',
                    url: curForm.attr('action'),
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
                    $(window).trigger('resize');
                    $('.catalogue-list').removeClass('loading');
                    $('html, body').animate({'scrollTop': $('.catalogue-list').offset().top - $('header').outerHeight() - 20});
                });
            }
        });
    });

    $('body').on('click', '.catalogue-filter-reset button', function(e) {
        $('.catalogue-filter input[type="text"]').val('');
        $('.catalogue-filter input[type="checkbox"]').prop('checked', false);
        $('.catalogue-filter-container input[type="checkbox"]').eq(0).trigger('change');
        e.preventDefault();
    });

    $('body').on('click', '.catalogue-container .pager a', function(e) {
        $('.catalogue-list').addClass('loading');

        if ($('.pager').length > 0) {
            var curPage = $('.pager a.active');
            var curPageIndex = $('.pager a:not(.pager-prev, .pager-next)').index(curPage);
            if (!$(this).hasClass('pager-prev') && !$(this).hasClass('pager-next')) {
                curPageIndex = $('.pager a:not(.pager-prev, .pager-next)').index($(this));
            }
            if ($(this).hasClass('pager-prev') && curPageIndex > 0) {
                curPageIndex--;
            }
            if ($(this).hasClass('pager-next') && curPageIndex < $('.pager a:not(.pager-prev, .pager-next)').length - 1) {
                curPageIndex++;
            }
            curPage = $('.pager a:not(.pager-prev, .pager-next)').eq(curPageIndex);
            console.log(curPage.html());
        }

        var curForm = $('.catalogue-filter-container form');
        var formData = new FormData(curForm[0]);

        if (typeof (history.pushState) !== undefined) {
            var historyData = curForm.serialize();
            if ($('.pager').length > 0) {
                historyData += '&PAGEN_1=' + curPage.html();
            }
            history.pushState(null, null, curForm.attr('action') + '?' + historyData.replace('&ajaxfilter=Y', '').replace('&amp;ajaxfilter=Y', '').replace('?ajaxfilter=Y&', '?').replace('ajaxfilter=Y', ''));
        }

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
            $(window).trigger('resize');
            $('.catalogue-list').removeClass('loading');
        });
        e.preventDefault();
    });

    $('.catalogue-container').each(function() {
        $('.catalogue-list').addClass('loading');
        var curForm = $('.catalogue-filter-container form');
        var formData = new FormData(curForm[0]);

        if (typeof (history.pushState) !== undefined) {
            var historyData = curForm.serialize();
            if ($('.pager').length > 0 && $('.pager a:not(.pager-prev, .pager-next)').index($('.pager a.active'))) {
                historyData += '&PAGEN_1=' + $('.pager a.active').html();
            }
            history.pushState(null, null, curForm.attr('action') + '?' + historyData);
        }

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
            $(window).trigger('resize');
            $('.catalogue-list').removeClass('loading');
        });
        updateMobileFilter();
    });

    $('.catalogue-filter-mobile-ctrl .btn').click(function(e) {
        var curLink = $(this);
        if (curLink.hasClass('active')) {
            curLink.removeClass('active');
            if (curLink.hasClass('catalogue-filter-mobile-link')) {
                $('.catalogue-filter-container').removeClass('visible');
                $('.catalogue-filter-title').removeClass('visible');
            } else {
                $('.catalogue-search').removeClass('visible');
            }
        } else {
            $('.catalogue-filter-mobile-ctrl .btn.active').removeClass('active');
            curLink.addClass('active');
            if (curLink.hasClass('catalogue-filter-mobile-link')) {
                $('.catalogue-search').removeClass('visible');
                $('.catalogue-filter-container').addClass('visible');
                $('.catalogue-filter-title').addClass('visible');
            } else {
                $('.catalogue-filter-container').removeClass('visible');
                $('.catalogue-filter-title').removeClass('visible');
                $('.catalogue-search').addClass('visible');
            }
        }
        e.preventDefault();
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

    $('body').on('click', '.archive-card-descr-more a', function(e) {
        $('.archive-card-descr-container').toggleClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.reviews-item-header', function(e) {
        $(this).parent().find('.reviews-item-text').slideToggle();
    });

    $('body').on('click', '.archive-gallery-item-inner a', function(e) {
        var curLink = $(this);
        var curItem = curLink.parents().filter('.archive-gallery-item');
        var curGallery = curItem.parents().filter('.archive-gallery');
        var curIndex = curGallery.find('.archive-gallery-item').index(curItem);

        var curPadding = $('.wrapper').width();
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-photo-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        var windowHTML =    '<div class="window-photo">';

        windowHTML +=           '<div class="window-photo-preview">' +
                                    '<div class="window-photo-preview-inner">' +
                                        '<div class="window-photo-preview-list">';

        var galleryLength = curGallery.find('.archive-gallery-item-inner').length;
        for (var i = 0; i < galleryLength; i++) {
            var curTitle = '';
            var curGalleryItem = curGallery.find('.archive-gallery-item-inner').eq(i);
            if (curGalleryItem.find('a').attr('title') !== undefined) {
                curTitle = ' title="' + curGalleryItem.find('a').attr('title') + '"';
            }
            windowHTML +=                   '<div class="window-photo-preview-list-item"><a href="#"' + curTitle + '><img src="' + curGalleryItem.find('img').attr('src') + '" alt="" /></a></div>';
        }
        windowHTML +=                   '</div>' +
                                    '</div>' +
                                '</div>';

        windowHTML +=           '<a href="#" class="window-photo-close"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.779074 14.4895C0.592823 14.3022 0.488281 14.0487 0.488281 13.7845C0.488281 13.5204 0.592823 13.2669 0.779074 13.0795L13.5091 0.349543C13.5987 0.244862 13.709 0.159841 13.8331 0.0998181C13.9572 0.0397948 14.0923 0.00606467 14.23 0.000745179C14.3677 -0.00457431 14.5051 0.0186316 14.6334 0.0689062C14.7617 0.119181 14.8783 0.195439 14.9757 0.292893C15.0732 0.390348 15.1494 0.506896 15.1997 0.635221C15.25 0.763546 15.2732 0.900878 15.2679 1.0386C15.2626 1.17632 15.2288 1.31145 15.1688 1.43551C15.1088 1.55958 15.0238 1.6699 14.9191 1.75954L2.18907 14.4895C2.00171 14.6758 1.74826 14.7803 1.48407 14.7803C1.21989 14.7803 0.966436 14.6758 0.779074 14.4895Z" /><path d="M0.779074 0.349508C0.966436 0.163257 1.21989 0.0587158 1.48407 0.0587158C1.74826 0.0587158 2.00171 0.163257 2.18907 0.349508L14.9191 13.0795C15.0238 13.1692 15.1088 13.2795 15.1688 13.4035C15.2288 13.5276 15.2626 13.6627 15.2679 13.8005C15.2732 13.9382 15.25 14.0755 15.1997 14.2038C15.1494 14.3322 15.0732 14.4487 14.9757 14.5462C14.8783 14.6436 14.7617 14.7199 14.6334 14.7701C14.5051 14.8204 14.3677 14.8436 14.23 14.8383C14.0923 14.833 13.9572 14.7993 13.8331 14.7392C13.709 14.6792 13.5987 14.5942 13.5091 14.4895L0.779074 1.75951C0.592823 1.57215 0.488281 1.31869 0.488281 1.05451C0.488281 0.790323 0.592823 0.536871 0.779074 0.349508Z" /></svg></a>';
        windowHTML +=           '<a href="#" class="window-photo-download download" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0291 10.2594L9.98914 13.2993L6.94922 10.2594" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round"/><path d="M9.98828 0.760254V12.7938" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round"/><path d="M6.94823 6.45972H3.52832V18.6194H16.448V6.45972H13.0281" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round"/></svg></a>';
        windowHTML +=           '<div class="window-photo-social">';
        windowHTML +=               '<div class="window-photo-social-icon"><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.58203 11.4219C4.58788 11.4219 5.47434 10.9592 6.03976 10.2548L12.4347 13.2746C12.3562 13.5316 12.3008 13.7976 12.3008 14.0781C12.3008 15.6892 13.6887 17 15.3945 17C17.1003 17 18.4883 15.6892 18.4883 14.0781C18.4883 12.4671 17.1003 11.1562 15.3945 11.1562C14.3885 11.1562 13.502 11.6191 12.9366 12.3236L6.54175 9.30379C6.6203 9.04673 6.67578 8.78063 6.67578 8.5C6.67578 8.2195 6.62035 7.95349 6.54184 7.69651L12.9368 4.67667C13.5022 5.38102 14.3887 5.84375 15.3945 5.84375C17.1003 5.84375 18.4883 4.53292 18.4883 2.92187C18.4883 1.31083 17.1003 -1.78601e-06 15.3945 -1.63688e-06C13.6887 -1.48776e-06 12.3008 1.31083 12.3008 2.92187C12.3008 3.2025 12.3563 3.4686 12.4348 3.72567L6.03999 6.74547C5.47461 6.04098 4.58801 5.57812 3.58203 5.57812C1.87622 5.57812 0.488282 6.88896 0.488282 8.5C0.488283 10.111 1.87622 11.4219 3.58203 11.4219ZM15.3945 12.2187C16.48 12.2187 17.3633 13.053 17.3633 14.0781C17.3633 15.1033 16.48 15.9375 15.3945 15.9375C14.3091 15.9375 13.4258 15.1033 13.4258 14.0781C13.4258 13.053 14.3091 12.2187 15.3945 12.2187ZM15.3945 1.0625C16.48 1.0625 17.3633 1.89673 17.3633 2.92187C17.3633 3.94702 16.48 4.78125 15.3945 4.78125C14.3091 4.78125 13.4258 3.94702 13.4258 2.92187C13.4258 1.89673 14.3091 1.0625 15.3945 1.0625ZM3.58203 6.64062C4.66748 6.64062 5.55078 7.47485 5.55078 8.5C5.55078 9.52515 4.66748 10.3594 3.58203 10.3594C2.49658 10.3594 1.61328 9.52515 1.61328 8.5C1.61328 7.47485 2.49658 6.64062 3.58203 6.64062Z" /></svg></div>';
        windowHTML +=               '<div class="window-photo-social-window">';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-fb"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 15.0914C30 6.75575 23.2852 0 15 0C6.71484 0 0 6.75575 0 15.0914C0 22.6253 5.48438 28.8681 12.6562 30V19.4537H8.84766V15.0914H12.6562V11.7666C12.6562 7.98487 14.8945 5.89507 18.3223 5.89507C19.9629 5.89507 21.6797 6.18982 21.6797 6.18982V9.90371H19.7871C17.9238 9.90371 17.3438 11.068 17.3438 12.2617V15.0914H21.5039L20.8389 19.4537H17.3438V30C24.5156 28.8681 30 22.6253 30 15.0914Z" /></svg></a>';
        windowHTML +=                   '<a href="#" class="window-photo-social-item window-photo-social-item-vk"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM14.5822 12.7112L14.5508 12.1921C14.4563 10.8469 15.2852 9.61814 16.5967 9.14148C17.0794 8.972 17.8978 8.95081 18.4329 9.09911C18.6427 9.16266 19.0414 9.37451 19.3247 9.56518L19.8388 9.91473L20.4054 9.73466C20.7202 9.63933 21.1398 9.48044 21.3287 9.37451C21.5071 9.27918 21.6645 9.22622 21.6645 9.258C21.6645 9.43807 21.2762 10.0524 20.951 10.3914C20.5103 10.8681 20.6362 10.9104 21.5281 10.5927C22.0632 10.4126 22.0737 10.4126 21.9687 10.6138C21.9058 10.7198 21.5805 11.0905 21.2343 11.4295C20.6467 12.0121 20.6152 12.0756 20.6152 12.5629C20.6152 13.3149 20.2585 14.8826 19.9018 15.7406C19.2408 17.3507 17.8243 19.0137 16.4079 19.8505C14.4144 21.0263 11.7598 21.3229 9.52499 20.6344C8.78005 20.4013 7.5 19.8082 7.5 19.7022C7.5 19.6705 7.88821 19.6281 8.36036 19.6175C9.34663 19.5963 10.3329 19.3209 11.1723 18.8336L11.7388 18.4947L11.0883 18.2722C10.165 17.9545 9.33613 17.2236 9.12629 16.5351C9.06334 16.3126 9.08432 16.302 9.67188 16.302L10.2804 16.2914L9.76631 16.0478C9.15777 15.7406 8.60168 15.2216 8.32888 14.692C8.12953 14.3106 7.87772 13.3467 7.95116 13.2726C7.97215 13.2408 8.19248 13.3043 8.4443 13.3891C9.16826 13.6539 9.26269 13.5903 8.843 13.1455C8.05609 12.3404 7.81477 11.1435 8.19248 10.0101L8.37085 9.50163L9.06334 10.1901C10.4798 11.5778 12.148 12.404 14.0576 12.6476L14.5822 12.7112Z" /></svg></a>';
        windowHTML +=               '</div>';
        windowHTML +=           '</div>';
        windowHTML +=           '<div class="window-photo-title"></div>';

        windowHTML +=           '<div class="window-photo-slider">' +
                                    '<div class="window-photo-slider-list">';

        for (var i = 0; i < galleryLength; i++) {
            var curGalleryItem = curGallery.find('.archive-gallery-item').eq(i);
            windowHTML +=               '<div class="window-photo-slider-list-item">' +
                                            '<div class="window-photo-slider-list-item-inner"><img src="' + pathTemplate + 'images/loading.gif" data-src="' + curGalleryItem.find('.archive-gallery-item-inner a').attr('href') + '" alt="" /></div>' +
                                        '</div>';
        }
        windowHTML +=               '</div>' +
                                '</div>';

        windowHTML +=       '</div>';

        $('.window-photo').remove();
        $('body').append(windowHTML);

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);

        $('.window-photo').each(function() {
            var marginPhoto = 166;
            if ($(window).width() < 1200) {
                marginPhoto = 253;
            }
            var newHeight = $('.window-photo-title').height() + marginPhoto;
            $('.window-photo-slider-list-item-inner').css({'height': 'calc(100vh - ' + newHeight + 'px)', 'line-height': 'calc(100vh - ' + newHeight + 'px)'});
        });

        if ($(window).width() > 1169) {
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'y',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $('.window-photo-preview-inner').mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        }

        $('.window-photo-slider-list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0.999265L2 6.99927L9 12.9993" stroke="#000000" stroke-width="2"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13.0012L8 7.00122L0.999999 1.00122" stroke="#000000" stroke-width="2"/></svg></button>',
            dots: false,
            speed: 250,
            initialSlide: curIndex,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }).on('setPosition', function(event, slick) {
            var currentSlide = $('.window-photo-slider-list').slick('slickCurrentSlide');
            $('.window-photo-preview-list-item.active').removeClass('active');
            $('.window-photo-preview-list-item').eq(currentSlide).addClass('active');
            $('.window-photo-preview-inner').mCustomScrollbar('scrollTo', $('.window-photo-preview-list-item').eq(currentSlide));
            $('.window-photo-download').attr('href', $('.window-photo-slider-list-item').eq(currentSlide).find('img').attr('data-src'));
            var curIMG = $('.window-photo-slider-list-item').eq(currentSlide).find('img');
            if (curIMG.attr('src') !== curIMG.attr('data-src')) {
                var newIMG = $('<img src="" alt="" style="position:fixed; left:-9999px; top:-9999px" />');
                $('body').append(newIMG);
                newIMG.one('load', function(e) {
                    curIMG.attr('src', curIMG.attr('data-src'));
                    newIMG.remove();
                });
                newIMG.attr('src', curIMG.attr('data-src'));
                window.setTimeout(function() {
                    curIMG.attr('src', curIMG.attr('data-src'));
                    if (newIMG) {
                        newIMG.remove();
                    }
                }, 3000);
            }
            if ($('.window-photo-preview-list-item').eq(currentSlide).find('a').attr('title') !== undefined) {
                $('.window-photo-title').html($('.window-photo-preview-list-item').eq(currentSlide).find('a').attr('title'));
            } else {
                $('.window-photo-title').html('');
            }
        });

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-preview-list-item a', function(e) {
        var curIndex = $('.window-photo-preview-list-item').index($(this).parent());
        $('.window-photo-slider-list').slick('slickGoTo', curIndex);
        e.preventDefault();
    });

    $('body').on('click', '.window-photo-close', function(e) {
        $('.window-photo').remove();
        $('html').removeClass('window-photo-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            if ($('.window-photo').length > 0) {
                $('.window-photo-close').trigger('click');
            }
        }
    });

    $('body').on('change', '.window-online-date-list input', function(e) {
        var curIndex = $('.window-online-date-list input').index($('.window-online-date-list input:checked'));
        $('.window-online-time-content.active').removeClass('active');
        $('.window-online-time-content .window-online-time-list input').removeClass('required');
        $('.window-online-time-content').eq(curIndex).addClass('active');
        $('.window-online-time-content').eq(curIndex).find('.window-online-time-list input').addClass('required');
        $('.window-online-date h3 .error').removeClass('visible');
        $('.window-online-date-current span').html('<strong>' + $('.window-online-date-list input:checked').attr('data-name') + '</strong> ' + $('.window-online-date-list input:checked').attr('data-day'));
        $('.window-online-date-list .archive-card-days-date').removeClass('current');
        $('.window-online-date-list input:checked').parents().filter('.archive-card-days-date').addClass('current');
    });
    
    $('body').on('change', '.window-online-time-list input', function(e) {
        $('.window-online-time h3 .error').removeClass('visible');
    });

    $('body').on('click', '.window-online-success-back a', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('.archive-card-days').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L8 8L0.999999 1" stroke-width="2"/></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.page-link').click(function(e) {
        var curBlock = $(this.hash);
        if (curBlock.length == 1) {
            if ($('html').hasClass('mobile-menu-open')) {
                $('.mobile-menu-close').trigger('click');
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - $('header').outerHeight() - 20});
            e.preventDefault();
        }
    });

    $('body').on('click', '.partcipant-prefs-content-mobile-title', function(e) {
        $(this).parents().filter('.partcipant-prefs-content').toggleClass('open');
        e.preventDefault();
    });

    $('.b-place-footer-close').click(function(e) {
        $('.b-place-footer').fadeOut();
        e.preventDefault();
    });
    
    $('.faq-menu a').click(function(e) {
        var curBlock = $(this.hash);
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top - $('header').outerHeight() - 20});
            e.preventDefault();
        }
    });
    
    $('body').on('click', 'a.archive-card-days-date', function(e) {
        var curBlock = $(this).parents().filter('.archive-card-days');
        var curDateIndex = curBlock.find('a.archive-card-days-date').index($(this));
        $('body').attr('data-clicked', curDateIndex);
        e.preventDefault();
    });

    $('body').on('click', '.news-share-item a', function(e) {
        var curLink = $(this);
        var curSocial = curLink.parent().parent();
        var curTitle = encodeURIComponent(curSocial.data('title'));
        var curDescription = encodeURIComponent(curSocial.data('description'));
        var curUrl = encodeURIComponent(curSocial.data('url'));

		switch (curLink.data('id')) {
			case 'fb':
				popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + curUrl, curTitle);
				break;

			case 'vk':
				popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle + '. ' + curDescription, curTitle);
				break;

			case 'tw':
				var text = curTitle || curDescription || '';
				if (curTitle.length > 0 && curDescription.length > 0) text = curTitle + ' - ' + curDescription;
				if (curDescription.length > 0) text = '&text=' + text;
				popupCenter('https://twitter.com/intent/tweet?url=' + curUrl + text, curTitle);
				break;

            default:
				break;
		}

        e.preventDefault();
    });

    function popupCenter(url, title) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (480 / 2)) + dualScreenLeft;
        var top = ((height / 3) - (360 / 3)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + 480 + ', height=' + 360 + ', top=' + top + ', left=' + left);
        if (window.focus) {
            newWindow.focus();
        }
    }

    $('body').on('click', '.window-photo-social-item-fb', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + curUrl, curTitle);

        e.preventDefault();
    });

    $('body').on('click', '.window-photo-social-item-vk', function(e) {
        var curTitle = encodeURIComponent($('title').html());
        var curUrl = encodeURIComponent(window.location.href);

        popupCenter('https://vk.com/share.php?url=' + curUrl + '&description=' + curTitle, curTitle);

        e.preventDefault();
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

    $('.main-reviews-list').each(function() {
        var curList = $(this);

        curList.find('.main-reviews-item-text').css({'height': 'auto'});

        curList.find('.main-reviews-item-text').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-text').each(function() {
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

        curList.find('.main-reviews-item-author').css({'height': 'auto'});

        curList.find('.main-reviews-item-author').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-author').each(function() {
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

        curList.find('.main-reviews-item-post').css({'height': 'auto'});

        curList.find('.main-reviews-item-post').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-post').each(function() {
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

        curList.find('.main-reviews-item-inner').css({'height': 'auto'});

        curList.find('.main-reviews-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-inner').each(function() {
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

});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

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

    $('.registration-side-inner').each(function() {
        var curBanner = $(this);
        var curSide = curBanner.parent();
        var curBlock = curSide.parent();
        var curHeader = $('header').height() + 20;
        if (windowScroll + curHeader > curBlock.offset().top + (curSide.offset().top - curBlock.offset().top)) {
            var newTop = windowScroll + curHeader - curBlock.offset().top;
            if (newTop + curBanner.height() < curBlock.height() + (curSide.offset().top - curBlock.offset().top)) {
                curBanner.css({'top': curHeader, 'position': 'fixed', 'left': curBanner.offset().left});
            } else {
                curBanner.css({'top': curBlock.height() - curBanner.height(), 'position': 'relative', 'left': 'auto'});
            }
        } else {
            curBanner.css({'top': 'auto', 'position': 'relative', 'left': 'auto'});
        }
    });


    $('.b-place-side-container').each(function() {
        var curBanner = $(this);
        curBanner.height(curBanner.find('.b-place-side-wrap').height());
        var curSide = curBanner.parent();
        var curBlock = curSide.parent();
        var curHeader = $('header').height() + 20;
        if (windowScroll + curHeader > curBlock.offset().top + (curSide.offset().top - curBlock.offset().top)) {
            var newTop = windowScroll + curHeader - curBlock.offset().top;
            if (newTop + curBanner.height() < curBlock.height() + (curSide.offset().top - curBlock.offset().top)) {
                curBanner.css({'top': curHeader, 'position': 'fixed', 'left': curBanner.offset().left});
            } else {
                curBanner.css({'top': curBlock.height() - curBanner.height(), 'position': 'relative', 'left': 'auto'});
            }
        } else {
            curBanner.css({'top': 'auto', 'position': 'relative', 'left': 'auto'});
        }
    });

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

function updateMobileFilter() {
    $('.catalogue-filter-group').each(function() {
        var curGroup = $(this);
        curGroup.find('.catalogue-filter-group-header-options').html('');
        curGroup.find('.catalogue-filter-item input:checked').each(function() {
            var curItem = $(this).parent().parent();
            if (curItem.hasClass('catalogue-filter-item')) {
                curGroup.find('.catalogue-filter-group-header-options').append('<div class="catalogue-filter-group-header-option"><div class="catalogue-filter-group-header-option-inner">' + curItem.find('> label > span').html() + '</div></div>');
            }
            if (curItem.is('label')) {
                curGroup.find('.catalogue-filter-group-header-options').append('<div class="catalogue-filter-group-header-option"><div class="catalogue-filter-group-header-option-inner">' + curItem.find('> .catalogue-filter-item-sub-inner > span').html() + '</div></div>');
            }
        });
    });
}