(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'try_catch.core
   :output-to "out/try_catch.js"
   :output-dir "out"})
