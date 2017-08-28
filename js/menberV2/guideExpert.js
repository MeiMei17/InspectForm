function guideExpert() {

    listInit();
    //加载引导
    $('html').addClass('noscroll');
    $('#container').append(
        '<div id="guide">'
        + '<div class="guideShade"></div>'
        + '<div class="guide_step1">'
        + '<a href="javascript:;" class="next"></a>'
        + '<a href="javascript:;" class="sikp"></a>'
        + '</div>'
        + '<div class="guideExpert_step2 narrow">'
        + '<a href="javascript:;" class="next"></a>'
        + '<a href="javascript:;" class="sikp"></a>'
        + '</div>'
        + '<div class="guideExpert_step3 narrow">'
        + '<a href="javascript:;" class="next" id="packUp"></a>'
        + '<a href="javascript:;" class="sikp"></a>'
        + '</div>'
        + '<div class="guideExpert_step4 narrow">'
        + '<a href="javascript:;" class="next"></a>'
        + '<a href="javascript:;" class="sikp"></a>'
        + '</div>'
        + '<div class="guideExpert_step5 narrow">'
        + '<a href="javascript:;" class="start"></a>'
        + '<a href="javascript:;" class="sikp"></a>'
        + '</div>'
        + '</div>'
    );
    //点击下一步
    $('.next').on('click', function () {
        $(this).parent().removeClass('scale').addClass('narrow').next('div').addClass('scale');
    });
    //点击跳过指引、右上角、开始体验
    $('.sikp,.start').on('click', function () {
        $('#guide').remove();
        $('html').removeClass('noscroll');
    });
    //点击第二步收起展开部分
    $('#packUp').on('click', function() {
        $('.col_left').find('dl').removeClass('cur');
        $('.col_left').find('i').removeClass('del180');
    })

};
//初始化页面
function listInit() {

    $("html,body").animate({"scrollLeft": "0"}, 10);
    $("html,body").animate({"scrollTop": "0"}, 10);

    $('.col_left').find('dl').removeClass('cur').eq(0).addClass('cur');
    $('.col_left').find('i').removeClass('del180').eq(0).addClass('del180');

};
//运行引导
var guideExpert = new guideExpert();
