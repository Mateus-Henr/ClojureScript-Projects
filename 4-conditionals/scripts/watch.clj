(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'conditionals.core
   :output-to "out/conditionals.js"
   :output-dir "out"})
