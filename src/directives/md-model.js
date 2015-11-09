export default {
    twoWay:true,
    bind: function () {
        this.handler = function () {
            // console.log(this.el.__vue__.mdValue);
          this.set(this.el.__vue__.mdValue);
        }.bind(this);
        this.el.addEventListener('change', this.handler)
  },
  unbind: function () {
    this.el.removeEventListener('change', this.handler)
  }
}