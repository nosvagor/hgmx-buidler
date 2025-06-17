import { animate, stagger } from "/static/scripts/vendor/motion.min.js";

let hexagonAnimation, iconAnimation;

const navMenu = document.getElementById("navMenu");
const expandedNavMenu = document.getElementById("expandedNavMenu");
const navMenuLinks = document.getElementById("navMenuLinks");
const navMenuLinkItems = navMenuLinks?.querySelectorAll("a");
const maskGroup = document.getElementById("mask-group");
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
  if (navMenu.classList.contains("menu-open")) {
    navMenu.classList.remove("menu-open");
    toggleMenu();
  }
}

function toggleMenu() {
  const isOpen = navMenu.classList.contains("menu-open");

  const rect = navMenu.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const linkRadius = Math.min(window.innerWidth, window.innerHeight) * 0.5;
  const scale = linkRadius * 1.25;

  animate(maskGroup, { x: x, y: y }, { duration: 0 });

  if (isOpen) {
    if (window.scrollY == 0) {
      navbarScrolling(true);
    }
    setIcon(iconPaths.close);
    expandedNavMenu.style.pointerEvents = "auto";

    animate(maskGroup, { scale: [0, scale] }, { type: "spring", stiffness: 100, damping: 15 });
    hexagonAnimation = animate(maskGroup, { rotate: [0, 360] }, { duration: 40, repeat: Infinity, ease: "linear" });
    iconAnimation = animate(navMenu, { rotate: [0, -360] }, { duration: 20, repeat: Infinity, ease: "linear" });

    animate(navMenuLinks, { opacity: 1 }, { duration: 0.1 });
    if (navMenuLinkItems) {
      const startAngle = Math.PI * 0.6;
      const angleRange = Math.PI * 0.3;
      const angleStep = navMenuLinkItems.length > 1 ? angleRange / (navMenuLinkItems.length - 1) : 0;

      Array.from(navMenuLinkItems).reverse().forEach((link, i) => {
        const angle = startAngle + i * angleStep;
        const linkX = x + linkRadius * 0.6 * Math.cos(angle);
        const linkY = y + linkRadius * 0.6 * Math.sin(angle);
        
        animate(
          link,
          {
            left: [`${x}px`, `${linkX}px`],
            top: [`${y}px`, `${linkY}px`],
            opacity: [0, 1]
          },
          {
            duration: 0.5,
            delay: 0.2 + i * 0.05,
            ease: "easeOut"
          }
        );
      });
    }
  }

  if (!isOpen) {
    if (window.scrollY == 0) {
      navbarScrolling(false);
    }
    setIcon(window.scrollY > 0 ? iconPaths.hamburger : iconPaths.avatar);
    expandedNavMenu.style.pointerEvents = "none";

    if (hexagonAnimation) hexagonAnimation.stop();
    if (iconAnimation) iconAnimation.stop();

    animate(maskGroup, { scale: 0, rotate: 0 }, { type: "spring", stiffness: 100, damping: 15 });
    animate(navMenu, { rotate: 0 }, { type: "spring", stiffness: 100, damping: 15 });
    animate(navMenuLinks, { opacity: 0 }, { duration: 0.2, delay: 0.2 });
    if (navMenuLinkItems) {
      animate(navMenuLinkItems, { opacity: 0 }, { duration: 0.1 });
    }
  }
}

window.navbarScrolling = navbarScrolling;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;