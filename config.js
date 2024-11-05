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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_03_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMSxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOU5LMnlQL0Q4Y1F0aC9nNWgzY0FsMWh6eGowV043Yms4QWlJOERIbWpiTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NjYyNzg0NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg2QkNENjgxRUQ4RTMxRTJBMjI3MzIwRTU4NjRCRTk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDc5MDIwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBNXlsVnREMlIxZU5ES0FOTWJCNWdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhMzA5YTRlLTgxMWEtNDA5MS05NmYwLTk0MGJjZTE5Mjg3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE3MixcbiAgICAgIDEzLFxuICAgICAgMTY2LFxuICAgICAgNTcsXG4gICAgICAxNTUsXG4gICAgICA5OCxcbiAgICAgIDIzNyxcbiAgICAgIDEsXG4gICAgICAxNzcsXG4gICAgICAxMzMsXG4gICAgICAzNSxcbiAgICAgIDE2NixcbiAgICAgIDE1OCxcbiAgICAgIDAsXG4gICAgICA4NyxcbiAgICAgIDEwNixcbiAgICAgIDEzMCxcbiAgICAgIDExNCxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDU3LFxuICAgICAgNDAsXG4gICAgICAzOSxcbiAgICAgIDE0MixcbiAgICAgIDE3MixcbiAgICAgIDE0MSxcbiAgICAgIDEzOSxcbiAgICAgIDEzOSxcbiAgICAgIDE3NCxcbiAgICAgIDIwMixcbiAgICAgIDIxMCxcbiAgICAgIDY4LFxuICAgICAgMjA1LFxuICAgICAgNTMsXG4gICAgICAxMDUsXG4gICAgICAxMDksXG4gICAgICA3LFxuICAgICAgMTIyLFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKelJ3NklGRUxhR3A3a0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFSdmRUZk5CZkZwL3NvYUplU000OGJHaHJxRmhzdzJWS2tScUNzU09UUWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidllibXBBVUlkMERVTHZHWjhwL29Ib24zY2VlNEt3bVFHR3JVY1U1MDYvRFJOUnN2NjA3WDFaTFpOZXRnblo4QTJCYUVJdFZjM0ZrQXZHczVZWTRjQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid1pmTnpNUXljSkhYOEdDWUozSnhBSlhhOHhtYUZOczVuQnl1RGMrbzkzK1JTdXozRW1na3R4bGNTMXFTSE1kc1Q5MnI5elFNSzZNa1NjVDNMSnc0QVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NjYyNzg0NjE6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJILU5ldHdvcmtzXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0MzY4OTc1ODc0NTQ6NDJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NjYyNzg0NjE6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3OTAyMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOSTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5JKy5qc29uIjogIntcImtleURhdGFcIjpcInRwS2dlUmpxb1o3Z2NFeTVRNGE1Y3IvcHhES2RhU2NGSWJ2MTVhZkhrd1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwNzB1dk5kalJtdnp0WW1ZQ2trUzc3MmdDQnd4L0J6TmgzaFdRU0owYnFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTQ1ODg1NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjA0MDAwMzgxMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5JX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXUThxZEkyRnVRUlVxMFVyckIxTGF6cUhWaUhRNHQrU0UvalV3K2lGWFZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTQ1ODg1NzIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkpBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnhwQlpoRTNlN1pFOVcySlp2dEIrQmlrL3BVRTlsNlZva20ycGdQNkdqST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw0LDUsNl19LFwidGltZXN0YW1wXCI6XCIxNzI4NjQ3MTUyNDE2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkpCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUI3Z0ExMzV6Y1pxV2kweXo3N21sSmZrYlRLQ2kyZzJNYnFTNllxSjdLVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDYsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkpDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTk2L3IyY0k4K1dQMzQxa2FDT2ZaaEo3NndFZDlONlZkUWF3TXB1N1lCRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5KRC5qc29uIjogIntcImtleURhdGFcIjpcInVCQlQxNkcxSUhNZVVvMlREY2lOMmlsWEZNY3ozdkZuSWxnTUxOSVlvdWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA3OTAxNjg2NDhcIn0iCn0="  // PUT your SESSION_ID 


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
