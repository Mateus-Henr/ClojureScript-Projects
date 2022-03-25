(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'gray.core
   :output-to "out/gray.js"
   :output-dir "out"})
