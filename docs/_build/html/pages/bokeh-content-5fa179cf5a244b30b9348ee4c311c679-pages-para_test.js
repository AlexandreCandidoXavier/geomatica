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
    
    
    const element = document.getElementById("d4b28b71-5ad1-47ef-9eb3-6750094db0ea");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd4b28b71-5ad1-47ef-9eb3-6750094db0ea' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
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
                  const docs_json = '{"2cfc9585-3625-473a-b4bc-71726be43971":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"1031"},"glyph":{"id":"1032"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1034"},"nonselection_glyph":{"id":"1033"},"view":{"id":"1036"}},"id":"1035","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null},"id":"1162","type":"Title"},{"attributes":{"axis_label":"N (m)","coordinates":null,"formatter":{"id":"1148"},"group":null,"major_label_policy":{"id":"1169"},"ticker":{"id":"1110"}},"id":"1109","type":"LinearAxis"},{"attributes":{"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1060","type":"Text"},{"attributes":{"format":"0"},"id":"1055","type":"NumeralTickFormatter"},{"attributes":{},"id":"1176","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1059"},"glyph":{"id":"1060"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1062"},"nonselection_glyph":{"id":"1061"},"view":{"id":"1064"}},"id":"1063","type":"GlyphRenderer"},{"attributes":{"child":{"id":"1003"},"title":"Campo"},"id":"1095","type":"Panel"},{"attributes":{},"id":"1177","type":"Selection"},{"attributes":{"end_angle":{"units":"deg","value":212.75527777777776},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":163.62638888888887},"x":{"value":268011.61},"y":{"value":7370836.303}},"id":"1067","type":"Arc"},{"attributes":{"data":{"text":["  O","  A","  B","  C","  D","  E"],"x":[268111.805,268011.61,267817.988,267717.78,267806.587,267868.385],"y":[7370682.471,7370836.303,7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1181"},"selection_policy":{"id":"1180"}},"id":"1059","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1059"}},"id":"1064","type":"CDSView"},{"attributes":{"text_alpha":{"value":0.2},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1062","type":"Text"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1061","type":"Text"},{"attributes":{"data":{},"selected":{"id":"1183"},"selection_policy":{"id":"1182"}},"id":"1065","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"deg","value":212.75527777777776},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":163.62638888888887},"x":{"value":268011.61},"y":{"value":7370836.303}},"id":"1066","type":"Arc"},{"attributes":{"below":[{"id":"1105"}],"center":[{"id":"1108"},{"id":"1112"}],"height":500,"left":[{"id":"1109"}],"match_aspect":true,"max_width":500,"renderers":[{"id":"1128"},{"id":"1134"},{"id":"1140"},{"id":"1146"},{"id":"1156"}],"title":{"id":"1162"},"toolbar":{"id":"1117"},"x_range":{"id":"1097"},"x_scale":{"id":"1101"},"y_range":{"id":"1099"},"y_scale":{"id":"1103"}},"id":"1096","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1193","type":"UnionRenderers"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1175"},"selection_policy":{"id":"1174"}},"id":"1037","type":"ColumnDataSource"},{"attributes":{"data":{"x":[267817.988,267717.78,267806.587,267868.385],"y":[7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1173"},"selection_policy":{"id":"1172"}},"id":"1031","type":"ColumnDataSource"},{"attributes":{},"id":"1194","type":"Selection"},{"attributes":{"end_angle":{"units":"deg","value":423.5547222222222},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":308.9816666666667},"x":{"value":267717.78},"y":{"value":7370692.035}},"id":"1080","type":"Arc"},{"attributes":{},"id":"1178","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1065"},"glyph":{"id":"1066"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1068"},"nonselection_glyph":{"id":"1067"},"view":{"id":"1070"}},"id":"1069","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1065"}},"id":"1070","type":"CDSView"},{"attributes":{"end_angle":{"units":"deg","value":343.62444444444446},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":243.55666666666667},"x":{"value":267817.988},"y":{"value":7370893.267}},"id":"1073","type":"Arc"},{"attributes":{},"id":"1179","type":"Selection"},{"attributes":{"source":{"id":"1083"}},"id":"1088","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"1185"},"selection_policy":{"id":"1184"}},"id":"1071","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"deg","value":488.9797222222222},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":429.06111111111113},"x":{"value":267806.587},"y":{"value":7370582.303}},"id":"1084","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":212.75527777777776},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":163.62638888888887},"x":{"value":268011.61},"y":{"value":7370836.303}},"id":"1068","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":343.62444444444446},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":243.55666666666667},"x":{"value":267817.988},"y":{"value":7370893.267}},"id":"1072","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":609.0591666666667},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":392.7572222222222},"x":{"value":267868.385},"y":{"value":7370744.038}},"id":"1092","type":"Arc"},{"attributes":{},"id":"1103","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1038","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1089"},"glyph":{"id":"1090"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1092"},"nonselection_glyph":{"id":"1091"},"view":{"id":"1094"}},"id":"1093","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1089"}},"id":"1094","type":"CDSView"},{"attributes":{},"id":"1195","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1083"},"glyph":{"id":"1084"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1086"},"nonselection_glyph":{"id":"1085"},"view":{"id":"1088"}},"id":"1087","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"deg","value":343.62444444444446},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":243.55666666666667},"x":{"value":267817.988},"y":{"value":7370893.267}},"id":"1074","type":"Arc"},{"attributes":{},"id":"1196","type":"Selection"},{"attributes":{"source":{"id":"1071"}},"id":"1076","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1071"},"glyph":{"id":"1072"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1074"},"nonselection_glyph":{"id":"1073"},"view":{"id":"1076"}},"id":"1075","type":"GlyphRenderer"},{"attributes":{},"id":"1180","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"1191"},"selection_policy":{"id":"1190"}},"id":"1089","type":"ColumnDataSource"},{"attributes":{"match_aspect":true,"overlay":{"id":"1192"}},"id":"1029","type":"BoxZoomTool"},{"attributes":{},"id":"1181","type":"Selection"},{"attributes":{"source":{"id":"1031"}},"id":"1036","type":"CDSView"},{"attributes":{},"id":"1097","type":"DataRange1d"},{"attributes":{"end_angle":{"units":"deg","value":488.9797222222222},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":429.06111111111113},"x":{"value":267806.587},"y":{"value":7370582.303}},"id":"1086","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":609.0591666666667},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":392.7572222222222},"x":{"value":267868.385},"y":{"value":7370744.038}},"id":"1090","type":"Arc"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1033","type":"Circle"},{"attributes":{"end_angle":{"units":"deg","value":423.5547222222222},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":308.9816666666667},"x":{"value":267717.78},"y":{"value":7370692.035}},"id":"1079","type":"Arc"},{"attributes":{"source":{"id":"1077"}},"id":"1082","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"1077"},"glyph":{"id":"1078"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1080"},"nonselection_glyph":{"id":"1079"},"view":{"id":"1082"}},"id":"1081","type":"GlyphRenderer"},{"attributes":{},"id":"1197","type":"UnionRenderers"},{"attributes":{"end_angle":{"units":"deg","value":609.0591666666667},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":392.7572222222222},"x":{"value":267868.385},"y":{"value":7370744.038}},"id":"1091","type":"Arc"},{"attributes":{"end_angle":{"units":"deg","value":423.5547222222222},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":308.9816666666667},"x":{"value":267717.78},"y":{"value":7370692.035}},"id":"1078","type":"Arc"},{"attributes":{},"id":"1198","type":"Selection"},{"attributes":{"end_angle":{"units":"deg","value":488.9797222222222},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"line_width":{"value":2},"radius":{"value":20},"start_angle":{"units":"deg","value":429.06111111111113},"x":{"value":267806.587},"y":{"value":7370582.303}},"id":"1085","type":"Arc"},{"attributes":{},"id":"1020","type":"PanTool"},{"attributes":{"data":{},"selected":{"id":"1189"},"selection_policy":{"id":"1188"}},"id":"1083","type":"ColumnDataSource"},{"attributes":{},"id":"1182","type":"UnionRenderers"},{"attributes":{},"id":"1099","type":"DataRange1d"},{"attributes":{},"id":"1021","type":"WheelZoomTool"},{"attributes":{"axis_label":"E (m)","coordinates":null,"formatter":{"id":"1150"},"group":null,"major_label_policy":{"id":"1171"},"ticker":{"id":"1106"}},"id":"1105","type":"LinearAxis"},{"attributes":{},"id":"1165","type":"AllLabels"},{"attributes":{},"id":"1183","type":"Selection"},{"attributes":{},"id":"1167","type":"AllLabels"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1044","type":"Line"},{"attributes":{"callback":null,"tooltips":[["DH","aleaxndre"],["Hz","100,208"]]},"id":"1023","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1052","type":"Scatter"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1177"},"selection_policy":{"id":"1176"}},"id":"1043","type":"ColumnDataSource"},{"attributes":{},"id":"1017","type":"BasicTicker"},{"attributes":{"source":{"id":"1037"}},"id":"1042","type":"CDSView"},{"attributes":{"axis":{"id":"1016"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1019","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1039","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1043"},"glyph":{"id":"1044"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1046"},"nonselection_glyph":{"id":"1045"},"view":{"id":"1048"}},"id":"1047","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1046","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1050","type":"Scatter"},{"attributes":{},"id":"1199","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1012"},"coordinates":null,"group":null,"ticker":null},"id":"1015","type":"Grid"},{"attributes":{},"id":"1106","type":"BasicTicker"},{"attributes":{},"id":"1013","type":"BasicTicker"},{"attributes":{"axis":{"id":"1105"},"coordinates":null,"group":null,"ticker":null},"id":"1108","type":"Grid"},{"attributes":{},"id":"1200","type":"Selection"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1010","type":"LinearScale"},{"attributes":{"axis_label":"N (m)","coordinates":null,"formatter":{"id":"1055"},"group":null,"major_label_policy":{"id":"1165"},"ticker":{"id":"1017"}},"id":"1016","type":"LinearAxis"},{"attributes":{"axis":{"id":"1109"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1112","type":"Grid"},{"attributes":{},"id":"1184","type":"UnionRenderers"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{},"id":"1110","type":"BasicTicker"},{"attributes":{"callback":null,"tooltips":[["E","@x{0.000} m"],["N","@y{0.000} m"]]},"id":"1116","type":"HoverTool"},{"attributes":{},"id":"1185","type":"Selection"},{"attributes":{},"id":"1114","type":"WheelZoomTool"},{"attributes":{},"id":"1113","type":"PanTool"},{"attributes":{},"id":"1006","type":"DataRange1d"},{"attributes":{},"id":"1115","type":"ResetTool"},{"attributes":{"tools":[{"id":"1113"},{"id":"1114"},{"id":"1115"},{"id":"1116"},{"id":"1122"}]},"id":"1117","type":"Toolbar"},{"attributes":{"fill_color":{"value":"navy"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1125","type":"Circle"},{"attributes":{},"id":"1201","type":"UnionRenderers"},{"attributes":{"axis_label":"E (m)","coordinates":null,"formatter":{"id":"1057"},"group":null,"major_label_policy":{"id":"1167"},"ticker":{"id":"1013"}},"id":"1012","type":"LinearAxis"},{"attributes":{},"id":"1202","type":"Selection"},{"attributes":{"source":{"id":"1130"}},"id":"1135","type":"CDSView"},{"attributes":{},"id":"1186","type":"UnionRenderers"},{"attributes":{},"id":"1187","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"1130"},"glyph":{"id":"1131"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1133"},"nonselection_glyph":{"id":"1132"},"view":{"id":"1135"}},"id":"1134","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1137","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1145","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1127","type":"Circle"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1198"},"selection_policy":{"id":"1197"}},"id":"1136","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1133","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1132","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1136"},"glyph":{"id":"1137"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1139"},"nonselection_glyph":{"id":"1138"},"view":{"id":"1141"}},"id":"1140","type":"GlyphRenderer"},{"attributes":{},"id":"1169","type":"AllLabels"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1139","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1143","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"1124"},"glyph":{"id":"1125"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1127"},"nonselection_glyph":{"id":"1126"},"view":{"id":"1129"}},"id":"1128","type":"GlyphRenderer"},{"attributes":{},"id":"1188","type":"UnionRenderers"},{"attributes":{"below":[{"id":"1012"}],"center":[{"id":"1015"},{"id":"1019"}],"height":500,"left":[{"id":"1016"}],"match_aspect":true,"max_width":500,"renderers":[{"id":"1035"},{"id":"1041"},{"id":"1047"},{"id":"1053"},{"id":"1063"},{"id":"1069"},{"id":"1075"},{"id":"1081"},{"id":"1087"},{"id":"1093"}],"title":{"id":"1160"},"toolbar":{"id":"1024"},"x_range":{"id":"1004"},"x_scale":{"id":"1008"},"y_range":{"id":"1006"},"y_scale":{"id":"1010"}},"id":"1003","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1136"}},"id":"1141","type":"CDSView"},{"attributes":{},"id":"1171","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1203","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1138","type":"Line"},{"attributes":{"source":{"id":"1142"}},"id":"1147","type":"CDSView"},{"attributes":{},"id":"1189","type":"Selection"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1200"},"selection_policy":{"id":"1199"}},"id":"1142","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null},"id":"1160","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"1142"},"glyph":{"id":"1143"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1145"},"nonselection_glyph":{"id":"1144"},"view":{"id":"1147"}},"id":"1146","type":"GlyphRenderer"},{"attributes":{"format":"0"},"id":"1150","type":"NumeralTickFormatter"},{"attributes":{},"id":"1172","type":"UnionRenderers"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1131","type":"Line"},{"attributes":{},"id":"1173","type":"Selection"},{"attributes":{"data":{"x":[268011.61,267817.988,267717.78,267806.587,267868.385,268011.61],"y":[7370836.303,7370893.267,7370692.035,7370582.303,7370744.038,7370836.303]},"selected":{"id":"1196"},"selection_policy":{"id":"1195"}},"id":"1130","type":"ColumnDataSource"},{"attributes":{"data":{"x":[267817.988,267717.78,267806.587,267868.385],"y":[7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1194"},"selection_policy":{"id":"1193"}},"id":"1124","type":"ColumnDataSource"},{"attributes":{},"id":"1190","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1144","type":"Scatter"},{"attributes":{"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1153","type":"Text"},{"attributes":{},"id":"1191","type":"Selection"},{"attributes":{"format":"0"},"id":"1148","type":"NumeralTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"1152"},"glyph":{"id":"1153"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1155"},"nonselection_glyph":{"id":"1154"},"view":{"id":"1157"}},"id":"1156","type":"GlyphRenderer"},{"attributes":{},"id":"1022","type":"ResetTool"},{"attributes":{"tools":[{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1029"}]},"id":"1024","type":"Toolbar"},{"attributes":{"fill_color":{"value":"navy"},"hatch_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1032","type":"Circle"},{"attributes":{"child":{"id":"1096"},"title":"Poligonal"},"id":"1158","type":"Panel"},{"attributes":{"coordinates":null,"data_source":{"id":"1037"},"glyph":{"id":"1038"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1040"},"nonselection_glyph":{"id":"1039"},"view":{"id":"1042"}},"id":"1041","type":"GlyphRenderer"},{"attributes":{"match_aspect":true,"overlay":{"id":"1203"}},"id":"1122","type":"BoxZoomTool"},{"attributes":{},"id":"1101","type":"LinearScale"},{"attributes":{"source":{"id":"1124"}},"id":"1129","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"navy","line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1040","type":"Line"},{"attributes":{},"id":"1174","type":"UnionRenderers"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1154","type":"Text"},{"attributes":{"text_alpha":{"value":0.2},"text_baseline":{"value":"middle"},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1155","type":"Text"},{"attributes":{},"id":"1175","type":"Selection"},{"attributes":{"source":{"id":"1152"}},"id":"1157","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"1187"},"selection_policy":{"id":"1186"}},"id":"1077","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1043"}},"id":"1048","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1192","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.2},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1034","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"navy","line_dash":[6],"line_width":4,"x":{"field":"x"},"y":{"field":"y"}},"id":"1045","type":"Line"},{"attributes":{"data":{"text":["  O","  A","  B","  C","  D","  E"],"x":[268111.805,268011.61,267817.988,267717.78,267806.587,267868.385],"y":[7370682.471,7370836.303,7370893.267,7370692.035,7370582.303,7370744.038]},"selected":{"id":"1202"},"selection_policy":{"id":"1201"}},"id":"1152","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1049"}},"id":"1054","type":"CDSView"},{"attributes":{"data":{"x":[268111.805,268011.61],"y":[7370682.471,7370836.303]},"selected":{"id":"1179"},"selection_policy":{"id":"1178"}},"id":"1049","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"navy"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"size":{"value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1126","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"1049"},"glyph":{"id":"1050"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1052"},"nonselection_glyph":{"id":"1051"},"view":{"id":"1054"}},"id":"1053","type":"GlyphRenderer"},{"attributes":{"format":"0"},"id":"1057","type":"NumeralTickFormatter"},{"attributes":{"tabs":[{"id":"1095"},{"id":"1158"}]},"id":"1159","type":"Tabs"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"navy"},"line_alpha":{"value":0.1},"line_color":{"value":"navy"},"marker":{"value":"triangle"},"size":{"value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"1051","type":"Scatter"}],"root_ids":["1159"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"2cfc9585-3625-473a-b4bc-71726be43971","root_ids":["1159"],"roots":{"1159":"d4b28b71-5ad1-47ef-9eb3-6750094db0ea"}}];
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