(ns testing.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
         (repl/connect "http://localhost:9000/repl"))

;; Prints the web console
(enable-console-print!)

;; Some output
;; First item is a function and the second item is the function arguments.
(println "Hello world!")
