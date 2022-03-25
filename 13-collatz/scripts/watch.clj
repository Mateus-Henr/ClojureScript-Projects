(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'collatz.core
   :output-to "out/collatz.js"
   :output-dir "out"})
