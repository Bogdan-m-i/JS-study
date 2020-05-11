

    class Option {

        constructor(text = '') {
            this.text = text;
            this.el;
            this.height;
            this.width;
            this.bg;
            this.fontSize;
            this.textAlign;
        }

        createDiv() {
            this.el = document.createElement('div');
            this.el.style.cssText = `height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            font-size: ${this.fontSize}px;
            text-align: ${this.textAlign};`;
            this.el.textContent = this.text;
            document.body.append(this.el);
        }

    }

    let div = new Option('kakoyto text');
    div.height = 200;
    div.width = 300;
    div.bg = 'red';
    div.fontSize = 40;
    div.textAlign = 'center';
    div.createDiv();

