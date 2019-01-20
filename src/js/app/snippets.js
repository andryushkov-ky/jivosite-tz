import codes from './codesList'

export default class Snippets {
    constructor () {
        this.render();
    }

    createSnippet({box, name}) {
        const snipBlock = box.getElementsByClassName('box__code')[0];
        const elPre = document.createElement('pre');
        const elCode = document.createElement('code');
        const code = document.createTextNode(codes[name]);

        elPre.classList.add('prettyprint');

        elCode.appendChild(code);
        elPre.appendChild(elCode);

        snipBlock.appendChild(elPre);

        elPre.addEventListener('click', this.copySnipped.bind(this, name), false)
    }

    showSuccess(event) {
        const toast = document.getElementsByClassName('toast')[0];

        toast.style.display = 'flex';
        toast.style.top = event.pageY + 'px';
        toast.style.left = event.pageX + 'px';
        toast.style.opacity = 1;

        setTimeout(() => {
            toast.style.display = 'none';
        }, 800);
    }

    copySnipped(name, event) {
        navigator.clipboard.writeText(codes[name]).then(
            this.showSuccess.bind(this, event),
            function(err) {
            console.error('Could not copy text');
        });
    }


    render() {
        for(let name in codes) {
            const box = document.getElementById(name);
            if (!box) continue;

            this.createSnippet({box, name});
        }

        PR.prettyPrint();
    }

}