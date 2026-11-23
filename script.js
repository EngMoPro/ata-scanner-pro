(function () {
  "use strict";

  // ---- Current year in footer ----
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // ---- Mobile menu ----
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("primary-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  // ---- Download links from config.js ----
  var cfg = window.ATA_SITE_CONFIG || {};
  var links = cfg.download || {};
  var notice = document.getElementById("download-notice");
  var placeholderTerms = ["REPLACE", "YOUR_", "PASTE_"];

  function isReady(url) {
    if (typeof url !== "string") return false;
    var value = url.trim().toUpperCase();
    if (!value) return false;
    for (var i = 0; i < placeholderTerms.length; i++) {
      if (value.indexOf(placeholderTerms[i]) === 0) return false;
    }
    return /^https?:\/\//i.test(url.trim());
  }

  document.querySelectorAll("[data-download]").forEach(function (link) {
    var key = link.getAttribute("data-download");
    var url = links[key] || links.x64 || "";
    var ready = isReady(url);

    if (ready) {
      link.href = url.trim();
      link.removeAttribute("data-download");
      link.classList.remove("pending");
    } else {
      link.classList.add("pending");
      link.setAttribute("aria-disabled", "true");
      link.title = "Download link will be added soon";
      link.addEventListener("click", function (event) {
        event.preventDefault();
        if (notice) {
          notice.hidden = false;
          notice.focus();
        }
      });
    }
  });

  // ---- Copy support number ----
  var copyButton = document.querySelector(".copy-btn");
  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var value = copyButton.getAttribute("data-copy") || "";
      var done = function () {
        var old = copyButton.textContent;
        copyButton.textContent = "Copied!";
        setTimeout(function () { copyButton.textContent = old; }, 1600);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, done);
      } else {
        var temp = document.createElement("textarea");
        temp.value = value;
        temp.setAttribute("readonly", "");
        temp.style.position = "absolute";
        temp.style.left = "-9999px";
        document.body.appendChild(temp);
        temp.select();
        try { document.execCommand("copy"); } catch (e) { /* ignored */ }
        document.body.removeChild(temp);
        done();
      }
    });
  }
})();
