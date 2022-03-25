(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'arity.core
   :output-to "out/arity.js"
   :output-dir "out"})
