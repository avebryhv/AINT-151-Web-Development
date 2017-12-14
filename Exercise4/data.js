//Variables
var lock1A = false;
var keyNurse = false;
var keyStorage = false;
var keyTorch = false;
var keyPower = false;
var paperNurse = false;
var paperStorage = false;
var paper1A = false;
var paperPower = false;
var paperCount = 0;

var roomArray = [
	{
		title:'???',
		text:'You wake up in the dark, lying on what seems to be a hard surface. The air around you feels completely still, and the room is in complete silence. <br />The back of your head feels faintly sore, as if you had hit it some time ago, but otherwise you seem fine.',
		choices:[
			{
				text:'Investigate your surroundings',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'As your eyes adjust to the darkness of the room, the surface you woke up on is revealed to be a wooden table. <br />Investigating the room reveals it to be an empty classroom, full of tables and chairs pointing towards the teacher’s desk and blackboard at the front of the room. You can also see a cupboard in one corner of the room, and a door that looks to lead out into a corridor.',
		choices:[
			{
				text:'Investigate the tables and chairs',
				index:2
			},
			{
				text:'Search the cupboard',
				index:3
			},
			{
				text:"Search the teacher's desk",
				index:5
			},
			{
				text:"Go through the door",
				index:6
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'Judging by the size of the chairs and tables with the room, it appears to belong to a primary school. <br />You can see that they are fairly old, but have been kept in mostly good shape.',
		choices:[
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'You go over to the cupboard and attempt to open it, but find it to be locked. <br />Further investigation shows that there is a small keyhole on one of the doors.',
		choices:[
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'You insert the small key into the cupboard, finding it to be a perfect fit.',
		choices:[
			{
				text:'Open the cupboard',
				index:21
			},
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Classroom 1B',
		text:'Searching the desk, you find stacks of teaching materials and homework hand-ins for various subjects. <br />However, nothing here stands out as being any use to you.',
		choices:[
			{
				text:'Return to Room',
				index:1
			}
		]
	},
	{
		title:'Lower Corridor A',
		text:'You enter the darkly-lit corridor connecting classrooms together. <br />Windows facing the outside of the school are all nailed shut with wooden planks, with the exception of one, which you notice has a few planks missing. <br />Each classroom appears to be labelled, with the room you woke in being ‘1B’. From here, you should be able to enter rooms ‘1A’, ‘1B’ and ‘1C’, or proceed further down the corridor.',
		choices:[
			{
				text:'Enter Room 1A',
				index:7
			},
			{
				text:'Enter Room 1B',
				index:1
			},
			{
				text:'Enter Room 1C',
				index:13
			},
			{
				text:'Examine the window',
				index:30
			},
			{
				text:'Proceed further',
				index:14
			}
		]
	},
	{
		title:'Classroom 1A (7)',
		text:'You enter the classroom marked ‘1A’. <br />The layout of this room looks to be almost identical to the room you woke up in, however you notice this room does not have a cupboard, and generally seems to be in a worse condition, with some of the desks having been smashed.',
		choices:[
			{
				text:'Examine the furniture',
				index:8
			},
			{
				text:'Investigate the windows',
				index:9
			},
			{
				text:"Search the teacher's desk",
				index:10
			},
			{
				text:"Return to corridor",
				index:6
			}
		]
	},
	{
		title:'Classroom 1A (8)',
		text:'The tables and chairs in this room appear to be from a primary school. <br />Closer inspection reveals a bloodstain under one of the smashed desks.',
		choices:[
			{
				text:'Return to Room',
				index:7
			}
		]
	},
	{
		title:'Classroom 1A(9)',
		text:'The windows in this room all appear sealed shut with wooden planks. <br />No light shines through, and there are no other visible sources of light in the room, however this and the other rooms remain dimly lit.',
		choices:[
			{
				text:'Return to Room',
				index:7
			}
		]
	},
	{
		title:'Classroom 1A(10)',
		text:'Investigating the teacher’s desk, you find a key lying on top of a registration sheet. <br />The key is labelled ‘Nurse’s Office’. Upon picking up the key, you start to hear a scratching sound coming from the blackboard behind you.',
		choices:[
			{
				text:'Check the blackboard',
				index:11
			}
		]
	},
	{
		title:'Classroom 1A(11)',
		text:'You turn to face the blackboard, to see that the word ‘LEAVE’ is being scratched into the board.',
		choices:[
			{
				text:'Leave the room directly',
				index:6
			},
			{
				text:'Return to Room',
				index:12
			}
		]
	},
	{
		title:'Classroom 1A(12)',
		text:'You turn away from the blackboard and continue to investigate the room. <br />As you do, the space around you seems to violently distort, and you find yourself in a pitch-black space, looking directly at what appears to be the ghost of a young girl. <br />The girl seems familiar to you somehow, but you are unable to identify either who she is or the connection between you. <br />As you think about this, the space starts to turn red, and you can feel the back of your head bleeding rapidly. <br />The last thing you get to see before you pass out is the figure of the ghost blankly staring at you. GAME OVER',
		choices:[
			{
				text:'Retry',
				index:0
			}
		]
	},
	{
		title:'Classroom 1C(13)',
		text:'You enter the classroom labelled ‘1C’. This room has the tables and chair piled around the edges of the room, leaving the centre empty, where you notice a folded sheet of paper lying on the floor.',
		choices:[
			{
				text:'Examine the paper',
				index:6
			},
			{
				text:'Return to Corridor',
				index:6
			}
		]
	},
	{
		title:'Lower Corridor B (14)',
		text:'You arrive in a connecting corridor. This one contains rooms marked ‘Nurse’s Office’ and ‘Power Room’. There are also a set of stairs that appear to lead to a second floor. At the end of the corridor, you see a pair of large doors that look like they could be the entrance to the school. However, these doors are locked tight by some kind of force.',
		choices:[
			{
				text:"Enter Nurse's Room",
				index:15
			},
			{
				text:'Enter Power Room',
				index:51
			},
			{
				text:'Head Upstairs',
				index:24
			},
			{
				text:'Go back to the classrooms',
				index:6
			}
		]
	},
	{
		title:"Nurse's Room (15)",
		text:'You enter the room marked ‘Nurse’s Room’. The first thing that catches your eye is what appears to be a bed, hidden by a curtain, in the far corner of the room. You can also see a desk, presumably belonging to the nurse, and a cupboard.',
		choices:[
			{
				text:"Investigate the bed",
				index:16
			},
			{
				text:'Search the desk',
				index:18
			},
			{
				text:'Search the cupboard',
				index:20
			},
			{
				text:'Return to Corridor',
				index:14
			}
		]
	},
	{
		title:"Nurse's Room (16)",
		text:'Approaching the bed, you notice the the curtains are stained with a red fluid, presumably dried blood. Now that you can see the bed properly, there appears to be something in the bed, roughly the height of a child but much too thin to be one. Without opening the curtain, there is no way to identify the bed’s contents.',
		choices:[
			{
				text:'Open the curtain',
				index:17
			},
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room (17)",
		text:'Opening the curtain, you find with some relief that the bed was not holding a person. Instead, you find a long, solid metal tube, with one end of it stained just like the curtain. Upon seeing this, you feel that your light headache has become slightly worse.',
		choices:[
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room (18)",
		text:'You search the desk, skimming through the stored medical records. Underneath one entry, you find a small key.',
		choices:[
			{
				text:"Continue Searching",
				index:19
			},
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room (19)",
		text:"You carry on searching through the nurse's desk, eventually coming across what seems to be a ripped-out diary entry. The paper is in rough condition, causing many of the words to be completely unidentifiable.",
		choices:[
			{
				text:'Return to Room',
				index:15
			}
		]
	},
	{
		title:"Nurse's Room",
		text:"The cupboard is locked",
		choices:[
			{
				text:'Return to Room',
				index:15
			}
		]
	},

]
