(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'basicstats.core
   :output-to "out/basicstats.js"
   :output-dir "out"})
