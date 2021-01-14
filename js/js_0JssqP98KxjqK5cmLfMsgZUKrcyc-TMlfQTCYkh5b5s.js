/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});;
/**
 * @file
 * Drupal-specific implementation of isotope package.
 */

(function ($) {
  var isotopeActiveFilters = {};

  function params_unserialize(p) {
    if (typeof p == 'undefined') {
      return {};
    }
    var ret = {},
        seg = p.replace(/^\?/,'').split('&'),
        len = seg.length, i = 0, s;
    for (; i < len; i++) {
      if (!seg[i]) {
        continue;
      }
      s = seg[i].split('=');
      ret[s[0]] = s[1];
    }
    return ret;
  }

  function isotope_add_hash(group, value, instanceID) {
    var hash = window.location.href.split('#')[1];
    var params = params_unserialize(hash);
    if (typeof instanceID != 'undefined') {
      params[group + '.' + instanceID] = value;
    }
    else {
      params[group] = value;
    }
    location.hash = $.param(params);
  }

  function isotope_hash() {
    var hash = window.location.href.split('#')[1];
    var params = params_unserialize(hash);
    $.each(params, function(key, value) {
      var filterGroup = key.split('.')[0];
      var instanceID = key.split('.')[1];
      if (filterGroup == 'sort') {
        var $selector = $(".isotope-options.sorts");
        if (instanceID) {
          $selector = $selector.filter("[data-instance-id='" + instanceID + "']");
        }
        if ($selector.length) {
          // This sort option exists.
          isotope_apply('sort', value, instanceID);
        }
      }
      else {
        var $selector = $(".isotope-options[data-filter-group='" + filterGroup + "']");
        if (instanceID) {
          var $selector = $selector.filter("[data-instance-id='" + instanceID + "']");
        }
        if ($selector.length) {
          // This filter option exists.
          isotope_apply('filter', value, instanceID, filterGroup);
        }
      }
    });
  }

  function isotope_apply(type, value, instanceID, filterGroup) {
    // Find all identical optionSets.
    var $optionSets = $(".isotope-options");
    if (type == 'filter') {
      $optionSets = $optionSets.filter("[data-filter-group='" + filterGroup + "']");
    }
    if (type == 'sort') {
      $optionSets = $optionSets.filter(".sorts");
    }
    var $container = $('.isotope-container');
    if (typeof instanceID != 'undefined') {
      var $optionSets = $optionSets.filter("[data-instance-id='" + instanceID + "']");
      var $container = $('#' + instanceID);
    }

    // Apply class change to all identical optionsets.
    $optionSets.find('.selected').removeClass('selected');
    if (type == 'filter') {
      $optionSets.find("[data-filter='" + value + "']").addClass('selected');
      // Combine filters.
      var applyValue = '';
      isotopeActiveFilters[filterGroup] = value;
      for (var prop in isotopeActiveFilters) {
        applyValue += isotopeActiveFilters[ prop ];
      }
      $container.isotope({ filter: applyValue });
    }
    if (type == 'sort') {
      $optionSets.find("[data-sort-by='" + value + "']").addClass('selected');
      applyValue = value.split(',');
      $container.isotope({ sortBy: applyValue });
    }
  }

  Drupal.behaviors.isotope = {
    attach:function(context, settings)
    {
      if ($('body', context).length == 0) {
        // This is an ajax call, likely a prepend.
        var $new_items = $(context).filter('.isotope-element');
        if ($new_items.length) {
          $('.isotope-container').isotope('appended', $new_items);
        };
      }

      var $container = $('.isotope-container', context);
      if ($container.length) {
        // Pre-select first option in option sets.
        $('.isotope-options > li:first-child > a', context).addClass('selected');

        // Use imagesLoaded if it is available.
        if (typeof imagesLoaded !== 'undefined') {
          var container = $container.get();
          imagesLoaded(container, function() {
            if ($container.data('isotope')) {
              $container.isotope('layout');
            }
          });
        }

        // Config options that are not instance-specific.
        var config = $container.data('isotope-options');

        // Check for new hash values.
        if (config.urlFilters == 1) {
          window.onhashchange = isotope_hash;
          isotope_hash();
        }

        if (config.stamp) {
          $container.isotope().isotope('stamp', $(config.stamp));
        }

        // Filter button click.
        $('.isotope-options', context).delegate('.filterbutton:not(.selected)', 'click', function(e) {
          var $this = $(this);

          // Identify what has been clicked.
          var $optionSet = $this.parents('.isotope-options');
          var filterGroup = $optionSet.attr('data-filter-group');
          var instanceID = $optionSet.attr('data-instance-id');
          var filterValue = $this.attr('data-filter');

          if (config.urlFilters == 1) {
            isotope_add_hash(filterGroup, filterValue, instanceID);
          }
          else {
            isotope_apply('filter', filterValue, instanceID, filterGroup);
          }

          e.preventDefault();
        });

        // Sort button click.
        $('.isotope-options', context).delegate('.sorterbutton:not(.selected)', 'click', function(e) {
          var $this = $(this);

          // Identify what has been clicked.
          var $optionSet = $this.parents('.isotope-options');
          var instanceID = $optionSet.attr('data-instance-id');
          var sortValue = $this.attr('data-sort-by');

          if (config.urlFilters == 1) {
            isotope_add_hash('sort', sortValue, instanceID);
          }
          else {
            isotope_apply('sort', sortValue, instanceID);
          }

          e.preventDefault();
        });
      }
    }
  }
}(jQuery));
;
/**
 * @file
 * Js apply all animation to pages
 */
(function ($) {
    'use strict';
    // animation goes here
    Drupal.behaviors.animate_any = {
        attach: function (context, settings) {
            $(document).ready(function () {
                // get all animation json data here
                var animations = jQuery.parseJSON(Drupal.settings.animate_any.animation_data);
                // on scroll we apply animation here
                $(window).scroll(function () {
                    $.each(animations, function (i, element) {
                        // first main identifier
                        var animate_parent = element.parent;
                        var animate_ident = jQuery.parseJSON(element.identifier);
                        // second below identifier
                        if ($(animate_parent).length != 0) {
                            $.each(animate_ident, function (k, item) {
                                var section = $(item.section_identity);
                                if ($(item.section_identity).length != 0) {
                                    // add animation to child section only when it is visible on viewport
                                    if (section.visible()) {
                                        $(animate_parent).find(item.section_identity).addClass(item.section_animation + ' animated');
                                    }
                                }
                            });
                        }
                    });
                });
            });
        }
    };

    /**
     *function use to identify the dom element visible or not
     */
    $.fn.visible = function () {

        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width() - 100;
        viewport.bottom = viewport.top + win.height() - 100;

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };
})(jQuery);
;
