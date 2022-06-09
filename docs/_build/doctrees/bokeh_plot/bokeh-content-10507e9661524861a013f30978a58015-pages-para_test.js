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
    
      
      
    
      const element = document.getElementById("7d9bec19-5cd8-4365-9979-7f85b9e3849e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7d9bec19-5cd8-4365-9979-7f85b9e3849e' but no matching script tag was found.")
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
                    
                  const docs_json = '{"509c542d-201d-4d76-a243-f10d57f77e8c":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"1033"},"glyph":{"id":"1034"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1036"},"nonselection_glyph":{"id":"1035"},"view":{"id":"1038"}},"id":"1037","type":"GlyphRenderer"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"text_color":"#E0E0E0","text_font":"Helvetica","text_font_size":"1.15em"},"id":"1039","type":"Title"},{"attributes":{"background_fill_color":"#20262B","below":[{"id":"1011"}],"border_fill_color":"#15191C","center":[{"id":"1014"},{"id":"1018"}],"height":250,"left":[{"id":"1015"}],"max_width":500,"outline_line_alpha":0.25,"outline_line_color":"#E0E0E0","renderers":[{"id":"1037"}],"sizing_mode":"stretch_width","title":{"id":"1039"},"toolbar":{"id":"1026"},"x_range":{"id":"1003"},"x_scale":{"id":"1007"},"y_range":{"id":"1005"},"y_scale":{"id":"1009"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":"#E0E0E0","axis_label_text_font":"Helvetica","axis_label_text_font_size":"1.25em","axis_label_text_font_style":"normal","axis_line_alpha":0,"axis_line_color":"#E0E0E0","coordinates":null,"formatter":{"id":"1042"},"group":null,"major_label_policy":{"id":"1043"},"major_label_text_color":"#E0E0E0","major_label_text_font":"Helvetica","major_label_text_font_size":"1.025em","major_tick_line_alpha":0,"major_tick_line_color":"#E0E0E0","minor_tick_line_alpha":0,"minor_tick_line_color":"#E0E0E0","ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"data":{"x":[1,2,3,4,5],"y":[4,5,5,7,2]},"selected":{"id":"1048"},"selection_policy":{"id":"1047"}},"id":"1033","type":"ColumnDataSource"},{"attributes":{},"id":"1003","type":"DataRange1d"},{"attributes":{},"id":"1047","type":"UnionRenderers"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":"#E0E0E0","axis_label_text_font":"Helvetica","axis_label_text_font_size":"1.25em","axis_label_text_font_style":"normal","axis_line_alpha":0,"axis_line_color":"#E0E0E0","coordinates":null,"formatter":{"id":"1045"},"group":null,"major_label_policy":{"id":"1046"},"major_label_text_color":"#E0E0E0","major_label_text_font":"Helvetica","major_label_text_font_size":"1.025em","major_tick_line_alpha":0,"major_tick_line_color":"#E0E0E0","minor_tick_line_alpha":0,"minor_tick_line_color":"#E0E0E0","ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{},"id":"1048","type":"Selection"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"axis":{"id":"1011"},"coordinates":null,"grid_line_alpha":0.25,"grid_line_color":"#E0E0E0","group":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"axis":{"id":"1015"},"coordinates":null,"dimension":1,"grid_line_alpha":0.25,"grid_line_color":"#E0E0E0","group":null,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1034","type":"Line"},{"attributes":{},"id":"1042","type":"BasicTickFormatter"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Line"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{},"id":"1043","type":"AllLabels"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1025","type":"BoxAnnotation"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{},"id":"1045","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1026","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Line"},{"attributes":{},"id":"1046","type":"AllLabels"},{"attributes":{"source":{"id":"1033"}},"id":"1038","type":"CDSView"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"509c542d-201d-4d76-a243-f10d57f77e8c","root_ids":["1002"],"roots":{"1002":"7d9bec19-5cd8-4365-9979-7f85b9e3849e"}}];
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