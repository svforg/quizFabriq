function $New(selector) {
    var elements;

    if ( selector instanceof HTMLElement) {

        elements = [selector]
    }
    else {
        elements = document.querySelectorAll(selector);
    }

    return new MyJQuery(elements)
}

function MyJQuery(elements) {
    this.elements = elements;

    this.onNew = function (eventName, func) {

        for ( var i = 0; i < this.elements.length; i++ ) {

            this.elements[i].addEventListener(eventName, func);
        }

        return this;
    };

    this.addClassNew = function (nameClass) {

        for ( var i = 0; i < this.elements.length; i++ ) {

            this.elements[i].classList.add(nameClass);
        }

        return this;
    };

    this.removeClassNew = function (nameClass) {

        for ( var i = 0; i < this.elements.length; i++ ) {

            this.elements[i].classList.remove(nameClass);
        }

        return this;
    };

    this.htmlNew = function (html) {

        if ( typeof(html) === "undefined" ) {

            return this.elements[0].innerHTML = html;
        }

        for ( var i = 0; i < this.elements.length; i++ ) {

            this.elements[i].innerHTML = html;
        }

        return this;
    };

    this.findNew = function (elemChild) {

        for ( var i = 0; i < this.elements.length; i++ ) {

            this.elements[i].querySelectorAll(elemChild);
        }

        return this;
    };

    this.fadeOutNew = function (timeDelay, callback) {

        var func = callback || function (){};

        var timer = setInterval(function (elem) {

            elem.style.opacity = 0;

            return elem;
        },timeDelay/1000);

        var timeOut = setInterval(function (elem) {

            elem.remove();

            return elem;
        },timeDelay/1000);

        for ( var i = 0; i < this.elements.length; i++ ) {

            timeOut(timer(this.elements[i]));
        }

        func.call(this.elements[i]);

        return this;
    };

    //this.cssNew
    //this.appendToNew
    //this.prependToNew
    //this.animateNew
}