//ui-search定义
$.fn.UiSearch = function(){
    var ui = $(this);
    $('.ui-search-selected',ui).on('click',function(){
        $('.ui-search-select-list').show();
        return false;//阻止事件冒泡
    });
    $('.ui-search-select-list a',ui).on('click',function(){
        $('.ui-search-selected').text( $(this).text() );
        $('.ui-search-select-list').hide();
        return false;
    });
    $('body').on('click',function(){
        $('.ui-search-select-list').hide();
    })
}

//ui-tab定义
/* *
* @Param  {string} header  TAB组件的所有选项卡， item
* @Param  {string} content TAB组件的内容区域，所有 itme
* @option {string} focus_prefix 选项卡高亮样式前缀，可选
*/
$.fn.UiTab = function(header,content,focus_prefix){
    var ui = $(this);
    var tabs = $(header,ui);
    var cons = $(content,ui);
    var focus_prefix = focus_prefix || '';
    tabs.on('click',function(){
        console.log(ui);
        var index = $(this).index();
        tabs.removeClass(focus_prefix+'item_focus').eq(index).addClass(focus_prefix+'item_focus');
        cons.hide().eq(index).show();
        return false;
    })
}
//Ui-backTop
$.fn.UiBackTop = function(){
    var ui = $(this);
    var el = $('<a class="ui-back-Top" href="#0"></a>');
    ui.append( el );
    
    var windowHeight = $(window).height();
    $(window).on('scroll',function(){
        var top = $('body').scrollTop();
        if(top > windowHeight){
            el.show();
        }else{
            el.hide();
        }
    });
    el.on('click',function(){
        $(window).scrollTop(0);
    })
}
//UiSlider
//  1.左右箭头要能够翻页。
//  2.翻页的时候，进度点要联动。
//  3.翻到第三页时，下一页，需要回到第一页，翻到第一页时同理。
//  4.进度点在点击时，需要切换到对应页面。
//  5.没有点击时，轮播图自动滚动。
//  6.滚动过程中，屏蔽其他操作
$.fn.UiSlider = function(){
    var ui = $(this);
    var wrap = $('.ui-slider-wrap',ui);
    var btn_prev = $('.ui-slider-arrow .left',ui);
    var btn_next = $('.ui-slider-arrow .right',ui);
    var tips = $('.ui-slider-process .item',ui);
    var items = $('.ui-slider-wrap .item',ui);
    //具体操作
    var current = 0 ;
    var size = items.length;/* 新版jQ取消了size方法 */
    var width = items.eq(0).width();
    var enableAuto = true;
    //设置自动滚动感应
    ui
    .on('mouseover',function(){
        enableAuto = false;
    })
    .on('mouseout',function(){
        enableAuto = true;
    })
    wrap
    .on('move_prev',function(){
        if(current <= 0){
            current = size;
        }
        current = current - 1;
        wrap.triggerHandler('move_to',current);
    })
    .on('move_next',function(){
        if(current >= size-1){
            current = -1;
        }
        current = current + 1;
        wrap.triggerHandler('move_to',current);
    })
    .on('move_to',function(event,index){
        wrap.css('left',index*width*-1);
        tips.removeClass('item_focus').eq(index).addClass('item_focus');
    })
    .on('auto_move',function(){
        setInterval(function(){
            enableAuto && wrap.triggerHandler('move_next');
        },3000)
    })
    .triggerHandler('auto_move');
    //操作
    btn_prev.on('click',function(){
        wrap.triggerHandler('move_prev');//往上抛，让其他人处理
    });
    btn_next.on('click',function(){
        wrap.triggerHandler('move_next');
    });
    tips.on('click',function(){
        var index = $(this).index();
        wrap.triggerHandler('move_to',index);
    })
}
//Ui-Cascading
$.fn.UiCascading = function(){
    var ui = $(this);
    var selects =$('select',ui);
    selects
    .on('change',function(){
        var val = $(this).val();
        var index = selects.index(this);
        //根据当前的值，触发下一个select的更新
        var where = $(this).attr('data-where');
        where = where ? where.split(','):[];
        where.push($(this).val());
        selects
        .eq(index+1)
        .attr('data-where',where.join(','))
        .triggerHandler('reloadOptions');
        //触发下一个select后的所有select的初始化(清楚不应该的数据项)
        ui.find('select:gt('+(index+1)+')').each(function(){
            $(this)
            .attr('data-where','')
            .triggerHandler('reloadOptions');
        })
    })
    .on('reloadOptions',function(){
        var method = $(this).attr('data-search');
        var args = $(this).attr('data-where').split(',')
        var data = AjaxRemoteGetData[method].apply(this,args);//apply借用这个方法，但是传输参数是数组，到时候自动将数组内的值赋给这个方法的每个参数
        var select = $(this);
        select.find('option').remove();
        $.each(data,function(i,item){
            var el = $('<option value="'+item+'">'+item+'</option>');
            select.append( el );
        })
    })
    selects.eq(0).triggerHandler('reloadOptions');
}
//页面的脚本逻辑
$(function(){
    $('.ui-search').UiSearch();
    $('.content-tab').UiTab('.caption > .item','.block > .item');
    $('.content-tab .block .item').UiTab('.block-caption > a','.block-content > .block-wrap','block-caption-');
    $('body').UiBackTop();
    $('.ui-slider').UiSlider();
    $('.ui-cascading').UiCascading();
})