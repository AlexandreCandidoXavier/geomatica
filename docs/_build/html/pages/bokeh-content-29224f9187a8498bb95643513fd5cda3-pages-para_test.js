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
    
      
      
    
      const element = document.getElementById("95962caa-f8fc-477d-8e88-a66b2ee3c8e2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '95962caa-f8fc-477d-8e88-a66b2ee3c8e2' but no matching script tag was found.")
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
                    
                  const docs_json = '{"cbf5f246-9faa-4337-90e2-309996526727":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1173","type":"UnionRenderers"},{"attributes":{},"id":"1191","type":"UnionRenderers"},{"attributes":{},"id":"1174","type":"Selection"},{"attributes":{},"id":"1192","type":"Selection"},{"attributes":{},"id":"1198","type":"UnionRenderers"},{"attributes":{},"id":"1199","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1034","type":"Circle"},{"attributes":{"below":[{"id":"1013"}],"center":[{"id":"1016"},{"id":"1020"}],"height":500,"left":[{"id":"1017"}],"match_aspect":true,"max_width":500,"renderers":[{"id":"1036"},{"id":"1042"},{"id":"1048"},{"id":"1054"},{"id":"1064"},{"id":"1070"},{"id":"1076"},{"id":"1082"},{"id":"1088"},{"id":"1094"}],"title":{"id":"1161"},"toolbar":{"id":"1025"},"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1004","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[267817.988,267717.78,267806.587,267868.385],"y":[7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1174"},"selection_policy":{"id":"1173"}},"id":"1032","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1032"}},"id":"1037","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Circle"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1176"},"selection_policy":{"id":"1175"}},"id":"1038","type":"ColumnDataSource"},{"attributes":{},"id":"1200","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1193","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"navy"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1033","type":"Circle"},{"attributes":{},"id":"1175","type":"UnionRenderers"},{"attributes":{},"id":"1201","type":"Selection"},{"attributes":{},"id":"1176","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"1044"},"glyph":{"id":"1045"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1047"},"nonselection_glyph":{"id":"1046"},"view":{"id":"1049"}},"id":"1048","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"},{"id":"1030"}]},"id":"1025","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Line"},{"attributes":{"source":{"id":"1038"}},"id":"1043","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1038"},"glyph":{"id":"1039"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1041"},"nonselection_glyph":{"id":"1040"},"view":{"id":"1043"}},"id":"1042","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1045","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1032"},"glyph":{"id":"1033"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1035"},"nonselection_glyph":{"id":"1034"},"view":{"id":"1037"}},"id":"1036","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1046","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1041","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1040","type":"Line"},{"attributes":{},"id":"1177","type":"UnionRenderers"},{"attributes":{"source":{"id":"1044"}},"id":"1049","type":"CDSView"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1180"},"selection_policy":{"id":"1179"}},"id":"1050","type":"ColumnDataSource"},{"attributes":{},"id":"1202","type":"UnionRenderers"},{"attributes":{"source":{"id":"1050"}},"id":"1055","type":"CDSView"},{"attributes":{},"id":"1178","type":"Selection"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1178"},"selection_policy":{"id":"1177"}},"id":"1044","type":"ColumnDataSource"},{"attributes":{},"id":"1203","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1047","type":"Line"},{"attributes":{"source":{"id":"1060"}},"id":"1065","type":"CDSView"},{"attributes":{"fill_color":{"value":"white"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1051","type":"Scatter"},{"attributes":{},"id":"1194","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1053","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1052","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"1050"},"glyph":{"id":"1051"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1053"},"nonselection_glyph":{"id":"1052"},"view":{"id":"1055"}},"id":"1054","type":"GlyphRenderer"},{"attributes":{},"id":"1195","type":"Selection"},{"attributes":{"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1061","type":"Text"},{"attributes":{"format":"0"},"id":"1056","type":"NumeralTickFormatter"},{"attributes":{"data":{},"selected":{"id":"1188"},"selection_policy":{"id":"1187"}},"id":"1078","type":"ColumnDataSource"},{"attributes":{"format":"0"},"id":"1058","type":"NumeralTickFormatter"},{"attributes":{},"id":"1179","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1060"},"glyph":{"id":"1061"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1063"},"nonselection_glyph":{"id":"1062"},"view":{"id":"1065"}},"id":"1064","type":"GlyphRenderer"},{"attributes":{"match_aspect":true,"overlay":{"id":"1193"}},"id":"1030","type":"BoxZoomTool"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1062","type":"Text"},{"attributes":{},"id":"1180","type":"Selection"},{"attributes":{"source":{"id":"1072"}},"id":"1077","type":"CDSView"},{"attributes":{"data":{"text":["  O","  A","  B","  C","  D","  E"],"x":[268111.805,268011.61,267817.988,267717.78,267806.587,267868.385],"y":[7370682.471,7370836.303,7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1182"},"selection_policy":{"id":"1181"}},"id":"1060","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1204","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1066"}},"id":"1071","type":"CDSView"},{"attributes":{"end_angle":{"units":"deg","value":343.62444444444446},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":243.55666666666667},"x":{"value":267817.988},"y":{"value":7370893.267}},"id":"1075","type":"Arc"},{"attributes":{"text_alpha":{"value":0.2},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1063","type":"Text"},{"attributes":{"end_angle":{"units":"deg","value":212.75527777777776},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":163.62638888888887},"x":{"value":268011.61},"y":{"value":7370836.303}},"id":"1067","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":212.75527777777776},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":163.62638888888887},"x":{"value":268011.61},"y":{"value":7370836.303}},"id":"1068","type":"Arc"},{"attributes":{},"id":"1196","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1184"},"selection_policy":{"id":"1183"}},"id":"1066","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"1066"},"glyph":{"id":"1067"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1069"},"nonselection_glyph":{"id":"1068"},"view":{"id":"1071"}},"id":"1070","type":"GlyphRenderer"},{"attributes":{},"id":"1197","type":"Selection"},{"attributes":{"child":{"id":"1004"},"title":"Campo"},"id":"1096","type":"Panel"},{"attributes":{"end_angle":{"units":"deg","value":343.62444444444446},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":243.55666666666667},"x":{"value":267817.988},"y":{"value":7370893.267}},"id":"1074","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":423.5547222222222},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":308.9816666666667},"x":{"value":267717.78},"y":{"value":7370692.035}},"id":"1079","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":212.75527777777776},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":163.62638888888887},"x":{"value":268011.61},"y":{"value":7370836.303}},"id":"1069","type":"Arc"},{"attributes":{"coordinates":null,"data_source":{"id":"1072"},"glyph":{"id":"1073"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1075"},"nonselection_glyph":{"id":"1074"},"view":{"id":"1077"}},"id":"1076","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"1186"},"selection_policy":{"id":"1185"}},"id":"1072","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"deg","value":343.62444444444446},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":243.55666666666667},"x":{"value":267817.988},"y":{"value":7370893.267}},"id":"1073","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":423.5547222222222},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":308.9816666666667},"x":{"value":267717.78},"y":{"value":7370692.035}},"id":"1081","type":"Arc"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1201"},"selection_policy":{"id":"1200"}},"id":"1143","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1144","type":"Scatter"},{"attributes":{},"id":"1181","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1190"},"selection_policy":{"id":"1189"}},"id":"1084","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1146","type":"Scatter"},{"attributes":{"end_angle":{"units":"deg","value":423.5547222222222},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":308.9816666666667},"x":{"value":267717.78},"y":{"value":7370692.035}},"id":"1080","type":"Arc"},{"attributes":{},"id":"1182","type":"Selection"},{"attributes":{"end_angle":{"units":"deg","value":488.9797222222222},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":429.06111111111113},"x":{"value":267806.587},"y":{"value":7370582.303}},"id":"1085","type":"Arc"},{"attributes":{"source":{"id":"1143"}},"id":"1148","type":"CDSView"},{"attributes":{"end_angle":{"units":"deg","value":488.9797222222222},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":429.06111111111113},"x":{"value":267806.587},"y":{"value":7370582.303}},"id":"1086","type":"Arc"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1145","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"1143"},"glyph":{"id":"1144"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1146"},"nonselection_glyph":{"id":"1145"},"view":{"id":"1148"}},"id":"1147","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"deg","value":488.9797222222222},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":429.06111111111113},"x":{"value":267806.587},"y":{"value":7370582.303}},"id":"1087","type":"Arc"},{"attributes":{"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1154","type":"Text"},{"attributes":{"coordinates":null,"data_source":{"id":"1078"},"glyph":{"id":"1079"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1081"},"nonselection_glyph":{"id":"1080"},"view":{"id":"1083"}},"id":"1082","type":"GlyphRenderer"},{"attributes":{"format":"0"},"id":"1149","type":"NumeralTickFormatter"},{"attributes":{"source":{"id":"1078"}},"id":"1083","type":"CDSView"},{"attributes":{},"id":"1183","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1192"},"selection_policy":{"id":"1191"}},"id":"1090","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"deg","value":609.0591666666667},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":392.7572222222222},"x":{"value":267868.385},"y":{"value":7370744.038}},"id":"1091","type":"Arc"},{"attributes":{"format":"0"},"id":"1151","type":"NumeralTickFormatter"},{"attributes":{"end_angle":{"units":"deg","value":609.0591666666667},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":392.7572222222222},"x":{"value":267868.385},"y":{"value":7370744.038}},"id":"1092","type":"Arc"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"1153"},"glyph":{"id":"1154"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1156"},"nonselection_glyph":{"id":"1155"},"view":{"id":"1158"}},"id":"1157","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"deg","value":609.0591666666667},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":392.7572222222222},"x":{"value":267868.385},"y":{"value":7370744.038}},"id":"1093","type":"Arc"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"1084"},"glyph":{"id":"1085"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1087"},"nonselection_glyph":{"id":"1086"},"view":{"id":"1089"}},"id":"1088","type":"GlyphRenderer"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1155","type":"Text"},{"attributes":{"source":{"id":"1084"}},"id":"1089","type":"CDSView"},{"attributes":{},"id":"1166","type":"AllLabels"},{"attributes":{},"id":"1098","type":"DataRange1d"},{"attributes":{"data":{"text":["  O","  A","  B","  C","  D","  E"],"x":[268111.805,268011.61,267817.988,267717.78,267806.587,267868.385],"y":[7370682.471,7370836.303,7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1203"},"selection_policy":{"id":"1202"}},"id":"1153","type":"ColumnDataSource"},{"attributes":{"match_aspect":true,"overlay":{"id":"1204"}},"id":"1123","type":"BoxZoomTool"},{"attributes":{"source":{"id":"1153"}},"id":"1158","type":"CDSView"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{"text_alpha":{"value":0.2},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1156","type":"Text"},{"attributes":{"child":{"id":"1097"},"title":"Poligonal"},"id":"1159","type":"Panel"},{"attributes":{"axis_label":"N (m)","coordinates":null,"formatter":{"id":"1056"},"group":null,"major_label_policy":{"id":"1166"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{},"id":"1100","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"1090"},"glyph":{"id":"1091"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1093"},"nonselection_glyph":{"id":"1092"},"view":{"id":"1095"}},"id":"1094","type":"GlyphRenderer"},{"attributes":{"axis_label":"E (m)","coordinates":null,"formatter":{"id":"1058"},"group":null,"major_label_policy":{"id":"1168"},"ticker":{"id":"1014"}},"id":"1013","type":"LinearAxis"},{"attributes":{},"id":"1168","type":"AllLabels"},{"attributes":{"source":{"id":"1090"}},"id":"1095","type":"CDSView"},{"attributes":{},"id":"1184","type":"Selection"},{"attributes":{"tabs":[{"id":"1096"},{"id":"1159"}]},"id":"1160","type":"Tabs"},{"attributes":{"below":[{"id":"1106"}],"center":[{"id":"1109"},{"id":"1113"}],"height":500,"left":[{"id":"1110"}],"match_aspect":true,"max_width":500,"renderers":[{"id":"1129"},{"id":"1135"},{"id":"1141"},{"id":"1147"},{"id":"1157"}],"title":{"id":"1163"},"toolbar":{"id":"1118"},"x_range":{"id":"1098"},"x_scale":{"id":"1102"},"y_range":{"id":"1100"},"y_scale":{"id":"1104"}},"id":"1097","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1104","type":"LinearScale"},{"attributes":{"axis_label":"E (m)","coordinates":null,"formatter":{"id":"1151"},"group":null,"major_label_policy":{"id":"1172"},"ticker":{"id":"1107"}},"id":"1106","type":"LinearAxis"},{"attributes":{"axis_label":"N (m)","coordinates":null,"formatter":{"id":"1149"},"group":null,"major_label_policy":{"id":"1170"},"ticker":{"id":"1111"}},"id":"1110","type":"LinearAxis"},{"attributes":{},"id":"1102","type":"LinearScale"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{},"id":"1107","type":"BasicTicker"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"axis":{"id":"1106"},"coordinates":null,"group":null,"ticker":null},"id":"1109","type":"Grid"},{"attributes":{"axis":{"id":"1013"},"coordinates":null,"group":null,"ticker":null},"id":"1016","type":"Grid"},{"attributes":{},"id":"1014","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null},"id":"1161","type":"Title"},{"attributes":{"axis":{"id":"1110"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1113","type":"Grid"},{"attributes":{"axis":{"id":"1017"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{},"id":"1111","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["E","@x{0.000} m"],["N","@y{0.000} m"]]},"id":"1117","type":"HoverTool"},{"attributes":{},"id":"1185","type":"UnionRenderers"},{"attributes":{"callback":null,"tooltips":[["DH","aleaxndre"],["Hz","100,208"]]},"id":"1024","type":"HoverTool"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{},"id":"1115","type":"WheelZoomTool"},{"attributes":{},"id":"1022","type":"WheelZoomTool"},{"attributes":{},"id":"1114","type":"PanTool"},{"attributes":{},"id":"1186","type":"Selection"},{"attributes":{},"id":"1116","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null},"id":"1163","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1127","type":"Circle"},{"attributes":{"fill_color":{"value":"navy"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1126","type":"Circle"},{"attributes":{"tools":[{"id":"1114"},{"id":"1115"},{"id":"1116"},{"id":"1117"},{"id":"1123"}]},"id":"1118","type":"Toolbar"},{"attributes":{},"id":"1187","type":"UnionRenderers"},{"attributes":{},"id":"1188","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"1137"},"glyph":{"id":"1138"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1140"},"nonselection_glyph":{"id":"1139"},"view":{"id":"1142"}},"id":"1141","type":"GlyphRenderer"},{"attributes":{"data":{"x":[267817.988,267717.78,267806.587,267868.385],"y":[7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1195"},"selection_policy":{"id":"1194"}},"id":"1125","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1125"}},"id":"1130","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1131"},"glyph":{"id":"1132"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1134"},"nonselection_glyph":{"id":"1133"},"view":{"id":"1136"}},"id":"1135","type":"GlyphRenderer"},{"attributes":{},"id":"1170","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"1125"},"glyph":{"id":"1126"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1128"},"nonselection_glyph":{"id":"1127"},"view":{"id":"1130"}},"id":"1129","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1128","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1133","type":"Line"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1197"},"selection_policy":{"id":"1196"}},"id":"1131","type":"ColumnDataSource"},{"attributes":{},"id":"1172","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1139","type":"Line"},{"attributes":{},"id":"1189","type":"UnionRenderers"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1132","type":"Line"},{"attributes":{},"id":"1021","type":"PanTool"},{"attributes":{},"id":"1190","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1134","type":"Line"},{"attributes":{"source":{"id":"1137"}},"id":"1142","type":"CDSView"},{"attributes":{"source":{"id":"1131"}},"id":"1136","type":"CDSView"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1199"},"selection_policy":{"id":"1198"}},"id":"1137","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1138","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1140","type":"Line"}],"root_ids":["1160"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"cbf5f246-9faa-4337-90e2-309996526727","root_ids":["1160"],"roots":{"1160":"95962caa-f8fc-477d-8e88-a66b2ee3c8e2"}}];
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