(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'seq_averages.core
   :output-to "out/seq_averages.js"
   :output-dir "out"})
