(ns seq_averages.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [domina :as dom]
            [domina.events :as ev]))

(defonce conn
         (repl/connect "http://localhost:9000/repl"))


;; (defn getValue [id] (dom/value (dom/by-id id)))

;; (defn getVector [id] (cstr/split (getValue id) #"[ , ;]"))

;; (defn intoVector [id] (map #(.parseFloat js/window %1) (getVector id)))

;;(defn arithmetic [userValues] (/ (reduce (fn [acc element] (+ acc element)) userValues) (count userValues)))
;; (fn [acc element] (+ acc element)) here could be altered for "+".


;;(defn geometric2 [userValues] (.pow js/Math (reduce (fn [acc element] (* acc element)) userValues) (/ 1 (count userValues))))
;; (fn [acc element] (* acc element)) here could be altered for "*".

;;(defn harmonic2 [userValues] (/ (count userValues) (reduce (fn [acc element] (+ acc (/ 1 element))) userValues)))

;; (defn decideOperation [id userValues] (if (identical? id "arithmetic") (arithmetic userValues) (if (identical? id "geometric") (geometric userValues) (if (identical? id "harmonic") (harmonic userValues)))))

;; (defn calculate [evt] (dom/set-text! (dom/by-id "result") (decideOperation (getValue "meanType") (intoVector "numbers"))))



(defn arithmetic [values]
  (/ (reduce + values) (count values)))

(defn geometric [values]
  (let [nonzero (remove zero? values)
        v (map (fn [x] (.abs js/Math x)) nonzero)
        n (count v)]
    (.pow js/Math (reduce * v) (/ 1.0 n))))

(defn harmonic [values]
  (let [v (remove zero? values)
        recip (map #(/ 1 %1) v)
        n (count v)]
    (/ n (reduce + recip))))

(defn mean [choice values]
  (cond
    (= choice "arithmetic") (arithmetic values)
    (= choice "geometric") (geometric values)
    (= choice "harmonic") (harmonic values)))

(defn calculate [evt]
  (let [choice (dom/value (dom/by-id "meanType"))
        number-string (dom/value (dom/by-id "numbers"))
        numbers (cstr/split number-string #"[ ,]+")
        values (map (fn [x] (.parseFloat js/window x)) numbers)]
    (dom/set-text! (dom/by-id "result") (mean choice values))))

(enable-console-print!)

(ev/listen! (dom/by-id "calculate") "click" calculate)

(println "Hello world!")
