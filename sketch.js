// variable to hold a reference to our A-Frame world
let world;

function setup() {
    // no canvas needed
    noCanvas();
    world = new World('VRScene');
    
    // Set background to light blue to resemble the sky
    world.setBackground(135, 206, 250);
  
  	var text = new Text({
		text: 'What a nice swim. Where are your friends though?',
		red: 50, green: 50, blue: 50,
		side: 'double',
		x: 2, y: 2, z: 3,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
world.add(text);

    // Ocean plan
    var ocean = new Plane({
        x: 0, y: 0, z: 0,
        width: 100, height: 100,
        red: 0, green: 105, blue: 148, // ocean blue
        rotationX: -90,
        metalness: 0.25
    });
    world.add(ocean);

    // Island shape
    var island = new Dodecahedron({ //this is a 3d 12 flat flace, pentagon sides shape a platonic solide.
        x: -2, y: 0.25, z: -20, //the shape is flatten along the vert axis to reseble an island
        radius: 8,
        red: 194, green: 178, blue: 128, // sand color
        scaleX: 1.5, scaleY: 0.5, scaleZ: 1.5
    });
    world.add(island);

    // Create the palm tree trunk (cylinder shape)
    var trunk = new Cylinder({
        x: 0, y: 6, z: -17, //trunk placement on island
        height: 8,
        radius: 0.2,
        red: 139, green: 69, blue: 19 // brown color
    });
    world.add(trunk);

    // PALM LEAVES
    for (let i = 0; i < 5; i++) { //Loop runs 5 times creating leaf each time
        var leaf = new Cone({ // shape
            x: 0, y: 10, z: -17, //position
            radiusBottom: 9, //base of cone
            radiusTop: 0, //tip of cone
            height: 4, //heigh of cone
            red: 34, green: 139, blue: 34, // green leaves
            rotationX: (-20), // tilts leave along x axis 20 degrees
            rotationY: i * 72, // Spread the leaves evenly 360 dived by 5 is 72 degrees for each leaf

        });
      leaf.setScale(1, 1, 0.2); //shrinks x axis making more sharp and thin
        world.add(leaf);
    }

    // SUN
    var sun = new Sphere({
        x: 5, y: 70, z: -70,
        radius: 20,
        red: 255, green: 223, blue: 0 // yellow sun
    });
    world.add(sun);

// SHARK FIN
var sharkFin = new Cone({
    x: 10, y: 0.5, z: 8,
    radiusBottom: 0.5,
    radiusTop: 0,
    height: 1,
    red: 50, green: 50, blue: 50, // gray color

});

// Scale the shark fin to make it thin
sharkFin.setScale(1, 1, 0.2);
world.add(sharkFin);

 // BLOOD
 var blood = new Sphere({
       x: 10, y: -9.8, z: 8,
    radius: 10,
    red: 100, green: 0, blue: 0, // dark red blood

});

    world.add(blood);
  
  // SHARK FIN
var sharkFin2 = new Cone({
    x: 4, y: 0.5, z: 10,
    radiusBottom: 0.5,
    radiusTop: 0,
    height: 1,
    red: 50, green: 50, blue: 50, // gray color

});

// Scale the shark fin to make it thin
sharkFin2.setScale(1, 1, 0.2);
world.add(sharkFin2);

 // BLOOD
 var blood2 = new Sphere({
       x: 4, y: -9.8, z: 10,
    radius: 10,
    red: 100, green: 0, blue: 0, // dark red blood

});

    world.add(blood2);
  
   // SHADE
 var shade = new Sphere({
    x: 0, y: -3.5, z: -17, //position
    radius: 7,
      red: 70, green: 70, blue: 70, // gray colo7
   });

    world.add(shade);
}

