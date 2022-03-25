(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'colors.core
   :output-to "out/colors.js"
   :output-dir "out"})
