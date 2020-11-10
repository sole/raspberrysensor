# raspberry sensor

> An experiment to use all the hardware bits I have on a box

## Goal

Build a "sensor station", i.e. to take periodic readings, store them and offer them for consumption via a web server.

Less ambitiously, to read the temperature in a room and plot it in a chart.

Overall: have fun plugging things together.

## How?

Roughly:

```
Breadboard with thermistor plugged in <-> Arduino <-> Raspberry Pi <-> A browser
```

An analog sensor (a thermistor) will change its resistance depending on the temperature in the room. Hence, the current that goes through it will also change.

We read the voltage coming out of the sensor with Arduino, because it is extremely easy to read analogue values like this with an Arduino.

I initially wanted to do everything using a Raspberry Pi, but its I/O ports are all digital and so I'd need to introduce capacitors and approximate things in order to take readings, and it would make my life complicated. The last thing I want is to complicate my life any further. Hence, the Arduino.

Then, the Arduino is connected to the Raspberry Pi (using an archaic USB B cable, the type that you only use to connect to the printer).

The Raspberry Pi controls the Arduino using Johnny Five. It will periodically read the values of the sensor, and store them in the filesystem.

The Raspberry Pi also runs a tiny web server, which allows anyone connecting to the Pi using a browser to see what the current temperature is, and what it has been for the last x readings (TBD).

I'm talking about this in the present but nothing is really implemented yet. Big example of _design-by-readme_ here. Sorry (not sorry) to disappoint.

## Required hardware

* A Raspberry Pi with network capabilities (preferrably a wireless model as they'll be less hassly). I'm using a Raspberry Pi Zero.
* An SD card for the Pi, and a reader (so you can flash Raspbian on it)
* USB keyboard (for the initial set-up)
* An Arduino with the right firmware flashed on it (more details TBD)
* A thermistor
* A bread board
* Wires!

## Getting started

To write...

### Setup

#### Raspberry Pi setup

Install recent version of raspbian
Install git, clone this repo in the RPi
Install node: run the script in /bootstrap/download-node.sh

```bash
./bootstrap/download-node.sh
```

#### Arduino set up

It needs the StandardFirmata flashed on it. I guess you could do this with the Arduino CLI somehow, but I haven't figured that out.

Or you can just be lazy and use the old good Arduino IDE:

```bash
brew install arduino
```

then open the IDE, navigate to _Examples... Firmata... StandardFirmata_. With the Arduino connected to the computer, you can then flash this onto the board. And then Johnny Five will be able to talk to it. Yay!
