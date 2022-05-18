#!/usr/bin/env node

import chalk from 'chalk';
import shell from 'shelljs'
import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'
import readline from 'readline'

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const log = console.log;
const curdir = process.cwd()
const startsys = createSpinner(chalk.blue.underline.bold('starting the system......................')).start()

async function welcome() {
    const vmachine = chalkAnimation.rainbow(
      'Machakos University Ice Cream \n'
    );
  
    await sleep();
    vmachine.stop();
  
    log(`${chalk.bgBlue('Welcome to our vending machine')}`);
    log(`${chalk.green.bold('(Please pick a flavour)')}`);
    log(`${chalk.white.bold('1. Strawberry flavour')}`);
    log(`${chalk.white.bold('2. Vanilla flavour')}`);
    log(`${chalk.white.bold('3. Chocolate flavour')}`);
    log(`${chalk.white.bold('4. No flavour')}`);
}

setTimeout(() => {
    startsys.success()
    figlet('Get an Ice Cream', function(err, data) {
        if (err) {
            log(`${chalk.red('Something went wrong...')}`);
            console.dir(gradient.pastel.multiline(err) + '\n');
            return;
        }
        log(`${chalk.green(data)}`)
    });
    setTimeout(() => {
        options()
    }, 1000)
}, 1000)

const options = () =>{
    log(`${chalk.green.bold('Welcome to our vending machine')}`);
    log(`${chalk.green.bold('(Please pick a flavour)')}`);
    log(`${chalk.white.bold('1. Strawberry flavour')}`);
    log(`${chalk.white.bold('2. Vanilla flavour')}`);
    log(`${chalk.white.bold('3. Chocolate flavour')}`);
    log(`${chalk.white.bold('4. No flavour')}`);

    rl.question(`${chalk.red.bold('> ')}`, function (answer) {
        pick(parseInt(answer))
        rl.close();
    });
}

const pick = (a) => {
    log(`${chalk.green.bold(a)}`);
    const checkflavour = createSpinner(chalk.blue.underline.bold('checking your ice cream flavour......................')).start()
    switch (a) {
        case 1:
            setTimeout(() => {
                checkflavour.success()
                log(`${chalk.green.bold('Strawberry flavour available!')}`);
                pay(a)
            }, 1000)
            break;
        case 2:
            setTimeout(() => {
                checkflavour.success()
                log(`${chalk.green.bold('Vanilla flavour available!')}`);
                pay(a)
            }, 1000)
            break;
        case 3:
            setTimeout(() => {
                checkflavour.success()
                log(`${chalk.green.bold('Chocolate flavour available!')}`);
                pay(a)
            }, 1000)
            break;
        case 4:
            setTimeout(() => {
                checkflavour.success()
                log(`${chalk.green.bold('Plain flavour available!')}`);
                pay(a)
            }, 1000)
            break;
    
        default:
            setTimeout(() => {
                checkflavour.error()
                log(`${chalk.red.bold('inavalid option!')}`);
                options()
            }, 1000)
            break;
    }
}

const pay = (b) => {
    log(`${chalk.yellow.bold('Enter your payment')}`);
    log(`${chalk.yellow.bold('(valid denominations are 20 and 40. one ice cream costs 60/=)')}`);
    log(`${chalk.yellow.underline.bold('(enter your payment separated by a space)')}`);
    rl.question(`${chalk.red.bold('> ')}`, function (answer) {
        console.log(answer.split(" ").map(Number));
        // vending(answer.split(" ").map(Number))
        rl.close();
    });
}

const vending = (d) => {
    console.log(d);
    if(d.every(e=>[20,40].indexOf(e)>-1)){
        let r  = d.reduce((s, a) => s + a, 0)%60
        (r===0)? log(`${chalk.green.underline.bold("Success! you have bought "+d.reduce((s, a) => s + a, 0)/60+" ice cream")}`): log(`${chalk.red.bold('reject! cash overflow')}`);
        exit()
    } else {
        log(`${chalk.yellow.bold('reject! invalid denominations')}`);
        options();
    }
}

const exit = () => {
    log(`${chalk.yellow.bold('What do you wish to do?')}`);
    log(`${chalk.yellow.bold('1. Exit')}`);
    log(`${chalk.yellow.bold('2. Buy Ice Cream')}`);
    rl.question(`${chalk.red.bold('> ')}`, function (answer) {
        if(parseInt(answer) === 1){

        } else if(parseInt(answer)=== 2){
            process.exit(0);
        } else {
            log(`${chalk.red.bold('Invaid option!')}`);
            exit()
        }
        rl.close();
    });
}