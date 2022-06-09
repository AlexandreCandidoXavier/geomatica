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
    
      
      
    
      const element = document.getElementById("609bf2c8-b92f-4440-bd72-a3e53c1393ca");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '609bf2c8-b92f-4440-bd72-a3e53c1393ca' but no matching script tag was found.")
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
                    
                  const docs_json = '{"54c2c5d5-b2ae-482f-8aae-af4734e9e489":{"defs":[],"roots":{"references":[{"attributes":{"callback":null,"tooltips":"@point E = @x{7.4f} m; N = @y{9.4f} m"},"id":"1002","type":"HoverTool"},{"attributes":{},"id":"1054","type":"UnionRenderers"},{"attributes":{},"id":"1055","type":"Selection"},{"attributes":{},"id":"1050","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1025","type":"Circle"},{"attributes":{},"id":"1051","type":"Selection"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"1028"},"glyph":{"id":"1029"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1031"},"nonselection_glyph":{"id":"1030"},"view":{"id":"1033"}},"id":"1032","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"}],"height":500,"left":[{"id":"1016"}],"max_width":500,"renderers":[{"id":"1026"},{"id":"1032"},{"id":"1042"}],"sizing_mode":"stretch_width","title":{"id":"1044"},"toolbar":{"id":"1020"},"toolbar_location":null,"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1003","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1031","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1022"},"glyph":{"id":"1023"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1025"},"nonselection_glyph":{"id":"1024"},"view":{"id":"1027"}},"id":"1026","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"1034"},"group":null,"major_label_policy":{"id":"1047"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"coordinates":null,"formatter":{"id":"1036"},"group":null,"major_label_policy":{"id":"1049"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1053"},"selection_policy":{"id":"1052"}},"id":"1028","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1022"}},"id":"1027","type":"CDSView"},{"attributes":{"source":{"id":"1028"}},"id":"1033","type":"CDSView"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1029","type":"Line"},{"attributes":{"axis":{"id":"1012"},"coordinates":null,"group":null,"ticker":null},"id":"1015","type":"Grid"},{"attributes":{"data":{"text":["  A","  B","  C","  D","  D","  A"],"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1055"},"selection_policy":{"id":"1054"}},"id":"1038","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1030","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1038"},"glyph":{"id":"1039"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1041"},"nonselection_glyph":{"id":"1040"},"view":{"id":"1043"}},"id":"1042","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1038"}},"id":"1043","type":"CDSView"},{"attributes":{},"id":"1052","type":"UnionRenderers"},{"attributes":{"format":"0"},"id":"1036","type":"NumeralTickFormatter"},{"attributes":{"format":"0"},"id":"1034","type":"NumeralTickFormatter"},{"attributes":{},"id":"1053","type":"Selection"},{"attributes":{"text_align":{"field":"above"},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Text"},{"attributes":{"text_align":{"field":"above"},"text_alpha":{"value":0.1},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1040","type":"Text"},{"attributes":{"coordinates":null,"group":null},"id":"1044","type":"Title"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"axis":{"id":"1016"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"fill_color":{"value":"navy"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1023","type":"Circle"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{"text_align":{"field":"above"},"text_alpha":{"value":0.2},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1041","type":"Text"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1051"},"selection_policy":{"id":"1050"}},"id":"1022","type":"ColumnDataSource"},{"attributes":{"tools":[{"id":"1002"}]},"id":"1020","type":"Toolbar"},{"attributes":{},"id":"1049","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1024","type":"Circle"}],"root_ids":["1003"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"54c2c5d5-b2ae-482f-8aae-af4734e9e489","root_ids":["1003"],"roots":{"1003":"609bf2c8-b92f-4440-bd72-a3e53c1393ca"}}];
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