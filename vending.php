<?php
    function iceCream($d) {
        if (array_sum($d)%60===0) {
            $r = array_sum($d)%60;
            return "you get ".$r." ice cream";
        } else {
            return "invalid cash ammount";
        }
    }

    echo iceCream(array(20, 40));
?>