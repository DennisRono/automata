#! /bin/bash

read -a arr

echo arr

$sum=$(IFS=+; echo "$((${arr[*]}))")
$b = 60
#IFS='+' avg=$(echo "scale=1;(${arr[*]})/${#arr[@]}"|bc)

iceCream () {
    if [ "$sum" -eq "$b" ]; then
        echo "They're equal";
    fi
}