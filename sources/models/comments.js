const data = [
	{
		id: 1,
		currentUser: 31,
		dialogue: [
			{id: 1, user_id: 1, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 31, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 1, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 31, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 1, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 31, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 1, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 31, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 1, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 2,
		currentUser: 32,
		dialogue: [
			{id: 1, user_id: 2, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 32, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 2, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 32, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 2, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 32, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 2, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 32, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 2, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 3,
		currentUser: 37,
		dialogue: [
			{id: 1, user_id: 3, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 37, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 3, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 37, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 3, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 37, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 3, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 37, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 3, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 4,
		currentUser: 35,
		dialogue: [
			{id: 1, user_id: 4, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 35, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 4, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 35, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 4, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 35, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 4, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 35, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 4, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 5,
		currentUser: 33,
		dialogue: [
			{id: 1, user_id: 5, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 33, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 5, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 33, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 5, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 33, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 5, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 33, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 5, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 6,
		currentUser: 31,
		dialogue: [
			{id: 1, user_id: 6, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 31, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 6, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 31, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 6, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 31, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 6, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 31, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 6, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 7,
		currentUser: 38,
		dialogue: [
			{id: 1, user_id: 7, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 38, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 7, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 38, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 7, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 38, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 7, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 38, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 7, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 8,
		currentUser: 40,
		dialogue: [
			{id: 1, user_id: 8, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 40, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 8, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 40, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 8, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 40, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 8, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 40, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 8, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 9,
		currentUser: 34,
		dialogue: [
			{id: 1, user_id: 9, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 34, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 9, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 34, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 9, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 34, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 9, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 34, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 9, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 10,
		currentUser: 36,
		dialogue: [
			{id: 1, user_id: 10, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 36, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 10, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 36, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 10, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 36, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 10, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 36, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 10, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 11,
		currentUser: 33,
		dialogue: [
			{id: 1, user_id: 11, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 33, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 11, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 33, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 11, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 33, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 11, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 33, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 11, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 12,
		currentUser: 34,
		dialogue: [
			{id: 1, user_id: 12, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 34, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 12, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 34, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 12, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 34, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 12, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 34, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 12, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 13,
		currentUser: 39,
		dialogue: [
			{id: 1, user_id: 13, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 39, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 13, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 39, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 13, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 39, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 13, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 39, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 13, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 14,
		currentUser: 37,
		dialogue: [
			{id: 1, user_id: 14, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 37, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 14, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 37, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 14, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 37, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 14, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 37, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 14, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 15,
		currentUser: 35,
		dialogue: [
			{id: 1, user_id: 15, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 35, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 15, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 35, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 15, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 35, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 15, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 35, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 15, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 16,
		currentUser: 33,
		dialogue: [
			{id: 1, user_id: 16, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 33, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 16, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 33, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 16, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 33, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 16, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 33, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 16, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 17,
		currentUser: 40,
		dialogue: [
			{id: 1, user_id: 17, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 40, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 17, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 40, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 17, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 40, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 17, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 40, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 17, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 18,
		currentUser: 38,
		dialogue: [
			{id: 1, user_id: 18, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 38, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 18, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 38, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 18, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 38, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 18, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 38, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 18, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 19,
		currentUser: 36,
		dialogue: [
			{id: 1, user_id: 19, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 36, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 19, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 36, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 19, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 36, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 19, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 36, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 19, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 20,
		currentUser: 34,
		dialogue: [
			{id: 1, user_id: 20, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 34, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 20, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 34, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 20, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 34, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 20, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 34, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 20, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 21,
		currentUser: 31,
		dialogue: [
			{id: 1, user_id: 21, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 31, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 21, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 31, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 21, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 31, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 21, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 31, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 21, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 22,
		currentUser: 31,
		dialogue: [
			{id: 1, user_id: 22, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 31, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 22, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 31, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 22, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 31, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 22, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 31, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 22, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 23,
		currentUser: 37,
		dialogue: [
			{id: 1, user_id: 23, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 37, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 23, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 37, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 23, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 37, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 23, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 24,
		currentUser: 35,
		dialogue: [
			{id: 1, user_id: 24, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 35, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 24, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 35, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 24, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 35, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 24, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 35, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 24, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 25,
		currentUser: 33,
		dialogue: [
			{id: 1, user_id: 25, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 3, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 25, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 33, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 25, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 33, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 25, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 33, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 25, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 26,
		currentUser: 31,
		dialogue: [
			{id: 1, user_id: 26, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 31, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 26, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 31, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 26, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 31, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 26, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 31, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 26, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 27,
		currentUser: 37,
		dialogue: [
			{id: 1, user_id: 27, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 37, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 27, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 37, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 27, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 37, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 27, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 37, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 27, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 28,
		currentUser: 40,
		dialogue: [
			{id: 1, user_id: 28, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 40, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 28, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 40, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 28, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 40, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 28, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 40, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 28, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 29,
		currentUser: 34,
		dialogue: [
			{id: 1, user_id: 29, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 34, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 29, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 34, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 29, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 34, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 29, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 34, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 29, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	},
	{
		id: 30,
		currentUser: 36,
		dialogue: [
			{id: 1, user_id: 30, date: "2020-06-10 18:45", text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what."},
			{id: 2, user_id: 36, date: "2020-06-12 19:40", text: "Hi, Corvo. I am sure that that's exactly what is thought best out there in Dunwall. Let's just do what we are supposed to do to get the result."},
			{id: 3, user_id: 30, date: "2020-06-12 20:16", text: "Whoa, Daisy. Corvo is right, though I must admit, he is often way too serious and lacks a good healthy sense of humour.<br>I'd also like to add that half of the points in the plan (btw who wrote it? I would like a long thoughtful conversation in person with the guy / lady in question. Maybe over a chessboard as well) Well, most of the points can be omitted if we rationally split the subtasks between all the parties and optimize the whole line of work."},
			{id: 4, user_id: 36, date: "2020-06-14 21:57", text: "Whatever you say, guys. (And Crake, I don't like chess. Though a blithesome conversation in the cafeteria is highly appreciated)."},
			{id: 5, user_id: 30, date: "2020-06-14 22:01", text: "There are things that you cannot solve by jumping in an X-wing and blowing something up, Daizy)))<br>Okay, guys, let's meet in person, discuss the final details of the plan and let's begin at last."},
			{id: 6, user_id: 36, date: "2020-06-14 22:31", text: "One more question, guys. Did you see Webix latest Kanban update? I think it can help us in planning our own work..  https://docs.webix.com/media/kanban/kanban_front.png"},
			{id: 7, user_id: 30, date: "2020-06-14 22:43", text: "Wow great, could you please share a link to this tool? Cannot wait for playing around with it."},
			{id: 8, user_id: 36, date: "2020-06-14 23:01", text: "Looks really cool. Here you are :)"},
			{id: 9, user_id: 30, date: "2020-06-14 23:15", text: "Thanks a million ;)"}
		]
	}
];

export const comments = new webix.DataCollection({
	data
});
