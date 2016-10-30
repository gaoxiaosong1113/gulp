/**
 * Created by Administrator on 2016/6/14.
 */

//控制列表显示隐藏
$(function () {
    $(".wxc-icon-caret").parents(".wxc-cells").on("click", function (e) {
        if (!$(this).find(".wxc-icon-caret").is(".cur")) {
            $(".wxc-cells-warp").removeClass('show');
            $(this).next(".wxc-cells-warp").addClass('show');
            $('.wxc-icon-caret').removeClass('cur');
            $(this).find('.wxc-icon-caret').addClass('cur');
        } else {
            $(this).next(".wxc-cells-warp").removeClass('show');
            $(this).find('.wxc-icon-caret').removeClass('cur');
        }
        e.stopPropagation();
    })
});


//头部下拉选择
$.fn.sKongHeadSelect = function (option) {
    var _this = $(this);
    var html = $("<div></div>", {
        class: 'wxc-mask',
        click: function () {
            $(this).parent().fadeOut(200);
            removeHot();
        }
    });
    removeHot();
    $(option.eleL).on("click", function () {
        hot(this);
        if ($(option.eleShowL).is(':hidden')) {
            $(option.eleShowL).fadeIn(200).append(html).siblings(".wxc-alert-dg").fadeOut(200).find(".wxc-mask").remove();
        } else {
            $(option.eleShowL).fadeOut(200);
            removeHot();
        }
    });
    $(option.eleR).on("click", function () {
        hot(this);
        if ($(option.eleShowR).is(':hidden')) {
            $(option.eleShowR).fadeIn(200).append(html).siblings(".wxc-alert-dg").fadeOut(200);
        } else if (!option.eleShowR) {
            $(option.eleShowL).fadeOut(200);
            removeHot();
        } else {
            $(option.eleShowR).fadeOut(200);
            removeHot();
        }
    });
    $(option.eleShowR).find(".wxc-cell-content-btn").children(".wxc-btn").on("click", function () {
        $(option.eleShowR).fadeOut(200);
        removeHot();
    });

    $(this).find(".wxc-head-dq-bg").on("click", function () {
        $(option.eleShowL).fadeOut(200);
        removeHot();
    });
    $(this).find(option.eleShowL).find(".wxc-cell").on("click", function () {
        $(this).addClass("hot").siblings().removeClass("hot");
        var text = $(this).text().trim();
        var value = $(this).find("span").data("value");
        _this.find(option.eleL).text(text);
        $(option.eleShowL).fadeOut(200);
        removeHot();
        option.eleClick(text, value);
    });

    $(this).find(".wxc-content-ever .wxc-content-hd").on("click", function () {
        var ele = $(this).parents(".wxc-content-ever");
        if (ele.is(".down")) {
            ele.removeClass("down");
        } else {
            ele.addClass("down");
        }
    });

    function hot(ele) {
        $(ele).parent().addClass("hot").siblings().removeClass("hot");
    }

    function removeHot() {
        $(option.eleL).parent().removeClass('hot');
        $(option.eleR).parent().removeClass('hot');
    }
};

//input 清空内容
$(function () {
    $(".wxc-input").on("keyup", function () {
        var ele = $(this).siblings(".wxc-icon-close");
        var seachIcon = $(this).siblings(".wxc-icon-seach");
        var seachBtn = $(this).parents(".wxc-cell-primary").siblings(".wxc-seach-btn");
        seachIcon.fadeOut(200);
        seachBtn.fadeIn(200);
        if (ele.length > 0) {
            ele.show();
        } else {
            var html = $("<i></i>", {
                class: 'wxc-icon wxc-icon-close',
                click: function () {
                    var str = "";
                    $(this).siblings(".wxc-input").val(str);
                    $(this).fadeOut(100);
                    seachIcon.fadeIn(200);
                    seachBtn.fadeOut(200);
                }
            }).append();
            $(this).parent().append(html);
        }
        if ($(this).val() == "") {
            ele.fadeOut(100);
            seachIcon.fadeIn(200);
            seachBtn.fadeOut(200);
        }
    });
});

$(function () {
    var html = $("<div></div>", {
        class: 'wxc-mask',
        click: function () {
            $(this).fadeOut(100);
            $(".wxc-dialog").fadeOut(200);
        }
    });
    $(".wxc-dialog-show").on("click", function () {
        if ($(".wxc-mask").length > 0) {
            $(".wxc-mask").fadeIn(200);
        } else {
            $('body').append(html);
        }
        $(".wxc-dialog").fadeIn(200);
    });
    $(".default").on("click", function () {
        $(".wxc-mask").fadeOut(100);
        $(".wxc-dialog").fadeOut(200);
    })
});

$(function () {
    $(".wxc-select-bg-hot").find(".wxc-check").on("change", function () {
        var _this = $(this);
        var patent = _this.parents(".wxc-cell");
        if (_this.is(':checked')) {
            patent.addClass("hot");
        } else {
            patent.removeClass("hot")
        }
    })
});
$(document).ready(function () {
    $(".valid-message-bg").click(function () {
        $(".valid-message-bg").hide();
        $(".valid-message").hide();
    });
    $(".valid-message").click(function () {
        $(".valid-message-bg").hide();
        $(".valid-message").hide();
    })
});

$(function () {
    $(".wxc-reply-btn").on("click", function () {
        var type = $(this).attr("name");
        var userJudgeId = $(this).attr("value");
        $("#userJudgeId").val(userJudgeId);
        if (type != 1) {
            $("#reply_show").css("display", "block");
            $("#reply_name").html(type);
            $("#pid_userJudgeId").val($(this).attr("id"));
        } else {
            $("#reply_show").css("display", "none");
            $("#reply_name").html("");
        }
        $(".wxc-privateMessage-input").fadeIn(200);
    })
    $(".wxc-input-warp input").on("keyup", function () {
        var val = $(this).val();
        if (val == "") {
            $(this).parent().siblings(".wxc-btn").fadeOut(200);
        } else {
            $(this).parent().siblings(".wxc-btn").fadeIn(200);
        }
    })
});


$.fn.sKongListHover = function (option) {
    var onEle = $(this).find(option.onEle);
    $(onEle).on("click", function () {
        if ($(this).is(".cur")) {
            $(this).removeClass(option.cur);
            $(this).next(option.hoverEle).slideUp(200);
        } else {
            $(this).addClass(option.cur);
            $(this).next(option.hoverEle).slideDown(200);
        }
    })
};

$.fn.sKongTab = function (option) {
    var onEle = $(this).find(option.onEle);
    var hoverEle = $(this).find(option.hoverEle);
    var index;
    hoverEle.eq(0).show().siblings(option.hoverEle).hide();
    $(onEle).on("click", function () {
        $(this).addClass(option.cur).siblings().removeClass(option.cur);
        $(this).next(option.hoverEle).slideDown(200);
        index = $(this).index();
        $(hoverEle).eq(index).show().siblings(option.hoverEle).hide();
    })
};










