(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'lazyseq.core
   :output-to "out/lazyseq.js"
   :output-dir "out"})
