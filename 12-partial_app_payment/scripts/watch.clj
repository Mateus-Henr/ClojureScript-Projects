(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'partial_app_payment.core
   :output-to "out/partial_app_payment.js"
   :output-dir "out"})
