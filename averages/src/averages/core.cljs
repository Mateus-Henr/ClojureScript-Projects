(ns averages.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn arithmetic [a b]
  (/ (+ a b) 2.0))
;; cljs.user=> (arithmetic 3 4)
;; 3.5

(defn geometric [a b]
  (.sqrt js/Math (* a b)))
;; cljs.user=> (geometric 5 6)
;; 5.477225575051661

(defn harmonic [a b]
  (/ 2 (+ (/ 1 a) (/ 1 b))))

;; cljs.user=> (harmonic 2 6)
;; 3

;; This function is being used to convert the user's input from String to a number in order to do operations.
;; Make yourself aware that adding up strings will just put the numbers together.
(defn float-value [id]
  (.parseFloat js/window (dom/value (dom/by-id id))))

;; As this is an event handler it needs the event as parameter to get the user values.
(defn calculate-means [evt]
  (dom/set-text! (dom/by-id "arithmetic")
                 (arithmetic (float-value "A") (float-value "B")))
  (dom/set-text! (dom/by-id "geometric")
                 (geometric (float-value "A") (float-value "B")))
  (dom/set-text! (dom/by-id "harmonic")
                 (harmonic (float-value "A") (float-value "B"))))

(ev/listen! (dom/by-id "calculate") "click" calculate-means)