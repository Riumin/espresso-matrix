/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateContent();
    // share();
    gitment();
});

/**
 * 侧边目录
 */
function generateContent() {
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
}

function share(){
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};
    with(document)0[getElementsByTagName("script")[0].parentNode.appendChild(createElement('script')).src='//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}


function gitment() {
    var gitment = new Gitment({
        id: window.location.pathname,
        owner: 'riumin',
        repo: 'blog',
        oauth: {
            client_id: '8fbd8862961c7e38a801',
            client_secret: '14294c43bfd66aacf8b14f6eb29a4649012ac179',
        },
    });
    gitment.render('post-comment')
    $("#post-comment").removeClass('hidden');
}


