(ns testing.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def full-name ["Maria" "Linda" "Fulano"])

;; Undestructured version
(let [given (first full-name)
      middle (second full-name)
      surname (last full-name)]
  (println (str surname ", " given " " middle)))

;; Positioning Destructuring
(let [[given middle surname] full-name]
  (println (str surname ", " given " " middle)))

;; Positioning Destructuring (Avoiding values)
(let [[given middle surname] full-name]
  (println (str surname ", " given " " middle)))

;; Undestructured version
(let [given (first full-name)
      others (rest full-name)]
  (println "Given name: " given)
  (println "The others: " others))

;; Positioning Destructuring
(let [[given & others] full-name]
  (println "Given name: " given)
  (println "The others: " others))

;; Complex Data

;; Vectors inside a vector
(def endpoints [[5, 3] [7, 9]])

(let [ [[x1 y1] [x2 y2]] endpoints]
  (println (list x1 y1 x2 y2)))

;; Destructuring a map
(def inventory {:item "pen" :price 3.49 :qty 50})

(let [ {item :item price :price qty :qty} inventory]
  (println (list item price qty)))

;; Saving even more typing
(let [ {:keys [item price qty]} inventory]
  (println (list item price qty)))

;; Saving variable
;; It destructures the values, so "a" becomes 1, "b" becomes 2 and so on..
;; The "entire" symbol will be bind to the entire vector
(let [[a b c :as entire] [1 2 3 4 5]]
  (println (list a b c 1000 entire)))

;; Using on maps
(let [{:keys [item price] :as whole-map} inventory]
  (println (list item price whole-map)))