# Structure (WIP)

One of the more important factors in osu!catch mapping is maintaining structure in your map. This mostly applies for the earlier difficulties (Cup, Salad and Platter) but are also very important for higher difficulties to maintain an esthetically and/or clean looking difficulty. 

## X Value

The X value is the distance between circles and sliders in the editor. This value is consistently used between objects, so a similar kind of distance is used for the same snapping. For example, at 180 BPM, a typical 1/2 dash distance for a Rain difficulty is around 1.5x. Most mappers will use their chosen value consistently for every 1/2 dash, while others choose to make slight adjustments for stronger and weaker sounds.

### How is the X value determined

The X value is calculated using the following values:

- BPM
- Circle Size
- Slider Velocity
- Slider Velocity Multiplier (if used)

#### BPM

...

#### Circle Size

The size of the fruits is determined by the Circle Size (CS) of the map. While this value doesn't directly determine the X value it does affect the size of the fruits, this is then used to calculate dash range of the catcher. This is the distance that the catcher can maximum travel before a hyperdash is generated. This value is then later used to determine the X value.

#### Slider Velocity

The Slider Velocity (SV) is very important for maintaining structure. As 1.0x distance is mainly used for the _ideal_ walking. Using the correct SV will determine how far this walking distance will be. Because of this the [Slider Velocity Calculator](../../tools) tool provides a different SV for each difficulty.

When a Slider Velocity Multiplier (SVM) is used it will affect the set SV, thus also effecting all the X distances like the SV does. 
