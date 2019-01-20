import ScrollContent from './scrollContent';

export default class Menu extends ScrollContent {
    constructor () {
        super();

        this.eventsListeners();
    }

    eventsListeners() {
        const linksToAnchors = document.querySelectorAll('a[href^="#"].menu__item-title');

        for (let i = 0; i < linksToAnchors.length; i++) {
          linksToAnchors[i].addEventListener("click", this.anchorLinkHandler.bind(this), false)
        }

        document.getElementById("burger-btn").addEventListener("change", this.toggleMenu.bind(this));
    }

    toggleMenu({target}) {
        document.getElementsByClassName('content__menu-wrap')[0].classList.toggle("menu--visible");
    }


    anchorLinkHandler(e) {
        e.preventDefault();

        this.scrollToId(e.currentTarget.getAttribute("href"));
    }
}