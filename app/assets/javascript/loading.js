isLoading = false;
$(window).scroll(function() {
    if (($(window).scrollTop() + $(document).height() >= $('footer').offset().top) && !isLoading) {
        let url = $('.pagination > .next > a').attr('href');
        isLoading = true;
        $('#loading').css('display', 'block');
        if (url) {
            setTimeout(function() {
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    success: function(data) {
                        $('#loading-wrapper').append($(data).find('#loading-wrapper').html());

                        if(String($(data).find('#loading-wrapper').html()) == "undefined" || $(data).find('#loading-wrapper').html().length == 1){
                            $('#loading').css('display', 'none');
                        } else {
                            pageNumber = parseInt(url.split("=")[1]);
                            nextPageNumber = String(pageNumber + 1);
                            url = $('.pagination > .next > a').attr('href');
                            url = url.replace(/page=(\d+)/, 'page=' + nextPageNumber);
                            $('.pagination > .next > a').attr('href', url);
                            console.log(url);
                            $('#loading').css('display', 'none');
                            isLoading = false;

                            if(document.getElementById('posted-user-id')){
                                user_id = document.getElementById('posted-user-id').textContent;
                                post_urls = document.getElementsByClassName("like-link");
                                like_url = post_urls[0].href;
                                params = new URLSearchParams(like_url.substring(url.indexOf("?")));
                                post_cat = params.get("post_cat");
                                console.log(post_cat);
                                if(post_cat == 'posted'){
                                    currentURL = window.location.href.match(/\/post(.*)/)[0];
                                    $('.relationship_url').val(currentURL + "/posted");
                                    for(let i = 0; i < post_urls.length; i++){
                                        href = post_urls[i].getAttribute('href');
                                        newHref = href.replace('url=index', 'url=posted&user_id=' + user_id + '&post_cat=posted');
                                        post_urls[i].setAttribute('href', newHref);
                                    }
                                } else if(post_cat == 'liked'){
                                    currentURL = window.location.href.match(/\/post(.*)/)[0];
                                    $('.relationship_url').val(currentURL + "/liked");
                                    for(let i = 0; i < post_urls.length; i++){
                                        href = post_urls[i].getAttribute('href');
                                        newHref = href.replace('url=index', 'url=posted&user_id=' + user_id + '&post_cat=liked');
                                        post_urls[i].setAttribute('href', newHref);
                                    }
                                } else if(post_cat == 'commented'){
                                    currentURL = window.location.href.match(/\/post(.*)/)[0];
                                    $('.relationship_url').val(currentURL + "/commented");
                                    for(let i = 0; i < post_urls.length; i++){
                                        href = post_urls[i].getAttribute('href');
                                        newHref = href.replace('url=index', 'url=posted&user_id=' + user_id + '&post_cat=commented');
                                        post_urls[i].setAttribute('href', newHref);
                                    }
                                }
                            }
                        }
                    }
                });
            }, 2000);
        } else {
            $('#loading').css('display', 'none');
            isLoading = false;
        }
    }
});

$(document).on('turbolinks:before-visit', function() {
    Turbolinks.clearCache();
});