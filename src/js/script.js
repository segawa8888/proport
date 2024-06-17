jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
        $(".js-hamburger").on("click", function () {
            $(this).toggleClass("is-open");
            if ($(this).hasClass("is-open")) {
                openDrawer();
            } else {
                closeDrawer();
            }
        });

        // backgroundまたはページ内リンクをクリックで閉じる
        $(".js-drawer a[href]").on("click", function () {
            closeDrawer();
        });

        // resizeイベント
        $(window).on('resize', function() {
            if (window.matchMedia("(min-width: 768px)").matches) {
                closeDrawer();
            }
        });
    });

    function openDrawer() {
        $(".js-drawer").fadeIn();
        $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
            $(".js-drawer").fadeOut();
        $(".js-hamburger").removeClass("is-open");
    }

    // 100pxスクロールでヘッダー背景色変化
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".js-header").addClass("is-scroll");
            $(".js-header .p-header__nav-item a").addClass("is-scroll");
        } else {
            $(".js-header").removeClass("is-scroll");
            $(".js-header .p-header__nav-item a").removeClass("is-scroll");
        }
    });

});

window.onload = function () {
  const swiper = new Swiper('.js-mv-swiper', {
    loop: true,
    speed: 300,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      spaceBetween: 40,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        if (this.realIndex > 0) {
          this.params.autoplay.delay = 4700
        }
      },
    },
  })
};

$(function () {
    //変数
    var $flowText = $('#p-showroom__floating'),
      $fixBox = $flowText.find('.p-showroom-fix-box'),
      $flowBox = $fixBox.find('.p-showroom-flowing-box'),
  
      flowbox_width = $flowBox.width(),   //流れてくるBoxの横幅
      flowTime = 40000,   //全てのテキストが流れ終わるまでの時間．初期値10000ms
      easing = 'linear',                  //アニメーションの軌跡
      right_start,     //流れるBoxの右側の初期位置を入れる変数
      right_running,          //動作中の右側の位置を入れる変数
      timer;
  
    //流れてくるBoxの初期値
    $flowBox.css({ left: '100%' });
    //流れるBoxの右側の初期位置
    right_start = $flowBox.offset() ? $flowBox.offset().left + flowbox_width : 0;
  
    //ボックスを流す関数
    function flowingStart() {
      if (!$flowBox.hasClass('stop')) { //stopクラスがない場合の処理
        $flowBox.animate(
          { left: -flowbox_width },
          flowTime,
          easing,
          function () {     //アニメーション後に行うコールバック関数
            $flowBox.css({ left: '100%' });
          }
        );
        flowTime = 10000;  //次のアニメーションの時間を設定
      } else {    //stopクラスがある場合の処理
        $flowBox.stop(true, false);
        //流れるBoxの右側の初期値と現在の右側の位置からアニメーション時間を計算
        //時間を固定するとアニメーションをストップさせるたびに流れる速度が遅くなる
        right_running = $flowBox.offset() ? $flowBox.offset().left + flowbox_width : 0;
        flowTime = Math.floor(((right_running) / right_start) * 10000);
      }
    }
  
    //繰り返し，flowingStart()を実行するための関数
    function flowingMonitor() {
      timer = setInterval(function () {
        flowingStart();
      }, 300);
    }
  
    //マウスが乗っていればstopクラスを追加
    $fixBox.on('mouseover', function () {
      $flowBox.addClass('stop');
    })
      .on('mouseout', function () {
        $flowBox.removeClass('stop');
      })
  
    flowingMonitor();
  
  });
  

$(function(){
    gsap.utils.toArray(".js-fade").forEach(target => {
      gsap.from(target, {
        scrollTrigger: {
          trigger: target,
        },
        opacity: 0,
        yPercent: 20,
        duration: 2, 
      });
    });
  });

  jQuery(function ($) {
    // サムネイル
    const products_swiperThumbnail = new Swiper(".js-sub-products-swiper-thumbnail", {
        slidesPerView: 3,
        spaceBetween: 5,
        breakpoints: {
            768: {
                spaceBetween: 20,
            }
        },
    });

    // メイン
    const products_swiperMain = new Swiper(".js-sub-products-swiper-main", {
        loop: true,                         
        autoplay: {                         
            delay: 4000,  
        },
        thumbs: {
            swiper: products_swiperThumbnail,
        },
    });
});

jQuery(function ($) {
  // サムネイル
  const products_swiperThumbnail = new Swiper(".js-sub-products-swiper-thumbnail02", {
      slidesPerView: 3,
      spaceBetween: 5,
      breakpoints: {
          768: {
              spaceBetween: 20,
          }
      },
  });

  // メイン
  const products_swiperMain = new Swiper(".js-sub-products-swiper-main02", {
      loop: true,                         
      autoplay: {                         
          delay: 4000,  
      },
      thumbs: {
          swiper: products_swiperThumbnail,
      },
  });
});

jQuery(function ($) {
  // サムネイル
  const products_swiperThumbnail = new Swiper(".js-sub-products-swiper-thumbnail03", {
      slidesPerView: 3,
      spaceBetween: 5,
      breakpoints: {
          768: {
              spaceBetween: 20,
          }
      },
  });

  // メイン
  const products_swiperMain = new Swiper(".js-sub-products-swiper-main03", {
      loop: true,                         
      autoplay: {                         
          delay: 4000,  
      },
      thumbs: {
          swiper: products_swiperThumbnail,
      },
  });
});

$(function(){
    $('.p-Form-CheckItem-Label').on('click', function(){
      if ($('#JS_CheckItem').prop("checked") == true) {
        $('.JS_FormSubmit').addClass('isActive');
      } else {
        $('.JS_FormSubmit').removeClass('isActive');
      }
    });
  });