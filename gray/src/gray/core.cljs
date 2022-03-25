(ns gray.core
  (:require [clojure.browser.repl :as repl]
            [reagent.core :as reagent :refer [atom]]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))s

;; This is an event handler, since it executes when there's a change in the HTML element
(defn gray-changer [event]
  (reset! gray (.-value (.-target event))))

(defn gray-input []
  [:input {:type "text"
           :size "5"
           ;; Modifying the input field (event handler)
           :on-change gray-changer
           :value @gray}])

(defn gray-rect []
  [:div {:style
         {:width "50%"
          :margin "0.5em auto"
          :height "150px"
          :background-color (str "rgb(" @gray "," @gray "," @gray ")")
          :border "1px solid black"}} " "])

(defn interface []
  [:div
   [para]
   [gray-input]
   [gray-rect]])

(defonce gray (atom 128))

;; A component to the paragraph
(defn para []
  [:p "Enter a value between 0 and 255. " [:small "(0=black, 255=white)"]])

;; This function takes as first argument the component that you want to render + where you want it rendered.
(reagent/render-component [interface] (.getElementById js/document "dynamic"))

