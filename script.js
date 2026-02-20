$(document).ready(function () {
  // Tab Switching Logic
  $(".tab-btn").click(function () {
    // Apply active class
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // In a real app, this would filter content
    console.log("Switched to tab: " + $(this).text());

    // Simple animation effect for demo
    $(".gallery-grid").css("opacity", "0.5").animate({ opacity: 1 }, 300);
  });

  // Search Bar Focus Effect
  $(".search-bar input")
    .focus(function () {
      $(this).parent().addClass("focused");
    })
    .blur(function () {
      $(this).parent().removeClass("focused");
    });

  // Sidebar Navigation Active State
  $(".sidebar nav a").click(function (e) {
    // Prevent default if it's just a placeholder link
    if ($(this).attr("href") === "#") {
      e.preventDefault();
    }

    // Only for main nav
    if ($(this).parents(".main-nav").length) {
      $(".main-nav li").removeClass("active");
      $(this).parent().addClass("active");
    }
  });

  // Mobile Responsive tweaks (Simple implementation)
  // If we had a hamburger menu, we'd toggle sidebar here
});