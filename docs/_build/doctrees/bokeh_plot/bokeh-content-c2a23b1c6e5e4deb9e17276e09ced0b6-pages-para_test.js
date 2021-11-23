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
    
      
      
    
      const element = document.getElementById("78405610-e3ff-4812-8873-5f4c949dc62a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '78405610-e3ff-4812-8873-5f4c949dc62a' but no matching script tag was found.")
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
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"6f880dc8-604e-4037-ab01-6805180ee142":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"1045"},{"id":"1046"},{"id":"1047"}]},"id":"1048","type":"Column"},{"attributes":{"children":[{"id":"1042"}]},"id":"1046","type":"Row"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"1052"},"group":null,"major_label_policy":{"id":"1053"},"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"coordinates":null,"formatter":{"id":"1055"},"group":null,"major_label_policy":{"id":"1056"},"ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{"high":60,"js_property_callbacks":{"change:value":[{"id":"1041"}]},"low":0,"step":5,"title":"Circle size","value":30,"value_throttled":30,"width":200},"id":"1040","type":"Spinner"},{"attributes":{"children":[{"id":"1039"},{"id":"1040"}]},"id":"1045","type":"Row"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{},"id":"1057","type":"UnionRenderers"},{"attributes":{"args":{"other":{"id":"1034"}},"code":"other.size = this.value"},"id":"1041","type":"CustomJS"},{"attributes":{"children":[{"id":"1002"}]},"id":"1047","type":"Row"},{"attributes":{"axis":{"id":"1011"},"coordinates":null,"group":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#21a7df"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Circle"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{},"id":"1058","type":"Selection"},{"attributes":{"args":{"other":{"id":"1003"}},"code":"other.start = this.value[0]"},"id":"1043","type":"CustomJS"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"axis":{"id":"1015"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"}],"height":250,"left":[{"id":"1015"}],"renderers":[{"id":"1037"}],"title":{"id":"1049"},"toolbar":{"id":"1026"},"width":500,"x_range":{"id":"1003"},"x_scale":{"id":"1007"},"y_range":{"id":"1005"},"y_scale":{"id":"1009"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"1033"},"glyph":{"id":"1034"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1036"},"nonselection_glyph":{"id":"1035"},"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1,2,3,4,5,6,7,8,9,10],"y":[4,5,5,7,2,6,4,9,1,3]},"selected":{"id":"1058"},"selection_policy":{"id":"1057"}},"id":"1033","type":"ColumnDataSource"},{"attributes":{},"id":"1052","type":"BasicTickFormatter"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{"fill_color":{"value":"#21a7df"},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"1034","type":"Circle"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{},"id":"1053","type":"AllLabels"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#21a7df"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Circle"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{"end":9,"start":1},"id":"1003","type":"Range1d"},{"attributes":{},"id":"1055","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1025","type":"BoxAnnotation"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"end":10,"js_property_callbacks":{"change:value":[{"id":"1043"},{"id":"1044"}]},"start":0,"title":"Adjust x-axis range","value":[1,9]},"id":"1042","type":"RangeSlider"},{"attributes":{"coordinates":null,"group":null},"id":"1049","type":"Title"},{"attributes":{"tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1026","type":"Toolbar"},{"attributes":{"source":{"id":"1033"}},"id":"1038","type":"CDSView"},{"attributes":{},"id":"1056","type":"AllLabels"},{"attributes":{"args":{"other":{"id":"1003"}},"code":"other.end = this.value[1]"},"id":"1044","type":"CustomJS"},{"attributes":{"height":30,"text":"\\n          &lt;p&gt;Select the circle&#x27;s size using this control element:&lt;/p&gt;\\n          ","width":200},"id":"1039","type":"Div"},{"attributes":{},"id":"1007","type":"LinearScale"}],"root_ids":["1048"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"6f880dc8-604e-4037-ab01-6805180ee142","root_ids":["1048"],"roots":{"1048":"78405610-e3ff-4812-8873-5f4c949dc62a"}}];
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