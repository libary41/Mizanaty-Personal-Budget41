// قائمة الهمبرغر
document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
        nav.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    }

    toggle.addEventListener("click", function () {
        setOpen(!nav.classList.contains("open"));
    });

    // إغلاق بزر Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setOpen(false);
    });

    // إغلاق عند الضغط خارج القائمة
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });

    // إعادة الضبط عند تكبير الشاشة
    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) setOpen(false);
    });
});
