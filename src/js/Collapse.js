export default class Collapse {
    constructor(root) {
        this.root = root;
        this.isCollapsed = true;
    }

    init() {
        this.drawElements();
        this.listeners();
        
    }

    drawElements() {
        this.container = document.createElement('div');
        this.container.classList.add('container');

        this.collapseBtn = document.createElement('button');
        this.collapseBtn.classList.add('collaps-btn');
        this.collapseBtn.textContent = 'Collapse';

        
        
        this.copyBtn = document.createElement('button');
        this.copyBtn.classList.add('copy-btn');
        this.copyBtn.textContent = 'Copy';

        this.textEl = document.createElement('div');
        this.textEl.classList.add('collapsible-text');
        
        this.textInner = document.createElement('div');
        this.textInner.classList.add('text-inner');
        this.textInner.textContent = 'Anim pariatur cliche reprehenderit, enuim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beef labore wes anderson cred nesciunt sapiente ea proident';
        
        this.textEl.append(this.textInner);
        this.container.append(this.collapseBtn, this.textEl);
        this.root.append(this.container, this.copyBtn);
        
    }

    listeners() {
        this.collapseBtn.addEventListener('click', () => {
            this.toggleTExt();
        });
    }

    toggleTExt() {
        if (this.isCollapsed) {
            this.textEl.classList.add('open');
            this.isCollapsed = false;
        } else {
            this.textEl.classList.remove('open');
            this.isCollapsed = true;
        }
    }
}