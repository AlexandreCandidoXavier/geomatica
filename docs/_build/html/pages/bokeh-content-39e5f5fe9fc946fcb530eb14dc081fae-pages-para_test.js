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
    
      
      
    
      const element = document.getElementById("ee833ea5-2b43-400e-8710-d5df7d0f14a6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ee833ea5-2b43-400e-8710-d5df7d0f14a6' but no matching script tag was found.")
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
                    
                  const docs_json = '{"cad8c0b0-ed08-4a2e-877b-df7339d4f832":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1062","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Line"},{"attributes":{},"id":"1067","type":"UnionRenderers"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{},"id":"1068","type":"Selection"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{},"id":"1063","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1015"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{"callback":null,"tooltips":"E = @x{0.000} m; N = @y{0.000} m"},"id":"1026","type":"HoverTool"},{"attributes":{},"id":"1064","type":"Selection"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Circle"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{"tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1026"}]},"id":"1027","type":"Toolbar"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1064"},"selection_policy":{"id":"1063"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1035"}},"id":"1040","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1035"},"glyph":{"id":"1036"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1038"},"nonselection_glyph":{"id":"1037"},"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1066"},"selection_policy":{"id":"1065"}},"id":"1041","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1025","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Circle"},{"attributes":{"text_alpha":{"value":0.2},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1054","type":"Text"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1042","type":"Line"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"axis_label":"E (m)","coordinates":null,"formatter":{"id":"1049"},"group":null,"major_label_policy":{"id":"1062"},"ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{"format":"0"},"id":"1049","type":"NumeralTickFormatter"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"}],"height":500,"left":[{"id":"1015"}],"max_width":500,"renderers":[{"id":"1039"},{"id":"1045"},{"id":"1055"}],"sizing_mode":"stretch_width","title":{"id":"1057"},"toolbar":{"id":"1027"},"x_range":{"id":"1003"},"x_scale":{"id":"1007"},"y_range":{"id":"1005"},"y_scale":{"id":"1009"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1052","type":"Text"},{"attributes":{"fill_color":{"value":"navy"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Circle"},{"attributes":{},"id":"1065","type":"UnionRenderers"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"1041"},"glyph":{"id":"1042"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1044"},"nonselection_glyph":{"id":"1043"},"view":{"id":"1046"}},"id":"1045","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Line"},{"attributes":{},"id":"1060","type":"AllLabels"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1053","type":"Text"},{"attributes":{},"id":"1066","type":"Selection"},{"attributes":{"data":{"text":["  A","  B","  C","  D","  E"],"x":[268011.61,267817.988,267717.78,267806.587,267868.385],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1068"},"selection_policy":{"id":"1067"}},"id":"1051","type":"ColumnDataSource"},{"attributes":{},"id":"1003","type":"DataRange1d"},{"attributes":{"source":{"id":"1041"}},"id":"1046","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1051"},"glyph":{"id":"1052"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1054"},"nonselection_glyph":{"id":"1053"},"view":{"id":"1056"}},"id":"1055","type":"GlyphRenderer"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{"source":{"id":"1051"}},"id":"1056","type":"CDSView"},{"attributes":{"format":"0"},"id":"1047","type":"NumeralTickFormatter"},{"attributes":{"axis_label":"N (m)","coordinates":null,"formatter":{"id":"1047"},"group":null,"major_label_policy":{"id":"1060"},"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"axis":{"id":"1011"},"coordinates":null,"group":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"coordinates":null,"group":null},"id":"1057","type":"Title"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"cad8c0b0-ed08-4a2e-877b-df7339d4f832","root_ids":["1002"],"roots":{"1002":"ee833ea5-2b43-400e-8710-d5df7d0f14a6"}}];
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