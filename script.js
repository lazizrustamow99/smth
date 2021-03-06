class Scroll {
  constructor(set) {
    if (typeof set.el == "string") {
      this.el = document.querySelector(set.el);
    } else if (set.el instanceof HTMLElement) {
      this.el = set.el;
    }
    this.top = set.top;
    this.unit = set.unit;
    this.el.style.background = set.bg;
    this.el.style.position = "fixed";
    this.el.style.top = this.scroll();
    window.addEventListener("scroll", () => this.scroll());
  }
  scroll() {
    this.window = this.scrollNumber();
    console.log(pageYOffset);
    if (this.window - pageYOffset > 0) {
      this.el.style.opacity = (this.window - pageYOffset) / 100;
      this.el.style.top = this.window - pageYOffset + "px";
    } else {
      this.el.style.opacity = 0;
      this.el.style.top = 0;
    }
  }
  scrollNumber() {
    if (this.unit == "px") {
      return this.top >= 0 ? this.top : 0;
    } else if (this.unit == "%" || this.unit == undefined) {
      return this.el.clientHeight;
    }
  }
}
const myScroll = new Scroll({
  el: ".header__nav",
  top: 0,
  unit: "px",
  bg: "black",
});
// ========= ДЗ ==========
let logo = document.querySelector('.header__content');
logo.addEventListener('mouseover', function() {
  function ran(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let r = ran(1, 4);
  if (r == 1) {
    logo.style.top = ran(-850, 850) / 2 + 'px';
  }else if (r == 2) {
    logo.style.bottom = ran(-850, 850) / 2 + 'px';
  }else if (r == 3) {
    logo.style.right = ran(-1660, 1660) / 2 + 'px';
  }else {
    logo.style.left = ran(-1660, 1660) / 2 + 'px';
  }
})




