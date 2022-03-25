(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'averages.core
   :output-to "out/averages.js"
   :output-dir "out"})
