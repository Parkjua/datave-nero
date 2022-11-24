window.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    console.log(window.scrollY);
    var ratio1 = (1 / 1920) * window.innerWidth;
    // var ratio2 = (1 / 1920) * window.innerHeight;

    if (window.scrollY > 470 * ratio1) {
      document.querySelector(".planning1_t1").classList.add("active");
      document.querySelector(".planning1_t2").classList.add("active");
      document.getElementById("g_bar1").classList.add("active");
      document.getElementById("g_bar2").classList.add("active");
      document.getElementById("g_bar3").classList.add("active");
      document.getElementById("g_bar4").classList.add("active");
      document.getElementById("g_bar5").classList.add("active");
    } else {
      document.querySelector(".planning1_t1").classList.remove("active");
      document.querySelector(".planning1_t2").classList.remove("active");
      document.getElementById("g_bar1").classList.remove("active");
      document.getElementById("g_bar2").classList.remove("active");
      document.getElementById("g_bar3").classList.remove("active");
      document.getElementById("g_bar4").classList.remove("active");
      document.getElementById("g_bar5").classList.remove("active");
    }

    if (window.scrollY > 1750 * ratio1) {
      document.querySelector(".planning2_t1").classList.add("active");
      document.querySelector(".planning2_t2").classList.add("active");
      document.querySelector(".planning2_ani1").classList.add("active");
      document.querySelector(".planning2_ani2").classList.add("active");
      document.querySelector(".planning2_ani3").classList.add("active");
      document.querySelector(".planning2_ani4").classList.add("active");
      document.querySelector(".planning2_ani5").classList.add("active");
      document.querySelector(".planning2_ani6").classList.add("active");
      document.querySelector(".planning2_ani7").classList.add("active");
      document.querySelector(".planning2_ani8").classList.add("active");
    } else {
      document.querySelector(".planning2_t1").classList.remove("active");
      document.querySelector(".planning2_t2").classList.remove("active");
      document.querySelector(".planning2_ani1").classList.remove("active");
      document.querySelector(".planning2_ani2").classList.remove("active");
      document.querySelector(".planning2_ani3").classList.remove("active");
      document.querySelector(".planning2_ani4").classList.remove("active");
      document.querySelector(".planning2_ani5").classList.remove("active");
      document.querySelector(".planning2_ani6").classList.remove("active");
      document.querySelector(".planning2_ani7").classList.remove("active");
      document.querySelector(".planning2_ani8").classList.remove("active");
    }
    // solution
    if (window.scrollY > 2800 * ratio1) {
      document.querySelector(".planning3_t1").classList.add("active");
      document.querySelector(".planning3_t2").classList.add("active");
      document.querySelector(".planning3_t3").classList.add("active");
      document.querySelector(".planning3_t4").classList.add("active");
    } else {
      document.querySelector(".planning3_t1").classList.remove("active");
      document.querySelector(".planning3_t2").classList.remove("active");
      document.querySelector(".planning3_t3").classList.remove("active");
      document.querySelector(".planning3_t4").classList.remove("active");
    }
    // structure
    if (window.scrollY > 3600 * ratio1) {
      document.querySelector(".planning4_t1").classList.add("active");
      document.querySelector(".planning4_t2").classList.add("active");
    } else {
      document.querySelector(".planning4_t1").classList.remove("active");
      document.querySelector(".planning4_t2").classList.remove("active");
    }
    if (window.scrollY > 3800 * ratio1) {
      document.querySelector(".planning4_t3").classList.add("active");
      document.querySelector(".planning4_t4").classList.add("active");
      document.querySelector(".planning4_t5").classList.add("active");
      document.querySelector(".planning4_t6").classList.add("active");
      document.querySelector(".arrow_left").classList.add("active");
      document.querySelector(".arrow_left2").classList.add("active");
      document.querySelector(".arrow_right").classList.add("active");
      document.querySelector(".arrow_right2").classList.add("active");
      document.querySelector(".structure_line").classList.add("active");
      document.querySelector(".structure_line2").classList.add("active");
    } else {
      document.querySelector(".planning4_t3").classList.remove("active");
      document.querySelector(".planning4_t4").classList.remove("active");
      document.querySelector(".planning4_t5").classList.remove("active");
      document.querySelector(".planning4_t6").classList.remove("active");
      document.querySelector(".arrow_left").classList.remove("active");
      document.querySelector(".arrow_left2").classList.remove("active");
      document.querySelector(".arrow_right").classList.remove("active");
      document.querySelector(".arrow_right2").classList.remove("active");
      document.querySelector(".structure_line").classList.remove("active");
      document.querySelector(".structure_line2").classList.remove("active");
    }

    // 서비스 혜택
    if (window.scrollY > 4800 * ratio1) {
      document.querySelector(".planning5_t1").classList.add("active");
      document.querySelector(".planning5_t2").classList.add("active");
      document.getElementById("planning5_ani1").classList.add("active");
      document.getElementById("planning5_ani2").classList.add("active");
      document.getElementById("planning5_ani3").classList.add("active");
      document.getElementById("planning5_ani4").classList.add("active");
      document.getElementById("planning5_ani5").classList.add("active");
      document.getElementById("planning5_ani6").classList.add("active");
      document.getElementById("planning5_ani7").classList.add("active");
      document.getElementById("planning5_ani8").classList.add("active");
      document.getElementById("planning5_ani9").classList.add("active");
      document.getElementById("planning5_ani10").classList.add("active");
      document.querySelector(".benefit_line").classList.add("active");
      document.querySelector(".benefit_line2").classList.add("active");
    } else {
      document.querySelector(".planning5_t1").classList.remove("active");
      document.querySelector(".planning5_t2").classList.remove("active");
      document.getElementById("planning5_ani1").classList.remove("active");
      document.getElementById("planning5_ani2").classList.remove("active");
      document.getElementById("planning5_ani3").classList.remove("active");
      document.getElementById("planning5_ani4").classList.remove("active");
      document.getElementById("planning5_ani5").classList.remove("active");
      document.getElementById("planning5_ani6").classList.remove("active");
      document.getElementById("planning5_ani7").classList.remove("active");
      document.getElementById("planning5_ani8").classList.remove("active");
      document.getElementById("planning5_ani9").classList.remove("active");
      document.getElementById("planning5_ani10").classList.remove("active");
      document.querySelector(".benefit_line").classList.remove("active");
      document.querySelector(".benefit_line2").classList.remove("active");
    }
    // 서비스 네이밍
    if (window.scrollY > 5700 * ratio1) {
      document.querySelector(".planning6_t1").classList.add("active");
      document.querySelector(".planning6_t2").classList.add("active");
      document.querySelector(".planning6_t3").classList.add("active");
    } else {
      document.querySelector(".planning6_t1").classList.remove("active");
      document.querySelector(".planning6_t2").classList.remove("active");
      document.querySelector(".planning6_t3").classList.remove("active");
    }
    // 디자인 키워드
    if (window.scrollY > 6200 * ratio1) {
      document.querySelector(".design1_t1").classList.add("active");
      document.querySelector(".design1_t2").classList.add("active");
    } else {
      document.querySelector(".design1_t1").classList.remove("active");
      document.querySelector(".design1_t2").classList.remove("active");
    }
    // 디자인 로고
    if (window.scrollY > 7300 * ratio1) {
      document.querySelector(".design2_t1").classList.add("active");
      document.querySelector(".design2_t2").classList.add("active");
    } else {
      document.querySelector(".design2_t1").classList.remove("active");
      document.querySelector(".design2_t2").classList.remove("active");
    }
    // 디자인 타이포
    if (window.scrollY > 8000 * ratio1) {
      document.querySelector(".design3_t1").classList.add("active");
      document.querySelector(".design3_t2").classList.add("active");
      document.querySelector(".design3_t3").classList.add("active");
      document.querySelector(".design3_t4").classList.add("active");
      document.querySelector(".design3_t5").classList.add("active");
    } else {
      document.querySelector(".design3_t1").classList.remove("active");
      document.querySelector(".design3_t2").classList.remove("active");
      document.querySelector(".design3_t3").classList.remove("active");
      document.querySelector(".design3_t4").classList.remove("active");
      document.querySelector(".design3_t5").classList.remove("active");
    }
    // 디자인 칼라시스템
    if (window.scrollY > 8800 * ratio1) {
      document.querySelector(".design4_t1").classList.add("active");
      document.querySelector(".design4_t2").classList.add("active");
      document.getElementById("c_navy").classList.add("active");
      document.getElementById("c_white").classList.add("active");
    } else {
      document.querySelector(".design4_t1").classList.remove("active");
      document.querySelector(".design4_t2").classList.remove("active");
      document.getElementById("c_navy").classList.remove("active");
      document.getElementById("c_white").classList.remove("active");
    }

    if (window.scrollY > 9000 * ratio1) {
      document.getElementById("c_red").classList.add("active");
      document.getElementById("c_yellow").classList.add("active");
      document.getElementById("c_green").classList.add("active");
      document.getElementById("c_blue").classList.add("active");
      document.getElementById("c_purple").classList.add("active");
    } else {
      document.getElementById("c_red").classList.remove("active");
      document.getElementById("c_yellow").classList.remove("active");
      document.getElementById("c_green").classList.remove("active");
      document.getElementById("c_blue").classList.remove("active");
      document.getElementById("c_purple").classList.remove("active");
    }

    // 서비스1
    if (window.scrollY > 10000 * ratio1) {
      document.querySelector(".service1_t1").classList.add("active");
      document.querySelector(".service1_t2").classList.add("active");
    } else {
      document.querySelector(".service1_t1").classList.remove("active");
      document.querySelector(".service1_t2").classList.remove("active");
    }
    // 서비스2
    if (window.scrollY > 11600 * ratio1) {
      document.querySelector(".service2_t1").classList.add("active");
      document.querySelector(".service2_t2").classList.add("active");
    } else {
      document.querySelector(".service2_t1").classList.remove("active");
      document.querySelector(".service2_t2").classList.remove("active");
    }
    if (window.scrollY > 12600 * ratio1) {
      document.querySelector(".service2_t3").classList.add("active");
      document.querySelector(".service2_t4").classList.add("active");
    } else {
      document.querySelector(".service2_t3").classList.remove("active");
      document.querySelector(".service2_t4").classList.remove("active");
    }
    // 서비스3
    if (window.scrollY > 13500 * ratio1) {
      document.querySelector(".service3_t1").classList.add("active");
      document.querySelector(".service3_t2").classList.add("active");
      document.getElementById("service3_ani1").classList.add("active");
      document.getElementById("service3_ani2").classList.add("active");
      document.getElementById("service3_ani3").classList.add("active");
      document.getElementById("service3_ani4").classList.add("active");
    } else {
      document.querySelector(".service3_t1").classList.remove("active");
      document.querySelector(".service3_t2").classList.remove("active");
      document.getElementById("service3_ani1").classList.remove("active");
      document.getElementById("service3_ani2").classList.remove("active");
      document.getElementById("service3_ani3").classList.remove("active");
      document.getElementById("service3_ani4").classList.remove("active");
    }
    // 서비스4
    if (window.scrollY > 15000 * ratio1) {
      document.querySelector(".service4_t1").classList.add("active");
      document.querySelector(".service4_t2").classList.add("active");
    } else {
      document.querySelector(".service4_t1").classList.remove("active");
      document.querySelector(".service4_t2").classList.remove("active");
    }
    if (window.scrollY > 15200 * ratio1) {
      document.querySelector(".qr_1").classList.add("active");
      document.querySelector(".qr_2").classList.add("active");
      document.querySelector(".qr_3").classList.add("active");
      document.querySelector(".qr_4").classList.add("active");
    } else {
      document.querySelector(".qr_1").classList.remove("active");
      document.querySelector(".qr_2").classList.remove("active");
      document.querySelector(".qr_3").classList.remove("active");
      document.querySelector(".qr_4").classList.remove("active");
    }
    // 서비스5
    if (window.scrollY > 16300 * ratio1) {
      document.querySelector(".service5_t1").classList.add("active");
      document.querySelector(".service5_t2").classList.add("active");
    } else {
      document.querySelector(".service5_t1").classList.remove("active");
      document.querySelector(".service5_t2").classList.remove("active");
    }
    // 서비스6
    if (window.scrollY > 17500 * ratio1) {
      document.querySelector(".service6_t1").classList.add("active");
      document.querySelector(".service6_t2").classList.add("active");
      document.querySelector(".service6_ani1").classList.add("active");
      document.querySelector(".service6_ani2").classList.add("active");
    } else {
      document.querySelector(".service6_t1").classList.remove("active");
      document.querySelector(".service6_t2").classList.remove("active");
      document.querySelector(".service6_ani1").classList.remove("active");
      document.querySelector(".service6_ani2").classList.remove("active");
    }
    // 서비스7
    if (window.scrollY > 18900 * ratio1) {
      document.querySelector(".service7_t1").classList.add("active");
      document.querySelector(".service7_t2").classList.add("active");
    } else {
      document.querySelector(".service7_t1").classList.remove("active");
      document.querySelector(".service7_t2").classList.remove("active");
    }
    if (window.scrollY > 19200 * ratio1) {
      document.querySelector(".right_arrow2").classList.add("active");
      document.getElementById("graph").classList.add("active");
      document.querySelector(".service7_t3").classList.add("active");
      document.querySelector(".service7_t4").classList.add("active");
    } else {
      document.querySelector(".right_arrow2").classList.remove("active");
      document.getElementById("graph").classList.remove("active");
      document.querySelector(".service7_t3").classList.remove("active");
      document.querySelector(".service7_t4").classList.remove("active");
    }
    // service8
    if (window.scrollY > 20100 * ratio1) {
      document.querySelector(".service8_t1").classList.add("active");
      document.querySelector(".service8_t2").classList.add("active");
    } else {
      document.querySelector(".service8_t1").classList.remove("active");
      document.querySelector(".service8_t2").classList.remove("active");
    }
    // 오른쪽
    if (window.scrollY > 20800 * ratio1) {
      document.querySelector(".arrow_ani1").classList.add("active");
      document.querySelector(".service8_t5").classList.add("active");
      document.querySelector(".service8_t6").classList.add("active");
    } else {
      document.querySelector(".arrow_ani1").classList.remove("active");
      document.querySelector(".service8_t5").classList.remove("active");
      document.querySelector(".service8_t6").classList.remove("active");
    }
    // 왼쪽
    if (window.scrollY > 21800 * ratio1) {
      document.querySelector(".arrow_ani2").classList.add("active");
      document.querySelector(".service8_t3").classList.add("active");
      document.querySelector(".service8_t4").classList.add("active");
    } else {
      document.querySelector(".arrow_ani2").classList.remove("active");
      document.querySelector(".service8_t3").classList.remove("active");
      document.querySelector(".service8_t4").classList.remove("active");
    }

    // service9 캘린더 스크롤
    if (window.scrollY > 22900 * ratio1) {
      document.querySelector(".calender_t1").classList.add("active");
      document.querySelector(".calender_t2").classList.add("active");
      document.querySelector(".calender_ani1").classList.add("active");
      document.querySelector(".calender_ani2").classList.add("active");
      document.querySelector(".calender_ani3").classList.add("active");
      document.querySelector(".calender_ani4").classList.add("active");
      document.querySelector(".calender_ani5").classList.add("active");
    } else {
      document.querySelector(".calender_t1").classList.remove("active");
      document.querySelector(".calender_t2").classList.remove("active");
      document.querySelector(".calender_ani1").classList.remove("active");
      document.querySelector(".calender_ani2").classList.remove("active");
      document.querySelector(".calender_ani3").classList.remove("active");
      document.querySelector(".calender_ani4").classList.remove("active");
      document.querySelector(".calender_ani5").classList.remove("active");
    }
  };
});
