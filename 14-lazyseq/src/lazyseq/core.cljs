(ns lazyseq.core
  (:require [clojure.browser.repl :as repl]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn square [x] (* x x))

(def the-list (dom/by-id "sampleList"))

(def animals ["ant" "bee" "cat" "dog" "elk"])

(defn list-item [text] (str "<li>" text "</li>"))

;; There's no way of consuming the lazy sequence so it isn't evaluated.
;; (map (fn [x] (dom/append! the-list (list-item x))) animals)

;; Forces the sequence to be evaluated.
(dorun
    (map (fn [x] (dom/append! the-list (list-item x))) animals))

;; (dorun would be used if you wanted to keep the sequence result.

;; (doseq would be used if you wanted to do a for loop in the entire sequence.
