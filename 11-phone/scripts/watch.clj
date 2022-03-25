(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'phone.core
   :output-to "out/phone.js"
   :output-dir "out"})
