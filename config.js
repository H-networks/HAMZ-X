const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="mubiruhamdan92@gmail.com"
global.location="kampala,uganda."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© hamzInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,256xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,256xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256766278461,256xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_13_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInA2VW9oVzU5MG05VzFKQnc3V0hMbUxpajJyMzV3TUFDNXBMR2ZjZzMyQ1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzY2Mjc4NDYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQ0EyQUFFQzJCNkNDM0RDQTU1NzJGNDFDQUI3REM3MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA2OTcyMjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYk5zSll1MjZTRk9IUGxiS08yZ0hCZ1wiLFxuICBcInBob25lSWRcIjogXCI3OWE0ZTU5Yy1jZDFmLTQyMzMtOWYzNi1kNmNiODg5MTAxODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxMTksXG4gICAgICAyMzQsXG4gICAgICAxMTAsXG4gICAgICAxNTEsXG4gICAgICAyOCxcbiAgICAgIDIxMCxcbiAgICAgIDI0MSxcbiAgICAgIDk3LFxuICAgICAgMjYsXG4gICAgICA2NCxcbiAgICAgIDE0MixcbiAgICAgIDIwMCxcbiAgICAgIDEwMixcbiAgICAgIDIxNixcbiAgICAgIDE1MSxcbiAgICAgIDE2MixcbiAgICAgIDk0LFxuICAgICAgNDMsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgNzcsXG4gICAgICAxMjAsXG4gICAgICAzLFxuICAgICAgMjgsXG4gICAgICAxMTksXG4gICAgICAxMDYsXG4gICAgICAyMTcsXG4gICAgICAxNDcsXG4gICAgICAxOTksXG4gICAgICA1OCxcbiAgICAgIDI0MCxcbiAgICAgIDE1MCxcbiAgICAgIDIxMCxcbiAgICAgIDIwOCxcbiAgICAgIDYzLFxuICAgICAgNDksXG4gICAgICAxNDQsXG4gICAgICA4OSxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpSdzZJRkVQdXZvYmtHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRUnZkVGZOQmZGcC9zb2FKZVNNNDhiR2hycUZoc3cyVktrUnFDc1NPVFFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpBaHR0VUgvbUcrNUF0SC9RMzVhYXZWQ3psZ3dxdXRhVXNEZ0duZ3dDNk5DUDNoWGliMktmZURDam9kcHhEa05vSThVdGlaRW5DTHVRelJOTGU1b0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRWYXJkSXdIbXFORnFhOTgwSXRLalliNjRIOXo0M2Yrayt6eitKQXl4SWNCdGVzTkhhMVEvOXZYNUlRY2x6anR0Z1Era08wMnBrWlZHUzkvZFVJQWh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzY2Mjc4NDYxOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSC1OZXR3b3Jrc1wiLFxuICAgIFwibGlkXCI6IFwiMjM0NDM2ODk3NTg3NDU0OjQxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzY2Mjc4NDYxOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjk3MjE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkpDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSSsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0cEtnZVJqcW9aN2djRXk1UTRhNWNyL3B4REtkYVNjRklidjE1YWZIa3dZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTQ1ODg1NzIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkk2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicDcwdXZOZGpSbXZ6dFltWUNra1M3NzJnQ0J3eC9Cek5oM2hXUVNKMGJxcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjYwNDAwMDM4MTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSV9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV1E4cWRJMkZ1UVJVcTBVcnJCMUxhenFIVmlIUTR0K1NFL2pVdytpRlhWZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5KQS5qc29uIjogIntcImtleURhdGFcIjpcImZ4cEJaaEUzZTdaRTlXMkpadnRCK0Jpay9wVUU5bDZWb2ttMnBnUDZHakk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyODY0NzE1MjQxNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5KQi5qc29uIjogIntcImtleURhdGFcIjpcImVCN2dBMTM1emNacVdpMHl6NzdtbEpma2JUS0NpMmcyTWJxUzZZcUo3S1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw2LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5KQy5qc29uIjogIntcImtleURhdGFcIjpcIlU5Ni9yMmNJOCtXUDM0MWthQ09mWmhKNzZ3RWQ5TjZWZFFhd01wdTdZQkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2OTcyMDI5NTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ HAMZInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • HAMZ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HAMZ-X",
  ownername:process.env.OWNER_NAME|| "HAMZ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
