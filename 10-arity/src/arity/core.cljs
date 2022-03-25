(ns arity.core
  (:require [clojure.browser.repl :as repl]
            [clojure.string :as cstr]))

(defonce conn
         (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn radians
  "Convert degrees to radians"                              ;; This is a documentation comment
  [d]
  (/ (* d (.-PI js/Math)) 180))

(def polar-example {:r 50 :theta 45})

(defn cartesian
  "Convert polar coordinate (radius, degrees) to cartesian (x,y)"
  [{:keys [r theta]}]
  {:x (* (.cos js/Math (radians theta)) r)
   :y (* (.sin js/Math (radians theta)) r)})

; arity.core=> (cartesian polar-example)
; {:x 35.35533905932738, :y 35.35533905932737}

(defn sum-numbers [num & others]
  (+ num (reduce (fn [acc n] (+ acc n)) others)))

(defn name1
  "Reformat name, converting middle name to an initial."
  [surname given middle]
  (str given " " (str (first middle) ".") " " surname))

; arity.core=> (name1 "Smith" "Jane" "Beth")
; "Jane B. Smith"

(defn make-initials [names]
  (if-not (empty? names)
    (reduce (fn [acc item] (str acc (first item) ". ")) "" names)
    ""))

(defn name2
  "Reformat name, converting middle names to initials."
  [surname given & others]
  (str given " " (make-initials others) surname))

; arity.core=> (name2 "Smith" "Jane" "Beth" "NoNAME")
; "Jane B. N. Smith"

(defn area
  "Area of square, rectangle, and trapezoid"
  ([s] (* s s))
  ([w h] (* w h))
  ([b1 b2 h] (* (/ (+ b1 b2) 2) h)))

; arity.core=> (area 5)
; 25
;
; arity.core=> (area 5 4)
; 20
;
; arity.core=> (area 5 4 3)
; 13.5