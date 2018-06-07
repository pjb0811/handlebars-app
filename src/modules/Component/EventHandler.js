import searchObjectValue from './searchObjectValue';

class EventHandler {
  constructor(props) {
    this.props = props;
    this.types = [
      // Mouse Events
      'click',
      'contextmenu',
      'dblclick',
      'hover',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseout',
      'mouseover',
      'mouseup',
      'toggle',
      // Keyboard Events
      'keydown',
      'keypress',
      'keyup',
      // Form Events
      'blur',
      'change',
      'focus',
      'focusin',
      'focusout',
      'select',
      'submit',
      // Browser Events
      'error',
      'resize',
      'scroll',
      // Document Loading
      'ready',
      'load',
      'unload'
    ];

    this.state = {
      method: {
        name: '',
        params: []
      },
      regexs: {
        curring: /(\w+)\((.*|.*\n[\s\S]*?\n.*)\)/
      }
    };
  }

  bind(method) {
    const { element } = this.props;
    const { regexs } = this.state;

    this.types.map(type => {
      const $targets = element.querySelectorAll(`[data-on-${type}]`);
      $targets.forEach(target => {
        const value = target.getAttribute(`data-on-${type}`);
        const results = value.match(regexs.curring);
        const name = results ? results[1] : value;

        if (!method || method === name) {
          target.addEventListener(type, e => {
            this.setMethod(e, value);
          });
        }
      });
    });

    return this;
  }

  setMethod(e, name) {
    const { component } = this.props;

    const { method, regexs } = this.state;
    const results = name.match(regexs.curring);

    method.params = [];

    if (results) {
      method.name = results[1];
      try {
        method.params = JSON.parse(`[${results[2]}]`);
      } catch (e) {
        const filter = results[2].split('.');
        if (filter.splice(0, 1).toString() === 'window') {
          method.params.push(
            filter.join('.')
              ? searchObjectValue(window, filter.join('.'))
              : window
          );
        }
      }
    } else {
      method.name = name;
    }

    method.params.push(e);

    if (typeof component[method.name] === 'function') {
      component[method.name](...method.params);
    }
  }

  unbind(method) {
    const { element, component } = this.props;
    const { regexs } = this.state;

    this.types.map(type => {
      const $targets = element.querySelectorAll(`[data-on-${type}]`);
      $targets.forEach(target => {
        const value = target.getAttribute(`data-on-${type}`);
        const results = value.match(regexs.curring);
        const name = results ? results[1] : value;

        if (!method || method === name) {
          target.removeEventListener(type, component[method]);
        }
      });
    });

    return this;
  }

  rebind(method) {
    this.unbind(method).bind(method);
  }
}

export default EventHandler;
