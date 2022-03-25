(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'payment.core
   :output-to "out/payment.js"
   :output-dir "out"})
