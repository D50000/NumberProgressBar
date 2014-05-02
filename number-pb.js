(function($) {
  var NumberProgressBar = function(element, options) {
    var settings = $.extend ({
      duration: 10000,
      percentage: 0,
      shownQuery: '.number-pb-shown',
      numQuery: '.number-pb-num'
    }, options || {});

    this.duration = settings.duration;
    this.percentage = (settings.percentage >= 0 && settings.percentage <= 100) ? settings.percentage : 0;
    this.$element = $(element);
    this.width = this.$element.width();
    this.$shownBar = this.$element.find(settings.shownQuery);
    this.$num = this.$element.find(settings.numQuery);
  }

  NumberProgressBar.prototype.reach = function(percentage) {
      this.percentage = percentage;
      console.log('reach: ', this.percentage);
      this.moveShown();
      this.moveNum();
  }

  NumberProgressBar.prototype.moveShown = function() {
    console.log('moveShown: ', this.percentage);
    this.$shownBar.velocity({
      width: this.percentage + '%'
    }, {
      duration: this.duration
    })
  }

  NumberProgressBar.prototype.moveNum = function() {
    console.log('moveNum: ', this.percentage);
        var self = this;
        var left = this.width * this.percentage / 100.0;
        var numWidth = this.$num.width();
        if (numWidth + left > this.width) {
          var percentage = (this.width - numWidth) / this.width * 100.0;
        } else {
          var percentage = this.percentage;
        }

        this.$num.velocity({
          left: percentage + '%'
        }, {
          duration: this.duration
        })

        // number
        $({num: parseInt(this.$num.text())}).animate({
          num: this.percentage
        }, {
          duration: self.duration,
          step: function() {
            self.$num.text(Math.ceil(this.num) + '%');
          },
          complete: function() {
            self.$num.text(self.percentage + '%');
          }
        })
  }

  $.fn.NumberProgressBar = function(options) {
    return this.each(function () {
      var element = $(this);
      if (element.data('number-pb')) return;
      element.data('number-pb', new NumberProgressBar(this, options));
    })
  }

  $.fn.reach = function(percentage) {
    return this.each(function() {
      var element = $(this);
      var progressbar = element.data('number-pb');
      if (!progressbar) return;
      if (percentage < 0 || percentage > 100 || percentage == progressbar.percentage) return;
      progressbar.reach(percentage);
    })
  }

})(jQuery);