(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'destructuring.core
   :output-to "out/destructuring.js"
   :output-dir "out"})
