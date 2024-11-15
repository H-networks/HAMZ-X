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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_22_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDYzLFxuICAgICAgICA4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEFVa0t6czVjNVRGcVRUNDVJOUxCV2dWU003QTU4WFVKNklNbnpuSXRYND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NjYyNzg0NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZDQzU5NTZCMzRGQjNBRDEyQTEzMTNCQjEwNDNFMjQ5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTY2MjU0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmRG50eWdUYVJ2U2tRbHEwLUl2LUF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiMjlkOTk0LWQ4OGQtNGQ0MS05MTU1LTI0MDFmOTY2OTAzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTk4LFxuICAgICAgNDIsXG4gICAgICAxOTIsXG4gICAgICAxODEsXG4gICAgICA4MyxcbiAgICAgIDI0NSxcbiAgICAgIDIxNixcbiAgICAgIDE0MixcbiAgICAgIDE0NixcbiAgICAgIDcxLFxuICAgICAgMTU5LFxuICAgICAgMTcxLFxuICAgICAgMjQ4LFxuICAgICAgMjQ1LFxuICAgICAgMjgsXG4gICAgICA4OCxcbiAgICAgIDIwNyxcbiAgICAgIDI1MCxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTUsXG4gICAgICAxMjgsXG4gICAgICAxOTUsXG4gICAgICAyMDcsXG4gICAgICA0NCxcbiAgICAgIDE2NixcbiAgICAgIDY5LFxuICAgICAgMTIzLFxuICAgICAgMjE2LFxuICAgICAgMjQ3LFxuICAgICAgMjE2LFxuICAgICAgMTUxLFxuICAgICAgMTExLFxuICAgICAgMTUyLFxuICAgICAgMTAyLFxuICAgICAgMjA1LFxuICAgICAgNzYsXG4gICAgICAxMzUsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKelJ3NklGRU15bDNMa0dHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFSdmRUZk5CZkZwL3NvYUplU000OGJHaHJxRmhzdzJWS2tScUNzU09UUWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVGJTVTVWdEVBNDhPdW9GL0xUczQ1Q0NyN0FSOWVqdk1QRHlLem9yUCtvMWg4NDBxemdudDZLSHliZSsrR2FzM1BCanAxb0Yyckp4d2lrNlpFSzN3Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWEkyRlI0NG8rMFZVM0M1Z1pWdmpZR2VuNzdSdThicVVPaTFvcWpzTkxlWjNqSFIvVkJ2MVZONlpORVI2VUVySGNIUG1xSDZmeHVlYXAxSXZ1WmZzaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NjYyNzg0NjE6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJILU5ldHdvcmtzXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0MzY4OTc1ODc0NTQ6NDRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NjYyNzg0NjE6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2NjI1NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOSTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5JKy5qc29uIjogIntcImtleURhdGFcIjpcInRwS2dlUmpxb1o3Z2NFeTVRNGE1Y3IvcHhES2RhU2NGSWJ2MTVhZkhrd1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwNzB1dk5kalJtdnp0WW1ZQ2trUzc3MmdDQnd4L0J6TmgzaFdRU0owYnFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTQ1ODg1NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjA0MDAwMzgxMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5JX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXUThxZEkyRnVRUlVxMFVyckIxTGF6cUhWaUhRNHQrU0UvalV3K2lGWFZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTQ1ODg1NzIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkpBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnhwQlpoRTNlN1pFOVcySlp2dEIrQmlrL3BVRTlsNlZva20ycGdQNkdqST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw0LDUsNl19LFwidGltZXN0YW1wXCI6XCIxNzI4NjQ3MTUyNDE2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkpCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUI3Z0ExMzV6Y1pxV2kweXo3N21sSmZrYlRLQ2kyZzJNYnFTNllxSjdLVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDYsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkpDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTk2L3IyY0k4K1dQMzQxa2FDT2ZaaEo3NndFZDlONlZkUWF3TXB1N1lCRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE0NTg4NTcyLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5KRC5qc29uIjogIntcImtleURhdGFcIjpcInVCQlQxNkcxSUhNZVVvMlREY2lOMmlsWEZNY3ozdkZuSWxnTUxOSVlvdWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSkUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBN2VjNGliUE84ZjFMRk5KRTQ1SS9MNVIvZXduVXZKbHBnNzRKaFVMeEc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTQ1ODg1NzIsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCw1LDYsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5KRi5qc29uIjogIntcImtleURhdGFcIjpcIjVMNG03YU1mSE5xdTZNRGd6SVFWeVZ6dVBLTm5RTlVaT0NDdDdQWDBIeG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNDU4ODU3MixcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNl19LFwidGltZXN0YW1wXCI6XCIxNzMxMTU0NTkyNDU2XCJ9Igp9"  // PUT your SESSION_ID 


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
