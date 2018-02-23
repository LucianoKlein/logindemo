!function () {
    let view = {
        "switchButton": switchButton,
        "regWindowMask": regWindowMask,
        "regWindow": regWindow
        // "loginWindow": regWindow
    }
    let controller = {
        view: null,
        controller: null,
        init: function (view, controller) {
            this.view = view;
            this.controller = controller;
            this.bindEvents();
        },
        bindEvents: function () {
            this.view.switchButton.addEventListener('click', function (ele) {
                let arr = [];
                arr.push(regWindow, regWindowMask);
                if (regWindowMask.classList.contains("active")) {
                    this.fromAtoB(arr, 'active', 'closeMiddle');
                    $(regWindowMask).one('transitionend', function(ele){
                        let arr = [];
                        arr.push(regWindow, regWindowMask);
                        this.fromAtoB(arr, 'closeMiddle', 'inactive');
                    }.bind(this))
                    
                } else if (regWindowMask.classList.contains("inactive")) {
                    this.fromAtoB(arr, 'inactive', 'openMiddle');
                    $(regWindow).one('transitionend', function(ele){
                        console.log("??");
                        let arr = [];
                        arr.push(regWindow, regWindowMask);
                        this.fromAtoB(arr, 'openMiddle', 'active');
                    }.bind(this))
                }

            }.bind(this));
        },
        fromAtoB: function(obj, stateA, stateB) {
            obj.forEach((ele) => {
                ele.classList.remove(stateA);
            });
            obj.forEach(ele => {
                ele.classList.add(stateB);
            })
        }
    }
    controller.init(view, controller);
}.call()    