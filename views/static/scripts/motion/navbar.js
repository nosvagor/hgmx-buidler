import { animate, stagger } from "/static/scripts/vendor/motion.min.js";

const navMenu = document.getElementById("navMenu");
const iconP1 = document.getElementById("icon-p1");
const iconP2 = document.getElementById("icon-p2");
const iconP3 = document.getElementById("icon-p3");

const iconPaths = {
  avatar: {
    p1: "M 9,8 C 9,0, 23,0, 23,8",
    p2: "M 9,8 C 9,16, 23,16, 23,8",
    p3: "M 6,26 C 6,18, 26,18, 26,26",
  },
  hamburger: {
    p1: "M 4,10 C 12,10 20,10 28,10",
    p2: "M 4,16 C 12,16 20,16 28,16",
    p3: "M 4,22 C 12,22 20,22 28,22",
  },
  close: {
    p1: "M 8,8 C 12,12 20,20 24,24",
    p2: "M 16,16 C 16,16 16,16 16,16",
    p3: "M 8,24 C 12,20 20,12 24,8",
  },
};

function setIcon(paths, options = {}) {
  const t = options.transition ?? { duration: 0.3, ease: "easeOut" };
  animate(iconP1, { d: paths.p1 }, t);
  animate(iconP2, { d: paths.p2 }, t);
  animate(iconP3, { d: paths.p3 }, t);
}

function navbarScrolling(scrolling) {
  const bookmarks = document.querySelectorAll(".bookmark_item");
  const telescopeTrigger = document.querySelector("telescopeTrigger");

  if (scrolling) {
    animate(bookmarks, { width: 0, opacity: 0, marginLeft: 0, }, { duration: 0.75, delay: stagger(0.1, { from: "first" }), ease: "anticipate", });
    animate(telescopeTrigger, { x: "1rem" }, { duration: 1, ease: "anticipate" });
    if (!navMenu.classList.contains("menu-open")) {
      setIcon(iconPaths.hamburger);
    }
  }

  if (!scrolling) {
    animate(bookmarks, { width: "auto", opacity: 1, marginLeft: "0.75rem", }, { duration: 0.75, delay: stagger(0.037, { from: "last" }), ease: "backInOut", });
    if (bookmarks.length > 0) {
      animate(bookmarks[0], { marginLeft: 0 });
    }
    animate(telescopeTrigger, { x: "0" }, { duration: 1, ease: "backInOut" });
    if (!navMenu.classList.contains("menu-open")) {
      setIcon(iconPaths.avatar);
    }
  }
}

function closeMenu() {
  navMenu.classList.remove("menu-open");
  setIcon(window.scrollY > 0 ? iconPaths.hamburger : iconPaths.avatar);
}

function toggleMenu() {
  console.log("toggleMenu");
  const isOpen = navMenu.classList.contains("menu-open");

  if (isOpen) {
    setIcon(iconPaths.close);
  }

  if (!isOpen) {
    setIcon(window.scrollY > 0 ? iconPaths.hamburger : iconPaths.avatar);
  }
}

window.navbarScrolling = navbarScrolling;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
