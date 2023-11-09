(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("aac4d2bb-7090-4ccd-98bb-9c7d984e515f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aac4d2bb-7090-4ccd-98bb-9c7d984e515f' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.1.1.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"b85a138c-7c5b-4026-9e32-13f78ecc0cfd":{"version":"3.1.1","title":"Bokeh Application","defs":[],"roots":[{"type":"object","name":"Figure","id":"p1004","attributes":{"height":350,"sizing_mode":"scale_width","x_range":{"type":"object","name":"DataRange1d","id":"p1005"},"y_range":{"type":"object","name":"DataRange1d","id":"p1006"},"x_scale":{"type":"object","name":"LinearScale","id":"p1018"},"y_scale":{"type":"object","name":"LinearScale","id":"p1020"},"title":{"type":"object","name":"Title","id":"p1007","attributes":{"text":"Rela\\u00e7\\u00e3o press\\u00e3o atmosf\\u00e9rica e altitude"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1051","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1001","attributes":{"selected":{"type":"object","name":"Selection","id":"p1003","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1002"},"data":{"type":"map","entries":[["alt",{"type":"ndarray","array":{"type":"bytes","data":"LhmzF7H8xkDcIyhy3ZbGQBVqdweqM8ZAqvY7SvHSxUAyuPHVkHTFQCIfWhVpGMVAd5EO9Vy+xED/3E6gUWbEQH6BdEYuEMRAdOi759u7w0D1iE4oRWnDQA6spyhWGMNA1mqTYvzIwkAlaSaKJnvCQHUoJnLELsJAvrFu88bjwUDIn/PWH5rBQFv1CMLBUcFANS2sJKAKwUBNBJApr8TAQLf5tafjf8BAj6lnFTM8wEBweND4JvO/QJ2cdt72b79AYUDG/sPuvkDnRvdofW++QK13NggT8r1AdqvJlHV2vUDWvHKGlvy8QL2F8QdohLxAU9WI69wNvEAsdW2g6Ji7QMwWCSl/JbtAFW/9EZWzukAi4tVpH0O6QCIAWLkT1LlA8bZk/GdmuUAlj12bEvq4QCqSAmUKj7hA95m+iEYluEC4y1iRvry3QA3kAmBqVbdAZMe8J0LvtkBufgZpPoq2QOVp2u1XJrZAngnqxYfDtUDhNRhDx2G1QGkeLPYPAbVAh8y4q1uhtECxQzVppEK0QE6yQWrk5LNAYHAWHhaIs0Dy0BklNCyzQPoImk450bJAVqioliB3skBeVRUk5R2yQIyqhUaCxbFArUCodPNtsUAsF4FKNBexQM2vzYdAwbBAKFN/DhRssEDuEUrhqhewQMthjkQCiK9Ano5TIybirkBR3AgZuj2uQOflPRe3mq1AnSm2RBb5rEDqxk770FisQC3R/sXguatADKXwXj8cq0BFyrKt5n+qQBcFf8XQ5KlAKlKW4/dKqUC+nLBtVrKoQEsTf/DmGqhA9RFAHqSEp0AYqmPNiO+mQMreP/ePW6ZA/rzTtrTIpUBTg5hH8jalQF0aYAREpqRAAipAZqUWpECXI4kDEoijQNmiyI6F+qJA64/W1fttokAveOzAcOKhQOiYxlHgV6FAniDOokbOoEAQMkzmn0WgQA12SsvQe59AL244ATlunkCY+TpZcWKdQHdwIehyWJxA1nhj6zZQm0DOsd/HtkmaQKXKpgjsRJlAqXPSXdBBmEBTnGebXUCXQIt7Q7iNQJZAL+QSzVpClUCqcFMTv0WUQEAUXuS0SpNARah6uDZRkkC2EPwlP1mRQNuWZODIYpBABUMkb53bjkD+4+Mtl/SMQJcrdwl1EItAunplQi0viUC+Xt9LtlCHQPggXMoGdYVA+XxDkhWcg0Bq+KKm2cWBQNrP3G+U5H9At1WWRb1CfEBZX8vdHKZ4QHCvoZuiDnVAPa3dMz58cUBPtYxVv91rQBWUNaTuzGRABaRhHNeLW0BRoYuEXyJLQA=="},"shape":[122],"dtype":"float64","order":"little"}],["Hgmm",{"type":"ndarray","array":{"type":"bytes","data":"lgAAAJsAAACgAAAApQAAAKoAAACvAAAAtAAAALkAAAC+AAAAwwAAAMgAAADNAAAA0gAAANcAAADcAAAA4QAAAOYAAADrAAAA8AAAAPUAAAD6AAAA/wAAAAQBAAAJAQAADgEAABMBAAAYAQAAHQEAACIBAAAnAQAALAEAADEBAAA2AQAAOwEAAEABAABFAQAASgEAAE8BAABUAQAAWQEAAF4BAABjAQAAaAEAAG0BAAByAQAAdwEAAHwBAACBAQAAhgEAAIsBAACQAQAAlQEAAJoBAACfAQAApAEAAKkBAACuAQAAswEAALgBAAC9AQAAwgEAAMcBAADMAQAA0QEAANYBAADbAQAA4AEAAOUBAADqAQAA7wEAAPQBAAD5AQAA/gEAAAMCAAAIAgAADQIAABICAAAXAgAAHAIAACECAAAmAgAAKwIAADACAAA1AgAAOgIAAD8CAABEAgAASQIAAE4CAABTAgAAWAIAAF0CAABiAgAAZwIAAGwCAABxAgAAdgIAAHsCAACAAgAAhQIAAIoCAACPAgAAlAIAAJkCAACeAgAAowIAAKgCAACtAgAAsgIAALcCAAC8AgAAwQIAAMYCAADLAgAA0AIAANUCAADaAgAA3wIAAOQCAADpAgAA7gIAAPMCAAA="},"shape":[122],"dtype":"int32","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1052","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1053"}}},"glyph":{"type":"object","name":"Line","id":"p1048","attributes":{"x":{"type":"field","field":"Hgmm"},"y":{"type":"field","field":"alt"},"line_color":"#1f77b4","line_alpha":0.6,"line_width":5}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1049","attributes":{"x":{"type":"field","field":"Hgmm"},"y":{"type":"field","field":"alt"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":5}},"muted_glyph":{"type":"object","name":"Line","id":"p1050","attributes":{"x":{"type":"field","field":"Hgmm"},"y":{"type":"field","field":"alt"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":5}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1013","attributes":{"tools":[{"type":"object","name":"BoxSelectTool","id":"p1036","attributes":{"renderers":"auto","overlay":{"type":"object","name":"BoxAnnotation","id":"p1037","attributes":{"syncable":false,"level":"overlay","visible":false,"editable":true,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"HoverTool","id":"p1038","attributes":{"renderers":"auto","tooltips":[["altitude","@alt{0000} m"],["mm de Hg","@Hgmm{000}"]]}},{"type":"object","name":"ResetTool","id":"p1039"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1029","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1031","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1030"},"axis_label":"Altitude (m)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1032"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1022","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1024","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1023"},"axis_label":"Press\\u00e3o atmosf\\u00e9rica (mm de Hg)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1025"}}}],"center":[{"type":"object","name":"Grid","id":"p1028","attributes":{"axis":{"id":"p1022"}}},{"type":"object","name":"Grid","id":"p1035","attributes":{"dimension":1,"axis":{"id":"p1029"}}},{"type":"object","name":"Label","id":"p1054","attributes":{"text":"$$ Altitude = 44307,69\\\\left(1 - 1,316\\\\cdot10^{-3}\\\\cdot\\\\text{Hg}\\\\right)^{0,190284} $$","x":400,"y":10000}}]}}],"callbacks":{"type":"map"}}}';
                  const render_items = [{"docid":"b85a138c-7c5b-4026-9e32-13f78ecc0cfd","roots":{"p1004":"aac4d2bb-7090-4ccd-98bb-9c7d984e515f"},"root_ids":["p1004"]}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();