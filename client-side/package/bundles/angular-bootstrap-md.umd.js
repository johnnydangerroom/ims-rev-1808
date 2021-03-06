(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('@angular/router'), require('chart.js'), require('@angular/animations'), require('tslib')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', '@angular/router', 'chart.js', '@angular/animations', 'tslib'], factory) :
	(factory((global['angular-bootstrap-md'] = {}),global.ng.core,global.ng.common,global.ng.forms,global.Rx,global.ng.router,global.Chart,global.ng.animations,global.tslib));
}(this, (function (exports,core,common,forms,rxjs,router,Chart,animations,tslib) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardFooterComponent = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    function MdbCardFooterComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._r.addClass(this._el.nativeElement, 'card-footer');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    return MdbCardFooterComponent;
}());
MdbCardFooterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-footer',
                template: "<div class=\"card-footer\"> <ng-content></ng-content> </div>",
            },] },
];
/** @nocollapse */
MdbCardFooterComponent.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
MdbCardFooterComponent.propDecorators = {
    class: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardTitleComponent = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    function MdbCardTitleComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardTitleComponent.prototype.ngOnInit = function () {
        this._r.addClass(this._el.nativeElement, 'card-title');
    };
    return MdbCardTitleComponent;
}());
MdbCardTitleComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-title',
                template: "<ng-content></ng-content>",
            },] },
];
/** @nocollapse */
MdbCardTitleComponent.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardTextComponent = /** @class */ (function () {
    function MdbCardTextComponent() {
    }
    return MdbCardTextComponent;
}());
MdbCardTextComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-text',
                template: "<p class=\"card-text {{class}} \"> <ng-content></ng-content> </p>",
            },] },
];
MdbCardTextComponent.propDecorators = {
    class: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardBodyComponent = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    function MdbCardBodyComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardBodyComponent.prototype, "cascade", {
        /**
         * @param {?} cascade
         * @return {?}
         */
        set: function (cascade) {
            if (cascade) {
                this._r.addClass(this._el.nativeElement, 'card-body-cascade');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-body');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    return MdbCardBodyComponent;
}());
MdbCardBodyComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-body',
                template: " <ng-content></ng-content> ",
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MdbCardBodyComponent.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
MdbCardBodyComponent.propDecorators = {
    class: [{ type: core.Input }],
    cascade: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardComponent = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    function MdbCardComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardComponent.prototype, "narrower", {
        /**
         * @param {?} narrower
         * @return {?}
         */
        set: function (narrower) {
            if (narrower) {
                this._r.addClass(this._el.nativeElement, 'narrower');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "reverse", {
        /**
         * @param {?} reverse
         * @return {?}
         */
        set: function (reverse) {
            if (reverse) {
                this._r.addClass(this._el.nativeElement, 'reverse');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "dark", {
        /**
         * @param {?} dark
         * @return {?}
         */
        set: function (dark) {
            if (dark) {
                this._r.addClass(this._el.nativeElement, 'card-dark');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    return MdbCardComponent;
}());
MdbCardComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card',
                template: "<div class=\"card\" [ngClass]=\"{'card-cascade': cascade, 'wider': wider}\" #card> <ng-content></ng-content> </div>",
            },] },
];
/** @nocollapse */
MdbCardComponent.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
MdbCardComponent.propDecorators = {
    class: [{ type: core.Input }],
    cascade: [{ type: core.Input }],
    wider: [{ type: core.Input }],
    narrower: [{ type: core.Input }],
    reverse: [{ type: core.Input }],
    dark: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardImageComponent = /** @class */ (function () {
    function MdbCardImageComponent() {
    }
    return MdbCardImageComponent;
}());
MdbCardImageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-img',
                template: "<img class=\"img-fluid\" [src]=\"src\" [alt]=\"alt\">",
            },] },
];
MdbCardImageComponent.propDecorators = {
    src: [{ type: core.Input }],
    alt: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbCardHeaderComponent = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    function MdbCardHeaderComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-header');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    return MdbCardHeaderComponent;
}());
MdbCardHeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-header',
                template: "<ng-content></ng-content>",
            },] },
];
/** @nocollapse */
MdbCardHeaderComponent.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
MdbCardHeaderComponent.propDecorators = {
    class: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardsFreeModule = /** @class */ (function () {
    function CardsFreeModule() {
    }
    /**
     * @return {?}
     */
    CardsFreeModule.forRoot = function () {
        return { ngModule: CardsFreeModule, providers: [] };
    };
    return CardsFreeModule;
}());
CardsFreeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    MdbCardComponent,
                    MdbCardBodyComponent,
                    MdbCardImageComponent,
                    MdbCardTextComponent,
                    MdbCardTitleComponent,
                    MdbCardFooterComponent,
                    MdbCardHeaderComponent
                ],
                exports: [
                    MdbCardComponent,
                    MdbCardBodyComponent,
                    MdbCardImageComponent,
                    MdbCardTextComponent,
                    MdbCardTitleComponent,
                    MdbCardFooterComponent,
                    MdbCardHeaderComponent
                ]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbBtnDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function MdbBtnDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.color = '';
        this.rounded = false;
        this.gradient = '';
        this.outline = false;
        this.flat = false;
        this.size = '';
        this.block = false;
        this.floating = false;
    }
    /**
     * @return {?}
     */
    MdbBtnDirective.prototype.ngOnInit = function () {
        /** @type {?} */
        var colorClass = 'btn-' + this.color;
        /** @type {?} */
        var gradientClass = this.gradient + '-gradient';
        /** @type {?} */
        var outlineClass = 'btn-outline-' + this.color;
        /** @type {?} */
        var flatClass = 'btn-flat';
        /** @type {?} */
        var roundedClass = 'btn-rounded';
        /** @type {?} */
        var sizeClass = 'btn-' + this.size;
        /** @type {?} */
        var blockClass = 'btn-block';
        /** @type {?} */
        var floatingClass = 'btn-floating';
        this.renderer.addClass(this.el.nativeElement, 'btn');
        if (this.color !== '') {
            this.renderer.addClass(this.el.nativeElement, colorClass);
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, roundedClass);
        }
        if (this.gradient) {
            if (this.color !== '') {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            this.renderer.addClass(this.el.nativeElement, gradientClass);
        }
        if (this.outline) {
            this.renderer.removeClass(this.el.nativeElement, colorClass);
            this.renderer.addClass(this.el.nativeElement, outlineClass);
        }
        if (this.flat) {
            if (this.color) {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            if (this.gradient) {
                this.renderer.removeClass(this.el.nativeElement, gradientClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, outlineClass);
            }
            if (this.rounded) {
                this.renderer.removeClass(this.el.nativeElement, roundedClass);
            }
            this.renderer.addClass(this.el.nativeElement, flatClass);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, sizeClass);
        }
        if (this.block) {
            this.renderer.addClass(this.el.nativeElement, blockClass);
        }
        if (this.floating) {
            this.renderer.removeClass(this.el.nativeElement, 'btn');
            this.renderer.addClass(this.el.nativeElement, floatingClass);
        }
    };
    return MdbBtnDirective;
}());
MdbBtnDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbBtn]'
            },] },
];
/** @nocollapse */
MdbBtnDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
MdbBtnDirective.propDecorators = {
    color: [{ type: core.Input }],
    rounded: [{ type: core.Input }],
    gradient: [{ type: core.Input }],
    outline: [{ type: core.Input }],
    flat: [{ type: core.Input }],
    size: [{ type: core.Input }],
    block: [{ type: core.Input }],
    floating: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = function (state$$1) {
        this.state = state$$1;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonCheckboxDirective;
}());
ButtonCheckboxDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] },
];
ButtonCheckboxDirective.propDecorators = {
    btnCheckboxTrue: [{ type: core.Input }],
    btnCheckboxFalse: [{ type: core.Input }],
    state: [{ type: core.HostBinding, args: ['class.active',] }],
    onClick: [{ type: core.HostListener, args: ['click',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function ButtonRadioDirective(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach(function (element) {
                _this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(function (element) {
                _this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) {
        }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonRadioDirective;
}());
ButtonRadioDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
ButtonRadioDirective.propDecorators = {
    mdbRadio: [{ type: core.Input }],
    uncheckable: [{ type: core.Input }],
    value: [{ type: core.Input }],
    isActive: [{ type: core.HostBinding, args: ['class.active',] }],
    onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    return ButtonsModule;
}());
ButtonsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RippleDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function RippleDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RippleDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return RippleDirective;
}());
RippleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbRippleRadius]'
            },] },
];
/** @nocollapse */
RippleDirective.ctorParameters = function () { return [
    { type: core.ElementRef }
]; };
RippleDirective.propDecorators = {
    click: [{ type: core.HostListener, args: ['click', ['$event'],] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RippleModule = /** @class */ (function () {
    function RippleModule() {
    }
    /**
     * @return {?}
     */
    RippleModule.forRoot = function () {
        return { ngModule: RippleModule, providers: [] };
    };
    return RippleModule;
}());
RippleModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [RippleDirective],
                exports: [RippleDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbInputDirective = /** @class */ (function () {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     * @param {?} platformId
     */
    function MdbInputDirective(_elRef, _renderer, platformId) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.mdbValidate = true;
        this.validateSuccess = true;
        this.validateError = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = _elRef;
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onfocus = function () {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onblur = function () {
        this.validationFunction();
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onchange = function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.oniput = function () {
        this.validationFunction();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputDirective.prototype.onkeydown = function (event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.oncut = function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onpaste = function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ondrop = function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbInputDirective.prototype.updateErrorMsg = function (value) {
        if (this.wrongTextContainer) {
            this.wrongTextContainer.innerHTML = value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbInputDirective.prototype.updateSuccessMsg = function (value) {
        if (this.rightTextContainer) {
            this.rightTextContainer.innerHTML = value;
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        if (this.mdbValidate) {
            this.wrongTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.wrongTextContainer, 'inputVal');
            this._renderer.addClass(this.wrongTextContainer, 'text-danger');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
            /** @type {?} */
            var textWrong = this._elRef.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            if (!textWrong) {
                this.wrongTextContainer.innerHTML = (this.errorMessage ? this.errorMessage : 'wrong');
            }
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this.rightTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.rightTextContainer, 'inputVal');
            this._renderer.addClass(this.rightTextContainer, 'text-success');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
            /** @type {?} */
            var textSuccess = this._elRef.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            if (!textSuccess) {
                this.rightTextContainer.innerHTML = (this.successMessage ? this.successMessage : 'success');
            }
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('errorMessage')) {
            /** @type {?} */
            var newErrorMsg = changes["errorMessage"].currentValue;
            this.updateErrorMsg(newErrorMsg);
        }
        if (changes.hasOwnProperty('successMessage')) {
            /** @type {?} */
            var newSuccessMsg = changes["successMessage"].currentValue;
            this.updateSuccessMsg(newSuccessMsg);
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngDoCheck = function () {
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-valid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-success')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-danger')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-pristine') &&
            this._elRef.nativeElement.classList.contains('ng-untouched') || this._elRef.nativeElement.disabled) {
            if (this._elRef.nativeElement.classList.contains('counter-success')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            }
            else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            }
        }
        if (!this.validateSuccess) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
        }
        if (!this.validateError) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.validationFunction = function () {
        var _this = this;
        setTimeout(function () {
            if (_this._elRef.nativeElement.classList.contains('ng-invalid')) {
                _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-success');
                _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-danger');
            }
            if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                _this._elRef.nativeElement.classList.contains('ng-invalid')) {
                if (_this.mdbValidate) {
                    _this._renderer.addClass(_this._elRef.nativeElement, 'counter-danger');
                    _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'hidden');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'visible');
                    _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
            else if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                _this._elRef.nativeElement.classList.contains('ng-valid')) {
                if (_this.mdbValidate) {
                    _this._renderer.addClass(_this._elRef.nativeElement, 'counter-success');
                    _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'visible');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'hidden');
                    _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewInit = function () {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        /* if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
                this._renderer.removeClass(this.elLabel, 'active');
            } */
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.resize = function () {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.delayedResize = function () {
        setTimeout(this.resize(), 0);
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.initComponent = function () {
        /** @type {?} */
        var inputId;
        /** @type {?} */
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.checkValue = function () {
        /** @type {?} */
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this._renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) {
                // tslint:disable-next-line:max-line-length
                /* if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model').length !== 0) {
                            this._renderer.addClass(this.elLabel, 'active');
                        } */
            }
        }
    };
    return MdbInputDirective;
}());
MdbInputDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbInputDirective]'
            },] },
];
/** @nocollapse */
MdbInputDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 },
    { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
]; };
MdbInputDirective.propDecorators = {
    mdbInputDirective: [{ type: core.Input, args: ['mdbInputDirective',] }],
    placeholder: [{ type: core.Input, args: ['placeholder',] }],
    customRegex: [{ type: core.Input, args: ['customRegex',] }],
    mdbValidate: [{ type: core.Input, args: ['mdbValidate',] }],
    validateSuccess: [{ type: core.Input, args: ['validateSuccess',] }],
    validateError: [{ type: core.Input, args: ['validateError',] }],
    focusCheckbox: [{ type: core.Input, args: ['focusCheckbox',] }],
    focusRadio: [{ type: core.Input, args: ['focusRadio',] }],
    errorMessage: [{ type: core.Input }],
    successMessage: [{ type: core.Input }],
    onfocus: [{ type: core.HostListener, args: ['focus',] }],
    onblur: [{ type: core.HostListener, args: ['blur',] }],
    onchange: [{ type: core.HostListener, args: ['change',] }],
    oniput: [{ type: core.HostListener, args: ['input',] }],
    onkeydown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: core.HostListener, args: ['cut',] }],
    onpaste: [{ type: core.HostListener, args: ['paste',] }],
    ondrop: [{ type: core.HostListener, args: ['drop',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EqualValidatorDirective = /** @class */ (function () {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = function (c) {
        /** @type {?} */
        var setToNullValue = null;
        /** @type {?} */
        var v = c.value;
        /** @type {?} */
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    return EqualValidatorDirective;
}());
EqualValidatorDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return EqualValidatorDirective; }), multi: true }
                ]
            },] },
];
/** @nocollapse */
EqualValidatorDirective.ctorParameters = function () { return [
    { type: String, decorators: [{ type: core.Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: core.Attribute, args: ['reverse',] }] }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    /**
     * @return {?}
     */
    InputsModule.forRoot = function () {
        return { ngModule: InputsModule, providers: [] };
    };
    return InputsModule;
}());
InputsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [MdbInputDirective, EqualValidatorDirective],
                exports: [MdbInputDirective, EqualValidatorDirective],
                schemas: [core.NO_ERRORS_SCHEMA],
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new rxjs.Subject();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = function () {
        this.navbarLinkClicks.next();
    };
    return NavbarService;
}());
NavbarService.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = function () {
    };
    return LinksComponent;
}());
LinksComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'links',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
LinksComponent.ctorParameters = function () { return [
    { type: NavbarService }
]; };
LinksComponent.propDecorators = {
    links: [{ type: core.ContentChildren, args: [router.RouterLinkWithHref, { read: core.ElementRef, descendants: true },] }],
    linkClick: [{ type: core.Output }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'logo, mdb-navbar-brand',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     */
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.addTogglerIconClasses = function () {
        var _this = this;
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach(function (iconClass) {
                    _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                });
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = function () {
        /** @type {?} */
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
            https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.collapse = true;
            if (!_this.containerInside) {
                /** @type {?} */
                var childrens = Array.from(_this.container.nativeElement.children);
                childrens.forEach(function (child) {
                    // this.navbar.nativeElement.append(child);
                    _this.renderer.appendChild(_this.navbar.nativeElement, child);
                    _this.container.nativeElement.remove();
                });
            }
            if (_this.el.nativeElement.children.length === 0) {
                _this.el.nativeElement.remove();
            }
        });
        this.addTogglerIconClasses();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.toggle = function (event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.containerInside) {
                return 'flex';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        /** @type {?} */
        var breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{SideClass}}\" #nav> <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container> <ng-content select=\"mdb-navbar-brand\"></ng-content> <ng-content select=\"logo\"></ng-content> <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content> <div *ngIf=\"this.doubleNav == false\"> <button #toggler class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\"> <span class=\"navbar-toggler-icon\"> </span> </button> </div> <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\"> <ng-content select=\"links\"></ng-content> </div> </div> </nav>",
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = function () { return [
    { type: core.Renderer2 },
    { type: NavbarService }
]; };
NavbarComponent.propDecorators = {
    iconBackground: [{ type: core.Input }],
    SideClass: [{ type: core.Input }],
    containerInside: [{ type: core.Input }],
    el: [{ type: core.ViewChild, args: ['navbar',] }],
    mobile: [{ type: core.ViewChild, args: ['mobile',] }],
    navbar: [{ type: core.ViewChild, args: ['nav',] }],
    container: [{ type: core.ViewChild, args: ['container',] }],
    toggler: [{ type: core.ViewChild, args: ['toggler',] }],
    onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }],
    onScroll: [{ type: core.HostListener, args: ['document:scroll',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavlinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = function () {
    };
    return NavlinksComponent;
}());
NavlinksComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'navlinks',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
NavlinksComponent.ctorParameters = function () { return [
    { type: NavbarService }
]; };
NavlinksComponent.propDecorators = {
    links: [{ type: core.ContentChildren, args: [router.RouterLinkWithHref, { read: core.ElementRef, descendants: true },] }],
    linkClick: [{ type: core.Output }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                providers: [NavbarService]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    /**
     * @param {?} open
     * @param {?=} close
     */
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger$$1) { return trigger$$1.split(':'); })
        .map(function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    /** @type {?} */
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger$$1) {
        if (trigger$$1.open === trigger$$1.close) {
            listeners.push(renderer.listen(target, trigger$$1.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger$$1.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger$$1.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
/**
 * @template T
 */
var ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new core.EventEmitter();
        this.onShown = new core.EventEmitter();
        this.onBeforeHide = new core.EventEmitter();
        this.onHidden = new core.EventEmitter();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = /** @type {?} */ (opts.target) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            /** @type {?} */
            var injector = core.ReflectiveInjector.resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof core.ElementRef) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                //  document.querySelector(this.container as string)
                document.querySelector(/** @type {?} */ (this.container))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof core.TemplateRef) {
            if (this._viewContainerRef) {
                /** @type {?} */
                var viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef_1.rootNodes], viewRef_1);
            }
            /** @type {?} */
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            var modalContentInjector = core.ReflectiveInjector.resolveAndCreate(this._providers.concat([content]), this._injector);
            /** @type {?} */
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elPosition;
        /** @type {?} */
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            /** @type {?} */
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            /** @type {?} */
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elBcr = element.getBoundingClientRect();
        /** @type {?} */
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        /** @type {?} */
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        /** @type {?} */
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        /** @type {?} */
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        /** @type {?} */
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        /** @type {?} */
        var targetElBCR = targetElement.getBoundingClientRect();
        /** @type {?} */
        var placementPrimary = placement.split(' ')[0] || 'top';
        /** @type {?} */
        var placementSecondary = placement.split(' ')[1] || 'center';
        /** @type {?} */
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = function (element, prop) { return ((window.getComputedStyle(element)))[prop]; };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = function (element) {
        /** @type {?} */
        var offsetParentEl = (element.offsetParent) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
/** @type {?} */
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    /** @type {?} */
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return /** @type {?} */ (document.querySelector(element));
        }
        if (element instanceof core.ElementRef) {
            return element.nativeElement;
        }
        return /** @type {?} */ (element);
    };
    return PositioningService;
}());
PositioningService.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    return ComponentLoaderFactory;
}());
ComponentLoaderFactory.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver },
    { type: core.NgZone },
    { type: core.Injector },
    { type: PositioningService },
    { type: core.ApplicationRef }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new core.EventEmitter();
        this.isDisabledChange = new core.EventEmitter();
        this.toggleClick = new core.EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    return BsDropdownState;
}());
BsDropdownState.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
BsDropdownState.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    /**
     * @param {?} _state
     */
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return BsDropdownContainerComponent;
}());
BsDropdownContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
            },] },
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = function () { return [
    { type: BsDropdownState }
]; };
BsDropdownContainerComponent.propDecorators = {
    display: [{ type: core.HostBinding, args: ['style.display',] }],
    position: [{ type: core.HostBinding, args: ['style.position',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    return BsDropdownMenuDirective;
}());
BsDropdownMenuDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] },
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = function () { return [
    { type: BsDropdownState },
    { type: core.ViewContainerRef },
    { type: core.TemplateRef }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _element
     */
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    return BsDropdownToggleDirective;
}());
BsDropdownToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle'
            },] },
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = function () { return [
    { type: BsDropdownState },
    { type: core.ElementRef }
]; };
BsDropdownToggleDirective.propDecorators = {
    ariaHaspopup: [{ type: core.HostBinding, args: ['attr.aria-haspopup',] }],
    isDisabled: [{ type: core.HostBinding, args: ['attr.disabled',] }],
    isOpen: [{ type: core.HostBinding, args: ['attr.aria-expanded',] }],
    onClick: [{ type: core.HostListener, args: ['click',] }],
    onDocumentClick: [{ type: core.HostListener, args: ['document:click', ['$event'],] }],
    onEsc: [{ type: core.HostListener, args: ['keyup.esc',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
    return BsDropdownConfig;
}());
BsDropdownConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** *
 * JS version of browser APIs. This library can only run in the browser.
  @type {?} */
var win = typeof window !== 'undefined' && window || /** @type {?} */ ({});
/** @type {?} */
var document$1 = win.document;
/** @type {?} */
var location = win.location;
/** @type {?} */
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
/** @type {?} */
var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
var Event = win['Event'];
/** @type {?} */
var MouseEvent = win['MouseEvent'];
/** @type {?} */
var KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
var EventTarget = win['EventTarget'];
/** @type {?} */
var History = win['History'];
/** @type {?} */
var Location = win['Location'];
/** @type {?} */
var EventListener = win['EventListener'];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function isBs3() {
    return win.__theme === 'bs4';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _config
     * @param {?} _state
     */
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            /** @type {?} */
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        /** @type {?} */
        var parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    return BsDropdownDirective;
}());
BsDropdownDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState]
            },] },
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 },
    { type: core.ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: BsDropdownConfig },
    { type: BsDropdownState }
]; };
BsDropdownDirective.propDecorators = {
    placement: [{ type: core.Input }],
    triggers: [{ type: core.Input }],
    container: [{ type: core.Input }],
    dropup: [{ type: core.HostBinding, args: ['class.dropup',] }, { type: core.Input }],
    autoClose: [{ type: core.Input }],
    isDisabled: [{ type: core.Input }],
    isOpen: [{ type: core.HostBinding, args: ['class.open',] }, { type: core.HostBinding, args: ['class.show',] }, { type: core.Input }],
    isOpenChange: [{ type: core.Output }],
    onShown: [{ type: core.Output }],
    onHidden: [{ type: core.Output }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    return DropdownModule;
}());
DropdownModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        /** @type {?} */
        var outArray = [];
        /** @type {?} */
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = {
            value: /** @type {?} */ (value),
            next: /** @type {?} */ (undefined),
            previous: /** @type {?} */ (undefined)
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                /** @type {?} */
                var currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = function (fn) {
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = function (value) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        this.keyboard = false;
    }
    return CarouselConfig;
}());
CarouselConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0, NEXT: 1, PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    /**
     * @param {?} config
     * @param {?} el
     * @param {?} platformId
     */
    function CarouselComponent(config, el, platformId) {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        // protected el: ElementRef = null;
        this.el = null;
        this.animationEnd = true;
        this.isBrowser = false;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new core.EventEmitter(false);
        this.isBrowser = common.isPlatformBrowser(platformId);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        /**
         * @return {?}
         */
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        /**
         * @return {?}
         */
        get: function () {
            return this._currentActiveSlide;
        },
        /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         * @return {?}
         */
        get: function () {
            return this._interval;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Setting first visible slide
        if (this.activeSlideIndex) {
            setTimeout(function () {
                _this._select(_this.activeSlideIndex);
                _this.activeSlideChange.emit({ 'relatedTarget': _this.activeSlide });
            }, 0);
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    };
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Prev', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @param {?} goToIndex
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = function (goToIndex) {
        var _this = this;
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout(function () {
                    goToSlide.directionNext = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    _this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': _this.activeSlide });
                    _this.play();
                }, 100);
            }
        }
    };
    /**
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = function (goToIndex, direction) {
        var _this = this;
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout(function () {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                    }, 100);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout(function () {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                    }, 100);
                }
            }
            if (this.isBrowser) {
                setTimeout(function () {
                    goToSlide.directionLeft = false;
                    goToSlide.directionNext = false;
                    currentSlide.directionLeft = false;
                    currentSlide.directionNext = false;
                    goToSlide.directionRight = false;
                    goToSlide.directionPrev = false;
                    currentSlide.directionRight = false;
                    currentSlide.directionPrev = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    /** @type {?} */
                    var directionName;
                    if (direction === Direction.NEXT) {
                        directionName = 'Next';
                    }
                    else if (direction === Direction.PREV) {
                        directionName = 'Prev';
                    }
                    _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                    _this.play();
                }, 700);
            }
        }
    };
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        if (this.isBrowser) {
            /** @type {?} */
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval(function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                        _this.nextSlide();
                    }
                    else {
                        _this.pause();
                    }
                }, interval);
            }
        }
    };
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.isBrowser) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            /** @type {?} */
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = function () {
        this.el.nativeElement.focus();
    };
    return CarouselComponent;
}());
CarouselComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-carousel',
                template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\"> <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\"> <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a> <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a> </div> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"> <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\"> </li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span  class=\"sr-only\">Previous</span> </a> <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>",
            },] },
];
/** @nocollapse */
CarouselComponent.ctorParameters = function () { return [
    { type: CarouselConfig },
    { type: core.ElementRef },
    { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
]; };
CarouselComponent.propDecorators = {
    noWrap: [{ type: core.Input }],
    noPause: [{ type: core.Input }],
    isControls: [{ type: core.Input, args: ['isControls',] }],
    keyboard: [{ type: core.Input }],
    class: [{ type: core.Input, args: ['class',] }],
    type: [{ type: core.Input, args: ['type',] }],
    animation: [{ type: core.Input, args: ['animation',] }],
    activeSlideIndex: [{ type: core.Input }],
    activeSlideChange: [{ type: core.Output }],
    activeSlide: [{ type: core.Input }],
    interval: [{ type: core.Input }],
    play: [{ type: core.HostListener, args: ['mouseleave',] }],
    pause: [{ type: core.HostListener, args: ['mouseenter',] }],
    keyboardControl: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
    focus: [{ type: core.HostListener, args: ['click',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    /**
     * @param {?} carousel
     * @param {?} el
     */
    function SlideComponent(carousel, el) {
        this.carousel = carousel;
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.el = null;
        // this.carousel = carousel;
        this.el = el;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return SlideComponent;
}());
SlideComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-slide, mdb-carousel-item',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/** @nocollapse */
SlideComponent.ctorParameters = function () { return [
    { type: CarouselComponent },
    { type: core.ElementRef }
]; };
SlideComponent.propDecorators = {
    active: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input }],
    animated: [{ type: core.HostBinding, args: ['class.animated',] }],
    directionNext: [{ type: core.HostBinding, args: ['class.carousel-item-next',] }],
    directionLeft: [{ type: core.HostBinding, args: ['class.carousel-item-left',] }],
    directionPrev: [{ type: core.HostBinding, args: ['class.carousel-item-prev',] }],
    directionRight: [{ type: core.HostBinding, args: ['class.carousel-item-right',] }],
    el: [{ type: core.HostBinding, args: ['class.carousel-item',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    return CarouselModule;
}());
CarouselModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BaseChartDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new core.EventEmitter();
        this.chartHover = new core.EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) && !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        /** @type {?} */
        var datasets = this.getDatasets();
        /** @type {?} */
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        /** @type {?} */
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    /**
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        /** @type {?} */
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((this.data)).map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                /** @type {?} */
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
BaseChartDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] },
];
/** @nocollapse */
BaseChartDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: String, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
]; };
BaseChartDirective.propDecorators = {
    data: [{ type: core.Input }],
    datasets: [{ type: core.Input }],
    labels: [{ type: core.Input }],
    options: [{ type: core.Input }],
    chartType: [{ type: core.Input }],
    colors: [{ type: core.Input }],
    legend: [{ type: core.Input }],
    chartClick: [{ type: core.Output }],
    chartHover: [{ type: core.Output }]
};
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    /** @type {?} */
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    BaseChartDirective
                ],
                exports: [
                    BaseChartDirective
                ],
                imports: []
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
        this.showBsCollapse = new core.EventEmitter();
        this.shownBsCollapse = new core.EventEmitter();
        this.hideBsCollapse = new core.EventEmitter();
        this.hiddenBsCollapse = new core.EventEmitter();
        this.collapsed = new core.EventEmitter();
        this.expanded = new core.EventEmitter();
        this.overflow = 'hidden';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CollapseComponent.prototype.onExpandBodyDone = function (event) {
        if (event.toState === 'expanded') {
            this.shownBsCollapse.emit(this);
            this.expanded.emit(this);
        }
        else {
            this.hiddenBsCollapse.emit(this);
            this.collapsed.emit(this);
        }
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.toggle = function () {
        this.isCollapsed ? this.open() : this.hide();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.open = function () {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.hide = function () {
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.initializeCollapseState = function () {
        this.isCollapsed ? this.hide() : this.open();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.ngOnInit = function () {
        this.initializeCollapseState();
    };
    return CollapseComponent;
}());
CollapseComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
                template: '<ng-content></ng-content>',
                animations: [
                    animations.trigger('expandBody', [
                        animations.state('collapsed', animations.style({ height: '0px', visibility: 'hidden' })),
                        animations.state('expanded', animations.style({ height: '*', visibility: 'visible' })),
                        animations.transition('expanded <=> collapsed', animations.animate('500ms ease')),
                    ])
                ],
            },] },
];
/** @nocollapse */
CollapseComponent.ctorParameters = function () { return []; };
CollapseComponent.propDecorators = {
    isCollapsed: [{ type: core.Input }],
    showBsCollapse: [{ type: core.Output }],
    shownBsCollapse: [{ type: core.Output }],
    hideBsCollapse: [{ type: core.Output }],
    hiddenBsCollapse: [{ type: core.Output }],
    collapsed: [{ type: core.Output }],
    expanded: [{ type: core.Output }],
    expandAnimationState: [{ type: core.HostBinding, args: ['@expandBody',] }],
    overflow: [{ type: core.HostBinding, args: ['style.overflow',] }],
    onExpandBodyDone: [{ type: core.HostListener, args: ['@expandBody.done', ['$event'],] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    return CollapseModule;
}());
CollapseModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [CollapseComponent],
                exports: [CollapseComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
ModalOptions.decorators = [
    { type: core.Injectable },
];
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = function () { };
    return MDBModalRef;
}());
MDBModalRef.decorators = [
    { type: core.Injectable },
];
/** @type {?} */
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
/** @type {?} */
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
/** @type {?} */
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = function (elem) {
        /** @type {?} */
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isAnimated;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.removeClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        else {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    return ModalBackdropComponent;
}());
ModalBackdropComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-modal-backdrop',
                template: "",
            },] },
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
ModalBackdropComponent.propDecorators = {
    classNameBackDrop: [{ type: core.HostBinding, args: ['class.modal-backdrop',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var TRANSITION_DURATION = 300;
/** @type {?} */
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new core.EventEmitter();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new core.EventEmitter();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new core.EventEmitter();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new core.EventEmitter();
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        /** @type {?} */
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = function () {
        try {
            /** @type {?} */
            var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
            if (!otherOpenedModals.length) {
                return;
            }
            //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
            otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
        }
        catch (error) { }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = function () {
        /** @type {?} */
        var scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    return ModalDirective;
}());
ModalDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbModal]',
                exportAs: 'mdb-modal, mdbModal'
            },] },
];
/** @nocollapse */
ModalDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.ViewContainerRef },
    { type: core.Renderer2 },
    { type: ComponentLoaderFactory }
]; };
ModalDirective.propDecorators = {
    config: [{ type: core.Input }],
    onShow: [{ type: core.Output }],
    onShown: [{ type: core.Output }],
    onHide: [{ type: core.Output }],
    onHidden: [{ type: core.Output }],
    onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
    onEsc: [{ type: core.HostListener, args: ['keydown.esc',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var msConfig = {
    serviceInstance: new Object()
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.tabindex = -1;
        this.role = 'dialog';
        this.modla = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = msConfig.serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, ClassName.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, ClassName.OPEN);
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, ClassName.OPEN);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    };
    return ModalContainerComponent;
}());
ModalContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-modal-container',
                template: "\n  <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
            },] },
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = function () { return [
    { type: ModalOptions },
    { type: core.ElementRef },
    { type: core.Renderer2 }
]; };
ModalContainerComponent.propDecorators = {
    tabindex: [{ type: core.HostBinding, args: ['tabindex',] }],
    role: [{ type: core.HostBinding, args: ['role',] }],
    modla: [{ type: core.HostBinding, args: ['class.modal',] }],
    onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
    onEsc: [{ type: core.HostListener, args: ['window:keydown.esc',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MDBModalService = /** @class */ (function () {
    /**
     * @param {?} clf
     * @param {?} el
     * @param {?} v
     * @param {?} r
     */
    function MDBModalService(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        this.config = modalConfigDefaults;
        this.onShow = new core.EventEmitter();
        this.onShown = new core.EventEmitter();
        this.onHide = new core.EventEmitter();
        this.onHidden = new core.EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.v, this.r);
        msConfig.serviceInstance = this;
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = function (content) {
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        var mdbModalRef = new MDBModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = function () {
        /** @type {?} */
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = function () {
        /** @type {?} */
        var loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    return MDBModalService;
}());
MDBModalService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
MDBModalService.ctorParameters = function () { return [
    { type: ComponentLoaderFactory },
    { type: core.ElementRef },
    { type: core.ViewContainerRef },
    { type: core.Renderer2 }
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    return ModalModule;
}());
ModalModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
    return TooltipConfig;
}());
TooltipConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     * @param {?} r
     */
    function TooltipContainerComponent(config, r) {
        this.r = r;
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        setTimeout(function () {
            /** @type {?} */
            var arrowClassList = _this.tooltipArrow.nativeElement.classList;
            /** @type {?} */
            var tooltipHeight = _this.tooltipInner.nativeElement.clientHeight;
            if (arrowClassList.contains('top')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', tooltipHeight + 6 + 'px');
            }
            else if (arrowClassList.contains('left')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
            else if (arrowClassList.contains('right')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
        }, 0);
    };
    return TooltipContainerComponent;
}());
TooltipContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: "\n  <div #tooltipArrow class=\"tooltip-arrow\" [ngClass]=\"{'left': placement == 'left', 'right': placement == 'right', 'top': placement == 'top'}\"></div>\n  <div #tooltipInner class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
            },] },
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = function () { return [
    { type: TooltipConfig },
    { type: core.Renderer2 }
]; };
TooltipContainerComponent.propDecorators = {
    tooltipInner: [{ type: core.ViewChild, args: ['tooltipInner',] }],
    tooltipArrow: [{ type: core.ViewChild, args: ['tooltipArrow',] }],
    show: [{ type: core.HostBinding, args: ['class.show',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function OnChange() {
    /** @type {?} */
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get: function () { return this[_key]; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     */
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new core.EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        get: function () { return this._tooltip.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        /** @type {?} */
        var showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    return TooltipDirective;
}());
TooltipDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef },
    { type: core.Renderer2 },
    { type: core.ElementRef },
    { type: ComponentLoaderFactory },
    { type: TooltipConfig }
]; };
TooltipDirective.propDecorators = {
    mdbTooltip: [{ type: core.Input }],
    tooltipChange: [{ type: core.Output }],
    placement: [{ type: core.Input }],
    triggers: [{ type: core.Input }],
    container: [{ type: core.Input }],
    isOpen: [{ type: core.Input }],
    isDisabled: [{ type: core.Input }],
    onShown: [{ type: core.Output }],
    onHidden: [{ type: core.Output }],
    delay: [{ type: core.Input }],
    fadeDuration: [{ type: core.Input }]
};
tslib.__decorate([
    OnChange(),
    tslib.__metadata("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    return TooltipModule;
}());
TooltipModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    return PopoverConfig;
}());
PopoverConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    return PopoverContainerComponent;
}());
PopoverContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-popover-container',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
            },] },
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = function () { return [
    { type: PopoverConfig }
]; };
PopoverContainerComponent.propDecorators = {
    placement: [{ type: core.Input }],
    title: [{ type: core.Input }],
    show: [{ type: core.HostBinding, args: ['class.show',] }],
    role: [{ type: core.HostBinding, args: ['attr.role',] }],
    class: [{ type: core.HostBinding, args: ['class',] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _config
     * @param {?} cis
     */
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () { return this._popover.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.mdbPopoverHeader || this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    return PopoverDirective;
}());
PopoverDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] },
];
/** @nocollapse */
PopoverDirective.ctorParameters = function () { return [
    { type: core.ElementRef },
    { type: core.Renderer2 },
    { type: core.ViewContainerRef },
    { type: PopoverConfig },
    { type: ComponentLoaderFactory }
]; };
PopoverDirective.propDecorators = {
    mdbPopover: [{ type: core.Input }],
    mdbPopoverHeader: [{ type: core.Input }],
    popoverTitle: [{ type: core.Input }],
    placement: [{ type: core.Input }],
    triggers: [{ type: core.Input }],
    container: [{ type: core.Input }],
    isOpen: [{ type: core.Input }],
    onShown: [{ type: core.Output }],
    onHidden: [{ type: core.Output }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    return PopoverModule;
}());
PopoverModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WavesDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return WavesDirective;
}());
WavesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbWavesEffect]'
            },] },
];
/** @nocollapse */
WavesDirective.ctorParameters = function () { return [
    { type: core.ElementRef }
]; };
WavesDirective.propDecorators = {
    click: [{ type: core.HostListener, args: ['click', ['$event'],] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    /**
     * @return {?}
     */
    WavesModule.forRoot = function () {
        return { ngModule: WavesModule, providers: [] };
    };
    return WavesModule;
}());
WavesModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [WavesDirective],
                exports: [WavesDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent() {
    }
    return MdbIconComponent;
}());
MdbIconComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-icon',
                template: "<i class=\"fa fa-{{icon}} fa-{{size}} {{class}} prefix\"></i>"
            },] },
];
MdbIconComponent.propDecorators = {
    iconEl: [{ type: core.ViewChild, args: ['iconEl',] }],
    icon: [{ type: core.Input }],
    size: [{ type: core.Input }],
    class: [{ type: core.Input }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    return IconsModule;
}());
IconsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [MdbIconComponent],
                exports: [MdbIconComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
/** @type {?} */
var defaultIdNumber = 0;
var MdbCheckboxChange = /** @class */ (function () {
    function MdbCheckboxChange() {
    }
    return MdbCheckboxChange;
}());
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.defaultId = "mdb-checkbox-" + ++defaultIdNumber;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new core.EventEmitter();
        // Control Value Accessor Methods
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes["checked"].currentValue;
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "changeEvent", {
        /**
         * @return {?}
         */
        get: function () {
            /** @type {?} */
            var newChangeEvent = new MdbCheckboxChange();
            newChangeEvent.element = this;
            newChangeEvent.checked = this.checked;
            return newChangeEvent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxClick = function (event) {
        event.stopPropagation();
        this.toggle();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxChange = function (event) {
        event.stopPropagation();
        this.change.emit(this.changeEvent);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.checked = !!value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return CheckboxComponent;
}());
CheckboxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-checkbox',
                template: "<div [ngClass]=\"{  'custom-control custom-checkbox': default, 'form-check': !default, 'custom-control-inline': inline, 'form-check-inline': inline && !default }\"> <input  #input type=\"checkbox\" class=\"custom-control-input\" [ngClass]=\"{  'filled-in': filledIn || rounded, 'custom-control-input': default, 'form-check-input': !default }\" [id]=\"id\" [checked]=\"checked\" [disabled]=\"disabled\" [required]=\"required\" [indeterminate]=\"indeterminate\" [attr.name]=\"name\" [attr.value]=\"value\" [tabIndex]=\"tabIndex\" (click)=\"onCheckboxClick($event)\" (change)=\"onCheckboxChange($event)\" > <label [ngClass]=\"{  'custom-control-label': default, 'form-check-label': !default, 'label-before': checkboxPosition === 'right',  'checkbox-rounded': rounded, 'disabled': disabled }\" [attr.for]=\"id\"> <ng-content></ng-content> </label> </div>",
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = function () { return []; };
CheckboxComponent.propDecorators = {
    inputEl: [{ type: core.ViewChild, args: ['input',] }],
    class: [{ type: core.Input }],
    id: [{ type: core.Input }],
    required: [{ type: core.Input }],
    name: [{ type: core.Input }],
    value: [{ type: core.Input }],
    checked: [{ type: core.Input }],
    filledIn: [{ type: core.Input }],
    indeterminate: [{ type: core.Input }],
    disabled: [{ type: core.Input }],
    rounded: [{ type: core.Input }],
    checkboxPosition: [{ type: core.Input }],
    default: [{ type: core.Input }],
    inline: [{ type: core.Input }],
    tabIndex: [{ type: core.Input }],
    change: [{ type: core.Output }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    return CheckboxModule;
}());
CheckboxModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    CheckboxComponent
                ],
                exports: [
                    CheckboxComponent
                ],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULES = [
    ButtonsModule,
    CardsFreeModule,
    RippleModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    return MDBRootModule;
}());
MDBRootModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    ButtonsModule,
                    RippleModule.forRoot(),
                    WavesModule.forRoot(),
                    InputsModule.forRoot(),
                    NavbarModule,
                    DropdownModule.forRoot(),
                    CarouselModule.forRoot(),
                    ChartsModule,
                    CollapseModule.forRoot(),
                    ModalModule.forRoot(),
                    TooltipModule.forRoot(),
                    PopoverModule.forRoot(),
                    IconsModule,
                    CardsFreeModule.forRoot(),
                    CheckboxModule
                ],
                exports: MODULES,
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    return MDBBootstrapModule;
}());
MDBBootstrapModule.decorators = [
    { type: core.NgModule, args: [{ exports: MODULES },] },
];

exports.ButtonsModule = ButtonsModule;
exports.ButtonRadioDirective = ButtonRadioDirective;
exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
exports.MdbBtnDirective = MdbBtnDirective;
exports.CHECKBOX_VALUE_ACCESSOR = CHECKBOX_VALUE_ACCESSOR;
exports.CheckboxComponent = CheckboxComponent;
exports.CheckboxModule = CheckboxModule;
exports.CardsFreeModule = CardsFreeModule;
exports.MdbCardComponent = MdbCardComponent;
exports.MdbCardBodyComponent = MdbCardBodyComponent;
exports.MdbCardImageComponent = MdbCardImageComponent;
exports.MdbCardTextComponent = MdbCardTextComponent;
exports.MdbCardTitleComponent = MdbCardTitleComponent;
exports.MdbCardFooterComponent = MdbCardFooterComponent;
exports.MdbCardHeaderComponent = MdbCardHeaderComponent;
exports.RippleModule = RippleModule;
exports.RippleDirective = RippleDirective;
exports.WavesModule = WavesModule;
exports.WavesDirective = WavesDirective;
exports.InputsModule = InputsModule;
exports.MdbInputDirective = MdbInputDirective;
exports.NavbarModule = NavbarModule;
exports.BsDropdownConfig = BsDropdownConfig;
exports.BsDropdownContainerComponent = BsDropdownContainerComponent;
exports.BsDropdownDirective = BsDropdownDirective;
exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
exports.DropdownModule = DropdownModule;
exports.BsDropdownState = BsDropdownState;
exports.BsDropdownToggleDirective = BsDropdownToggleDirective;
exports.CarouselComponent = CarouselComponent;
exports.CarouselConfig = CarouselConfig;
exports.CarouselModule = CarouselModule;
exports.ChartsModule = ChartsModule;
exports.BaseChartDirective = BaseChartDirective;
exports.CollapseComponent = CollapseComponent;
exports.CollapseModule = CollapseModule;
exports.ModalBackdropComponent = ModalBackdropComponent;
exports.ModalBackdropOptions = ModalBackdropOptions;
exports.ModalDirective = ModalDirective;
exports.ModalModule = ModalModule;
exports.ModalOptions = ModalOptions;
exports.MDBModalService = MDBModalService;
exports.ModalContainerComponent = ModalContainerComponent;
exports.MDBModalRef = MDBModalRef;
exports.TooltipConfig = TooltipConfig;
exports.TooltipContainerComponent = TooltipContainerComponent;
exports.TooltipDirective = TooltipDirective;
exports.TooltipModule = TooltipModule;
exports.PopoverConfig = PopoverConfig;
exports.PopoverContainerComponent = PopoverContainerComponent;
exports.PopoverModule = PopoverModule;
exports.PopoverDirective = PopoverDirective;
exports.IconsModule = IconsModule;
exports.MdbIconComponent = MdbIconComponent;
exports.MDBRootModule = MDBRootModule;
exports.MDBBootstrapModule = MDBBootstrapModule;
exports.ɵb1 = CHECKBOX_CONTROL_VALUE_ACCESSOR;
exports.ɵa1 = RADIO_CONTROL_VALUE_ACCESSOR;
exports.ɵg1 = SlideComponent;
exports.ɵc1 = CHECKBOX_VALUE_ACCESSOR;
exports.ɵd1 = CheckboxComponent;
exports.ɵe1 = EqualValidatorDirective;
exports.ɵi1 = LinksComponent;
exports.ɵj1 = LogoComponent;
exports.ɵf1 = NavbarComponent;
exports.ɵh1 = NavbarService;
exports.ɵk1 = NavlinksComponent;
exports.ɵl1 = ComponentLoaderFactory;
exports.ɵn1 = OnChange;
exports.ɵm1 = PositioningService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-bootstrap-md.umd.js.map
