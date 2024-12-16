import React, { useEffect } from "react"
import '../css/SliderNotification.css';
import jQuery from "jquery";



const SliderNotification = () => {

    useEffect(() => {
        jQuery(document).ready(function ($) {
            var promoticker = function () {
                var window_width = window.innerWidth;
                var speed = 12 * window_width;
                $('#promo-notifications li:first').animate({ left: '-980px' }, speed, 'linear', function () {
                    $(this).detach().appendTo('#promo-notifications ul').css('left', "100%");
                    promoticker();
                });
            };
            if ($("#promo-notifications li").length > 1) {
                promoticker();
            }
        });
    }
    )
    return (
        <div id="promo-notifications">
            <ul>
                <li>REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!!</li>
                <li>REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!! REGISTER NOW!!!</li>
            </ul>
        </div>
    );
};

export default SliderNotification