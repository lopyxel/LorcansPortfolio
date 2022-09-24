
// JavaScript source code
const allStories = [
	{
		image: "snapchat/CubePhysics.png",
		url: "snapchat/CubePhysics.mp4",
		title: "Cube Physics",
	},
	{
		image: "snapchat/Stories.png",
		url: "snapchat/Stories.mp4",
		title: "Stories and early homepage",
	},
	{
		image:"snapchat/video-1653748703Ss.png",
		url:"snapchat/video-1653748703d.mp4",
		title:"PhotoShopStamstracke",
	},
	{
		image:"snapchat/video-1653752702Ss.png",
		url:"snapchat/video-1653752702.mp4",
		title:"Dispatcher Control System",
	},
	{
		image:"snapchat/video-1653749005Ss.png",
		url:"snapchat/video-1653749005.mp4",
		title:"TreeSeasons original and rewrite",
	},
	{
		image:"snapchat/video-1653749077Ss.png",
		url:"snapchat/video-1653749077.mp4",
		title:"TreeSeasons Code",
	},
	{
		image:"snapchat/video-1653748771Ss.png",
		url:"snapchat/video-1653748771.mp4",
		title:"PHP [GET] [POST]",
	},
	{
		image:"snapchat/video-1653749273Ss.png",
		url:"snapchat/video-1653749273.mp4",
		title:"Track Physics",
	},
	{
		image:"snapchat/video-1653749373Ss.png",
		url:"snapchat/video-1653749373.mp4",
		title:"Early Coaster",
	},

	{
		image:"snapchat/video-1653749601Ss.png",
		url:"snapchat/video-1653749601.mp4",
		title: "More Early Coaster",
	},
	{
		image:"snapchat/video-1653749754Ss.png",
		url:"snapchat/video-1653749754.mp4",
		title:"Early Track Generator",
	},
	{
		image:"snapchat/video-1653749397Ss.png",
		url:"snapchat/video-1653749397.mp4",
		title:"Early Open GL",
	},
	{
		image:"snapchat/video-1653749783Ss.png",
		url:"snapchat/video-1653749783.mp4",
		title:"Fire!",
	},
	{
		image:"snapchat/video-1653750206Ss.png",
		url:"snapchat/video-1653750206.mp4",
		title:"Code Reduction GUI",
	},
	{
		image:"snapchat/video-1653750378Ss.png",
		url:"snapchat/video-1653750378.mp4",
		title:"Settings",
	},
	{
		image:"snapchat/video-1653750507Ss.png",
		url:"snapchat/video-1653750507.mp4",
		title:"Pressable buttons and sliders XR",
	},
	{
		image:"snapchat/video-1653750715Ss.png",
		url:"snapchat/video-1653750715.mp4",
		title:"SFX",
	},
	{
		image:"snapchat/video-1653750740Ss.png",
		url:"snapchat/video-1653750740.mp4",
		title:"Ragdoll",
	},
	{
		image:"snapchat/video-1653750793Ss.png",
		url:"snapchat/video-1653750793.mp4",
		title:"Gun and Ragdoll",
	},
	{
		image:"snapchat/video-1653750896Ss.png",
		url:"snapchat/video-1653750896.mp4",
		title:"Basic NPC",
	},
	{
		image:"snapchat/video-1653750995Ss.png",
		url:"snapchat/video-1653750995.mp4",
		title:"Early Custom Track",
	},
	{
		image:"snapchat/video-1653751144Ss.png",
		url:"snapchat/video-1653751144.mp4",
		title:"More Custom Track jitter",
	},
	{
		image:"snapchat/video-1653751164Ss.png",
		url:"snapchat/video-1653751164.mp4",
		title:"More Custom Track smooth",
	},
	{
		image:"snapchat/video-1653751174Ss.png",
		url:"snapchat/video-1653751174.mp4",
		title:"Tony Wants his Money",
	},
	{
		image:"snapchat/video-1653751328Ss.png",
		url:"snapchat/video-1653751328.mp4",
		title:"Beam Improvements",
	},
	{
		image:"snapchat/video-1653751411Ss.png",
		url:"snapchat/video-1653751411.mp4",
		title:"Coaster Stop",
	},
	{
		image:"snapchat/video-1653751659Ss.png",
		url:"snapchat/video-1653751659.mp4",
		title:"Map Select",
	},
	{
		image:"snapchat/video-1653751968Ss.png",
		url:"snapchat/video-1653751968.mp4",
		title:"talking about track behavior in relation to controllers",
	},
	{
		image:"snapchat/video-1653751989Ss.png",
		url:"snapchat/video-1653751989.mp4",
		title:"Project archetecture",
	},
	{
		image:"snapchat/video-1653752165Ss.png",
		url:"snapchat/video-1653752165.mp4",
		title:"Client Server app java",
	},
	{
		image:"snapchat/video-1653752215Ss.png",
		url:"snapchat/video-1653752215.mp4",
		title:"To Do List code",
	},
	{
		image:"snapchat/video-1653752262Ss.png",
		url:"snapchat/video-1653752262.mp4",
		title:"Advantages of Minimalism",
	},
	{
		image:"snapchat/video-1653752320Ss.png",
		url:"snapchat/video-1653752320.mp4",
		title:"Blender glowing LT lightning",
	},
	{
		image:"snapchat/video-1653752454Ss.png",
		url:"snapchat/video-1653752454.mp4",
		title:"Jersey Scene",
	},
	{
		image:"snapchat/video-1653752782Ss.png",
		url:"snapchat/video-1653752782.mp4",
		title:"Balbriggan in Unity 5.6",
	},
	{
		image:"snapchat/video-1653752797Ss.png",
		url:"snapchat/video-1653752797.mp4",
		title:"train with hinges",
	},
	{
		image:"snapchat/video-1653752918Ss.png",
		url:"snapchat/video-1653752918.mp4",
		title:"train along spline",
	},

	
];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const SFVid = document.querySelector(".story-full video");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");
let currentIndex = 0;

allStories.forEach((s,i) => 
{
	const content = document.createElement("div");
	content.classList.add("content");

	const img = document.createElement("img"); 
	img.setAttribute("src",s.image);

	storiesContainer.appendChild(content);
	content.appendChild(img);

	content.addEventListener("click",()=>
	{
		currentIndex = i;
		storyFull.classList.add("active");
		SFVid.setAttribute("src",s.url);
		if(!s.title){storyFullTitle.style.display = "none";}
		else
		{
			storyFullTitle.style.display = "block";
			storyFullTitle.innerHTML = s.title;
			document.getElementById("vid").play();
		}
	})
});

closeBtn.addEventListener("click",()=>{
	storyFull.classList.remove("active");
	document.getElementById("vid").pause();
});
leftArrow.addEventListener("click",()=>{
	if(currentIndex > 0){currentIndex-=1;}

	SFVid.setAttribute("src",allStories[currentIndex].url);

		if(!allStories[currentIndex].title){storyFullTitle.style.display = "none";}
		else{storyFullTitle.style.display = "block"; storyFullTitle.innerHTML = allStories[currentIndex].title;}
		document.getElementById("vid").play();
});

rightArrow.addEventListener("click",()=>{
	if(currentIndex < allStories.length){currentIndex+=1;}

	SFVid.setAttribute("src",allStories[currentIndex].url);

		if(!allStories[currentIndex].title){storyFullTitle.style.display = "none";}
		else{storyFullTitle.style.display = "block"; storyFullTitle.innerHTML = allStories[currentIndex].title;}
		document.getElementById("vid").play();
});
