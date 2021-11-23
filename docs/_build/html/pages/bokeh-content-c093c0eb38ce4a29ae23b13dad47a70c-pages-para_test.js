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
    
      
      
    
      const element = document.getElementById("46063cac-e72c-4adb-bb5f-a9b0cea9599f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '46063cac-e72c-4adb-bb5f-a9b0cea9599f' but no matching script tag was found.")
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
                    
                  const docs_json = '{"cf55d25b-f752-4093-9ac0-cef0921f9624":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"formatter":{"id":"1052"},"group":null,"major_label_policy":{"id":"1053"},"ticker":{"id":"1014"}},"id":"1013","type":"LinearAxis"},{"attributes":{"coordinates":null,"formatter":{"id":"1049"},"group":null,"major_label_policy":{"id":"1050"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{"data":{"fill_color":["#ffebff","#ffc2ff","#ff6bff","#fff0ff","#ff5eff","#ffe0ff","#ffb5ff","#ffccff","#ff42ff","#ff59ff","#ff78ff","#ff4aff","#ff73ff","#ff66ff","#fff2ff","#ff38ff","#ffa3ff","#ff47ff","#fffaff","#ff12ff","#ff40ff","#ffb8ff","#ff82ff","#ff17ff","#ffb2ff","#ffc7ff"],"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"y":[92,76,42,94,37,88,71,80,26,35,47,29,45,40,95,22,64,28,98,7,25,72,51,9,70,78]},"selected":{"id":"1057"},"selection_policy":{"id":"1056"}},"id":"1041","type":"ColumnDataSource"},{"attributes":{},"id":"1057","type":"Selection"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{},"id":"1014","type":"BasicTicker"},{"attributes":{},"id":"1049","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1035"}},"id":"1040","type":"CDSView"},{"attributes":{},"id":"1050","type":"AllLabels"},{"attributes":{"axis":{"id":"1013"},"coordinates":null,"group":null,"ticker":null},"id":"1016","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"1037","type":"Line"},{"attributes":{},"id":"1052","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Line"},{"attributes":{},"id":"1026","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"blue"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1043","type":"Circle"},{"attributes":{},"id":"1053","type":"AllLabels"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"y":[92,76,42,94,37,88,71,80,26,35,47,29,45,40,95,22,64,28,98,7,25,72,51,9,70,78]},"selected":{"id":"1055"},"selection_policy":{"id":"1054"}},"id":"1035","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"Vectorized colors example"},"id":"1003","type":"Title"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{"axis":{"id":"1017"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"1035"},"glyph":{"id":"1036"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1038"},"nonselection_glyph":{"id":"1037"},"view":{"id":"1040"}},"id":"1039","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"value":"blue"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1042","type":"Circle"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{},"id":"1054","type":"UnionRenderers"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{},"id":"1024","type":"SaveTool"},{"attributes":{"source":{"id":"1041"}},"id":"1046","type":"CDSView"},{"attributes":{"overlay":{"id":"1027"}},"id":"1023","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1027","type":"BoxAnnotation"},{"attributes":{},"id":"1055","type":"Selection"},{"attributes":{},"id":"1025","type":"ResetTool"},{"attributes":{"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1025"},{"id":"1026"}]},"id":"1028","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"1041"},"glyph":{"id":"1042"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1044"},"nonselection_glyph":{"id":"1043"},"view":{"id":"1046"}},"id":"1045","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"blue"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Circle"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"height":250,"left":[{"id":"1017"}],"max_width":500,"renderers":[{"id":"1039"},{"id":"1045"}],"sizing_mode":"stretch_width","title":{"id":"1003"},"toolbar":{"id":"1028"},"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1056","type":"UnionRenderers"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"1036","type":"Line"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"cf55d25b-f752-4093-9ac0-cef0921f9624","root_ids":["1002"],"roots":{"1002":"46063cac-e72c-4adb-bb5f-a9b0cea9599f"}}];
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