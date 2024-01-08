<h2 align="center">GsLibrary Script Usage</h2>

onEvent Function Usage:

    onEvent([Event], [Object/Key], [Callback/Function]);
    
onEvent Function Example
    
    onEvent("click", document.body, function(){
		alert("you clicked the body")
	});

onEvent Supported Events:

>  - Click - Left Mouse Click
>  - RClick - Right Mouse Click
>  - DClick - Left Mouse Click Pressed Rapidly
>  - Hover - When Mouse Is Over Object
>  - Leave - When Mouse Leaves The Objects Area
>  - Keypress - When A Key Is Pressed Down On The Keyboard, Use [Toptal](https://www.toptal.com/developers/keycode) For Getting The
> Event Key

<h2></h2>

getRandom Function Usage:

    getRandom([Type], [Where Outcome Is Stored]);

getRandom Function Example:

    getRandom("3", PassCode);

getRandom Supported Types:

>  - 1 - Random Number 0 - 10
>  - 2 - Random Number 0 - 100
>  - 3 - Random Number 0 - 1000
>  - 4 - Random Character In The Alphabet

<h2></h2>

returnRandom Function Usage:

    getRandom([Type]);

returnRandom Function Example:

    var RandomNumber = getRandom("3");

returnRandom Supported Types:

>  - 1 - Random Number 0 - 10
>  - 2 - Random Number 0 - 100
>  - 3 - Random Number 0 - 1000
>  - 4 - Random Character In The Alphabet

<h2></h2>

manageClass Function Usage:

    manageClass([Type], [Object], [Class/Variable One], [Class/Variable Two]);

manageClass Function Example:

    manageClass("change", MyButton, Enabled, Disabled);

manageClass Supported Types:

>  - 1, add - Adds Class To Object [A]
>  - 2, remove - Removes Class From Object [A]
>  - 3, change, swap - 	Removes A Class And Adds Another [A, B]
>  - 4, toggle - If Class Is Enabled It Disables, If Class Is Disabled It Enables [A]