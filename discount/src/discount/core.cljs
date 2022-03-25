(ns discount.core
  (:require [clojure.browser.repl :as repl]
             [domina :as dom]
             [domina.events :as ev]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(defn field-value [field]
  (.parseFloat js/window (dom/value (dom/by-id field))))

;; Checks the coupon
(defn extra-discount []
  (if (= (dom/value (dom/by-id "dcode")) "EXTRA") 1 0))

;; Handling the discount percent based on quantity
(defn discount-percent [qty]
  (cond
    (<= qty 10) 0
    (<= qty 50) 1
    (<= qty 100) 3
    (<= qty 200) 5
    :else 7.5))

(defn discount-total [qty price percent]
  (* qty (* (- 1 (/ percent 100)) price)))

;; This function rounds the number of decimal to 2, once we are working with currency. This .toFixed is a method that belongs to all number objects.
(defn currency [amount]
  (.toFixed amount 2))

(defn calculate []
  (let [qty (field-value "qty")
        price (field-value "price")
        percent (+ (discount-percent qty) (extra-discount))
        total (* qty price)
        dtotal (discount-total qty price percent)]
    (dom/set-text! (dom/by-id "total") (currency total))
    (dom/set-text! (dom/by-id "discount") (currency (- total dtotal)))
    (dom/set-text! (dom/by-id "discounted") (currency dtotal))))

(ev/listen! (dom/by-id "calculate") "click" calculate)