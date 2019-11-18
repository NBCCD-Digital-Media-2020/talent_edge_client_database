function activeArticle(x) {
    $('.previewTitle').removeClass("selected");
//    $('.previewTitle:nth-of-type(' + x + ')').addClass("selected");
    $('.previewTitle#pv' + x).addClass("selected");
    $('#preview').load("/news-articles/article-" + x + ".html");
    $('#previewLink').attr("href", "news.html#article" + x);
}
function getArticleTitles() {
    $('.previewTitle:nth-of-type(1)').children("span").load("/news-articles/article-1.html");
    $('.previewTitle:nth-of-type(2)').children("span").load("/news-articles/article-2.html");
    $('.previewTitle:nth-of-type(3)').children("span").load("/news-articles/article-3.html");
    $('.previewTitle:nth-of-type(4)').children("span").load("/news-articles/article-4.html");
    $('.previewTitle:nth-of-type(5)').children("span").load("/news-articles/article-5.html");
//    document.getElementById('pv1').children("span").load("/news-articles/article-1.html");
//     document.getElementById('pv2').children("span").load("/news-articles/article-2.html");
//     document.getElementById('pv3').children("span").load("/news-articles/article-3.html");
//     document.getElementById('pv4').children("span").load("/news-articles/article-4.html");
//     document.getElementById('pv5').children("span").load("/news-articles/article-5.html");
}
activeArticle(1);
getArticleTitles();