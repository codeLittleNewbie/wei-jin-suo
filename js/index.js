/**
 * Created by W-Q on 2017/7/18.
 */
$(function () {
    countScreenWidth();
});


/**
 * 判断当前屏幕宽度是否应该显示小图
 */
function countScreenWidth() {
    // 监听屏幕缩放事件
    $(window).on("resize", function () {
        // 获取当前屏幕宽度
        // this.innerWidth
        var screenH = $(this).width();

            $("#banner > .carousel-inner > .item").each(function (index, item) {
                if (screenH < 768) {
                    var img = "<img src='" + $(item).data().imageSm + "'>";
                    $(item).html(img);
                    // $(item).height("auto");
                }else {

                    $(item).css('background', 'url("' + $(item).data().imageBm + '") center center / cover');
                    // $(item).height(410);
                    $(item).empty();
                }

            });

    }).trigger("resize");
}