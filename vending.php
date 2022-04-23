<?php
    function iceCream($d) {
        if (array_sum($d) == 60) {
            return true;
        } else {
            return false;
        }
    }

    echo iceCream(array(20, 40));
?>