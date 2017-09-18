//page's text reader.js
javascript: (function() {
    try {
        debugger ;var play = document.createElement('div');
        var wrapper = document.createElement('div');
        var off = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEXElEQVRoQ+1YS2wbVRQ9bzwz/sdYaePEciLHAgQLCGXRwC6ouwqJbktXIMGCHagbYNMKFVVCqhASC4S6QIWSrnCIBJsiArggKkWJSyQQQq1Fo0bpx41x/MuM/dAdZ1yPP/FrxknTamY58+5955573n33DsND/rCHHD+cAB50Bp0MOBmwyYAjIZsE2jZ3MmCbQpsOHu0M/LZwN861yiucsykwxAE8t0nYIjgyjPE5prhnXjwQztgkctvmHTNAwFHInaqp3ldFPA+dexvqzxegV6uW5RIDxgYASRLx0rKGYxFABhxJKJhhc1jr5KUtgF9/Xz0Crfw1Vz0eMlgvaFgv6qhUqqhs1AH6vDJkWULApyDgl4138u3rGDl9GFr2pmUfjwxEg9sIwGqyBo6PWQonWz1ZArh8cektbWD/pybwW9kyNK225e6xEb8RkPnE3n8B+so1i03YA4S9toMAKCsyXmrORiOA+e/mj5X3xb6kbW7dKeFubqPnjl6PjNGov23d6PFnLJmwJaV2FGtwYdwMwgjA0Hw++0/NE3CJgie7VvbNvUhOw+9OWs5ESAUG22PtSVLHBRyLLIUD9M0I4MqF2cX8+MEJ0vuN1aKQ027sm8ZD596B9ONXDV+UhfhjQq7FFnGcZCmcYH99cf7ZO08fSpPV1X/z0PWtNd/Qeov2O+0aeyNqyULEB/jdYvgEVtWl9OfnZ89nJ14+2k/26eArioTYB4egX1tqYOmrjOpeX2N/TH+78l9icnjlZgn59d4Ht5v2zXJbKGjw+RSMDHkx+M0pKLOfNALoU0ltTs4Mm5+9VCxHHvdmlvPY2Ogtn2bt071A1YpAV2u84ZjYHx8NIrh0Ef4zxxrvVQmIhQTEIbqEDvOly6vGzn9fzQmZ7R/0QtOrKBT1Le+IJxN1pMOvRyx+E2GhbYQXCQVAt27QT7evy7gjRJ5dC2B+NlUqR57wtFYgSWIIBRUMBFW4VZeB+fqNAkplvSd+VZUQjwURWPoBgTP32qkdkFDacogLRQ1+n2KwHfArFqDFko7llUJP8LQgGFB37xCbZdQsfd0QirJP9tGIzyBgV8po80XWDfz9sE/nJTFWbz93+CLLwYW4pZXoJ/ttrQSAeD8rkNlKEGjKwlpicqHqDrSNHvfDfjikgsqsfHsZkfcOoqrfG3D6egtzpFmqPh022ukr09+/mU88/1lrFkS1b4In+7Z2GsBYaJuTWbss6tLZnNAsA81C8qfjxehTH5k2IuyT5ocGPY2qtcMDTRoypjoONCZoGmwqA/vOctVj9I3U4+QLutGlmncA1Xm3KlvKLclm+PRh6NlVC2d96n9ymyPlidaEdB3qeTH3IVe8R0UKPx1Y5Zdpi+bJjg7UtqXDkQYD/e1IwoWk8FDfDJgmtapeOcJqbIoDccYwQd85HSIgwyU+55LdyT33W0WE9b2y5tH+M7dXWN4Kh5OBB50lJwNOBmwy4EjIJoG2zZ0M2KbQpoP/AY3ExnllWzfiAAAAAElFTkSuQmCC';
        var on = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEZElEQVRoQ+1ZzW8bRRT/jb2ziT+2tslHFRMX00JSAaKJONAiIUJVpNQiSm4EBBLHSlxyhkMRF6BB4oLghDhBLyClf0Gj5tADEk2PVBCcNCSEpo6bxB9r7+6gGWcdf60z6VoJlXZO2fV7b977vd9782ZD8IQv8oT7Dy+A486glwEvAy4R8CjkEkDX6l4GXEPo0oCXATcA3r6zlWRlfZIxMgaCJICRPXuLYEgTwuYJ7bpxYTSWdtrHMQNf3xyLmrR70mJkCiBJsm9c2mfTtLCynIVl1atQRcFw31sYfeqKlC2L6T8pqvZJq0BaBjC7kLoKhhkQRKV2cBC6v5JFqVTvfY82gDfinyGk9Aut3VwZu3kDum5CL5niXTCgQFF8CAcpwiFFvDNZqahAffe1V0/O1W5XFwBHvawEbz4O2o0xZDIFbGUKda/7tATGT31TdfxBpohyuSE9DYYGB0IiIHvpVvaji+eHv7WfqwFw5w1/8C+3qAu0WlAnGurFRPJ7se+DhwVsPSodmNxAt4JEPNQkVzI33n/zwss/8h+qAVxbSN3pBPLCwc0ctrN6dWPO+Ykz3wnayDrPlRvRtw0arGCqauQ5XhMigNmF1KcArh4IiaTA0lIGrIYZL8UvYzR2RfB9bSMvZcUJfVt527p39/L510dIJ6lTKUodG+u5OvSnh38Rz0srOzCM9py3FZ3Qr41+0/rtHLl2K/UhIfhBChYJoUb6DMSex6X4Vx1Fnxc+pT5sWr9eJ7O3UnMgmJTwTUrk79VtFItGVfaVp9/BC9H3sP5vATu7BxeuE/ftdpvLlREMUgz0B7Bt/v4P6WTx8s0be//bQ18iRs8ivbrTdCa0QqSW+/xc4N2KO21abJ+W1IdnExoKbK1AZhdS+79IYdxe6M8/MnUCH7x4QzzfW3okZb2vJ4CyYSKXN9qeEUOnI8Le/yIAfupqIX76+kWblVm1ASwCOCejJCPjRKHGDuTzEUQ0ihOaii7VL0zfX8uhUFM/Tvupqg/JQQ15c714pEWcy5cRClKBdjhE6/zLFwys1rTfdmBpYbWmiI+ojdqtz8kxWfS5fvxkUAAg2qgY4PyBNCGkUhUuV9NBRimmh35ua/Uw6PN6OX1KE/bEQcb/OKpRopPoV0cJblSME0pwvlPF3DTMUVoZ5vx9TTEcBv1YRAVvsyYrWFSNnKkOc9zq57fHk/4yWewElfg4vbycrRvoouFeTDxTGadrlyz3bee5bstx2g5CMXz8xuO6rba80JxIYDxRudDwJYM+53x/T3e1azleaGyje3SaYYzNuM1G41zE9+CZuDj4RZVOfMbZyRliSrXPAN7nu1Slrt2aKOkKU6fbXilrU1vpTsEpAkztfTE4dFZaUYnvQSnF2d5LGJG81JtMv05V7WPpS73LTiqtzj+rmIY+RSwyxoAkIRXqMoa7BEgzH5v3K11zj/VZRdqLYxb0vswdcwK8f/IddwK8DHgZcIuA10bdIuhW38uAWwTd6v8HLA0MgGzJAugAAAAASUVORK5CYII=';
        var current = on;
        function stylesPlay() {
            return ` width: 45px; height: 45px; box-shadow: 1px 1px 1px black; background: url(${current}) no-repeat center; border-radius: 50%; background-color: rgba(242, 194, 138, 0.45); display: inline-block; line-height: 45px; cursor: pointer; text-align: center; bottom: 2%; right: 2%; z-index: 99999999; margin: 0 20px; `;
        }
        var stylesWrapper = ` box-shadow: rgba(14, 252, 26, 0.2) 0px 0px 0px 2px; border-radius: 4px; position: fixed; bottom: 2%; right: 2%; z-index: 99999999; `;
        play.style = stylesPlay();
        wrapper.style = stylesWrapper;
        play.setAttribute('id', 'playSuperId');
        wrapper.setAttribute('id', 'wrapperSuperId');
        var needToSpeach = true;
        var speek;
        play.onclick = function(e) {
            needToSpeach = !needToSpeach;
            current = needToSpeach ? on : off;
            e.target.style = stylesPlay();
            console.log('needToSpeach =', needToSpeach);
            return;
        }
        ;
        document.body.onclick = function(e) {
            if (needToSpeach && e.target.id !== 'playSuperId' && e.target.id !== 'wrapperSuperId') {
                e.preventDefault();
                e.target.style.outline = '1px red;';
                speek = window.speechSynthesis.speak(new SpeechSynthesisUtterance(e.target.textContent));
            }
            return;
        }
        ;
        document.body.appendChild(wrapper);
        wrapper.appendChild(play);
    } catch (e) {
        alert(JSON.stringify(e));
    }
}
)()
