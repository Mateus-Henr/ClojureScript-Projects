(ns phone.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;; This is the main function that formats the numbers given by the user.
(defn dial [area prefix number]
  (str "(" area ")" prefix "-" number))

;; This is a function that defines a function with the purpose of defining predefined values to another function.
;; Summing up when this function is called it expects its own paremeter + the parameters for the other function, in this
;; case the "dial" function.
(defn dial-area [area]
  (partial dial area))

;; Ends up being a function
(def san-jose (dial-area "408"))

