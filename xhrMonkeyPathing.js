! function(ob) {
    ob.hookAjax = function(funs) {
        window._ahrealxhr = window._ahrealxhr || XMLHttpRequest;
        XMLHttpRequest = function() {
            this.xhr = new window._ahrealxhr;
            for (var attr in this.xhr) {
                var type = "";
                try {
                    type = typeof this.xhr[attr];
                } catch (e) {}
                if (type === "function") {
                    this[attr] = hookfun(attr);
                } else {
                    Object.defineProperty(this, attr, {
                        get: getFactory(attr),
                        set: setFactory(attr)
                    });
                }
            }
        };

        function getFactory(attr) {
            return function() {
                return this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
            };
        }

        function setFactory(attr) {
            return function(f) {
                var xhr = this.xhr;
                var that = this;
                if (attr.indexOf("on") != 0) {
                    this[attr + "_"] = f;
                    return;
                }
                if (funs[attr]) {
                    xhr[attr] = function() {
                        funs[attr](that) || f.apply(xhr, arguments);
                    };
                } else {
                    xhr[attr] = f;
                }
            };
        }

        function hookfun(fun) {
            return function() {
                var args = [].slice.call(arguments);
                if (funs[fun] && funs[fun].call(this, args, this.xhr)) {
                    return;
                }
                return this.xhr[fun].apply(this.xhr, args);
            };
        }
        return window._ahrealxhr;
    };
    ob.unHookAjax = function() {
        if (window._ahrealxhr) XMLHttpRequest = window._ahrealxhr;
        window._ahrealxhr = undefined;
    };

    if (window.jQuery) {
        call();
    } else {
        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
        document.body.appendChild(script);



        var interval = setInterval(() => {
            if (window.jQuery) {
                clearInterval(interval);
                call();
            }
        }, 1000);
    }

    function call() {
        alert('начал работу');
        var numberNeedToStop;

        $(document).on('click', '.index__home__dice__wrap__cta.is-rolling', function(e) {
            numberNeedToStop = prompt('Kogda ostanavit? ', 8);
            numberNeedToStop = !!numberNeedToStop ? +numberNeedToStop.replace(/\D/g, '') : 1;
            allStepsCount = 0;
        });

        try {
            var red = 0,
                green = 0,
                currentLength = 0,
                currentColor,
                wasColor,
                redb = document.createElement('span'),
                maxq = document.createElement('span'),
                maxT = document.createElement('span'),
                maxT2 = document.createElement('span'),
                greenb = document.createElement('span'),
                wrapper = document.createElement('div'),
                allSteps = document.createElement('div');

            redb.style = `display: inline-block; color: red; font-size: 100px;`;
            greenb.style = `display: inline-block; color: green; font-size: 100px; border-left: 1px solid black;`;
            wrapper.style = ` box-shadow: rgba(14, 252, 26, 0.2) 0px 0px 0px 2px; border-radius: 4px; text-align: center; position: fixed; top: 2%; left: 2%; z-index: 99999999; background: yellow;`;

            function maxStyle(color) {
                return `display: block; color: ${color}; font-size: 20px; background: white;`;
            }

            maxq.style = maxStyle('black');
            maxT.style = maxStyle('green');
            maxT2.style = maxStyle('red');
            allSteps.style = maxStyle('aqua');
            allSteps.id = 'allSteps';

            document.body.appendChild(wrapper);
            wrapper.appendChild(redb);
            wrapper.appendChild(greenb);
            wrapper.appendChild(maxq);
            wrapper.appendChild(maxT);
            wrapper.appendChild(maxT2);
            wrapper.appendChild(allSteps);

            hookAjax({

                //hook callbacks
                onload: function(xhr) {

                    var result = JSON.parse(xhr.xhr.response);
                    if (result.bet.win === true) {
                        //green
                        green++;
                        greenb.innerText = green;
                        currentColor = 'green';
                        if (currentColor === wasColor) {
                            currentLength++;
                        } else {
                            currentLength = 1;
                        }
                    } else if (result.bet.win === false) {
                        //red 
                        red++;
                        redb.innerText = red;
                        currentColor = 'red';
                        if (currentColor === wasColor) {
                            currentLength++;
                        } else {
                            currentLength = 1;
                        }
                    } else {
                        return false;
                    }
                     debugger;
                    allStepsCount++;

                    maxq.innerText = `Выпадений подряд -> ${currentLength}`;
                    maxq.style = maxStyle(currentColor);

                    $('#allSteps').text(`Всего шагов было: ${allStepsCount}`);
                    if (currentColor === 'green') {
                        maxT.innerText = `Max всего подряд (GREEN) (${Math.max(+maxT.innerText.replace(/\D/g, ''), currentLength)})`
                    } else if (currentColor === 'red') {
                        maxT2.innerText = `Max всего подряд (RED) (${Math.max(+maxT2.innerText.replace(/\D/g, ''), currentLength)})`
                       
                        if ((currentLength) == numberNeedToStop) {
                            var el = $('.index__home__dice__wrap__cta').trigger('click');
                        }
                    }
                    wasColor = currentColor;

                }

            });
        } catch (e) {
            console.log(e);
        }
    }
}(window);