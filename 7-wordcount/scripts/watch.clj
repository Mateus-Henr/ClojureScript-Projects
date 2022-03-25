(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'wordcount.core
   :output-to "out/wordcount.js"
   :output-dir "out"})
