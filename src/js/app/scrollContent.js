import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

export default class ScrollContent {
    constructor() {
        this.currentBoxId = '';

        this.eventsListener();
    }

    eventsListener() {
        window.addEventListener("scroll", this.scrollHandler.bind(this),);
    }

    scrollHandler() {
        const watchingBoxId = this.getWatchingBoxId();

        if (this.currentBoxId !== watchingBoxId) {
            this.activateMenuItem(watchingBoxId);
            this.currentBoxId = watchingBoxId;
        }
    }

    getWatchingBoxId() {
        const scrollPosition = window.scrollY;
        const boxes = document.getElementsByClassName("box");

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].getAttribute('id') &&
                boxes[i].offsetTop <= Math.ceil(scrollPosition) &&
                (boxes[i + 1] ? boxes[i + 1].offsetTop > Math.ceil(scrollPosition) : true))
            {
                return boxes[i].getAttribute('id');
            }
        }
    }

    activateMenuItem(currentBoxId) {
        const prevMenuItem = document.querySelector('.menu__item-title.menu__item-title--active');
        const currentMenuItem = document.querySelector(`a[href^="#${currentBoxId}"].menu__item-title`);

        try {
            prevMenuItem && prevMenuItem.classList.remove('menu__item-title--active');
            currentMenuItem && currentMenuItem.classList.add('menu__item-title--active');
        } catch (e) {
            console.log("Error with activateMenuItem")
        }
    }

    scrollToId(id) {
        const targetAnchor = id && id !== '#' && document.querySelector(id);

        if (!targetAnchor) return;

        targetAnchor.scrollIntoView({
            block: "start",
            behavior: 'smooth'
        });
    }
}