(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'discount.core
   :output-to "out/discount.js"
   :output-dir "out"})
