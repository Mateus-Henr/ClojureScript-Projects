(ns conditionals.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
         (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; The result is the first expression that evaluates to true. It's equivalent to the if/else statement of JS.
(defn status [age]
  (cond
    (< age 18) "Can't vote or drink."                       ;; If this condition is true so it's the result of the expression.
    (< age 21) "Can vote; can't drink"                      ;; If the first isn't true this one is gonna be checked and so on.
    (< age 65) "Can vote and drink"
    :else "With age comes wisdom"))

;; conditionals.core=> (status 3)
;; "Can't vote or drink."
;; conditionals.core=> (status 16)
;; "Can't vote or drink."
;; conditionals.core=> (status 30)
;; "Can vote and drink"
;; conditionals.core=> (status 22)
;; "Can vote and drink"
;; conditionals.core=> (status 80)
;; "With age comes wisdom"
