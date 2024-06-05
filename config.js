const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+233 20 214 8639";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_21_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5kTnZWbHoyZVRhMSsxZ0dwVkpJSElKa3owb205NjMwYzdwN1RqcnlLdmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjAyMTQ4NjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NDJFNjNFQjIxN0M0MUI0MzA3MkY0RUMyNTk5NEY1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1NTA0NzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyMDIxNDg2MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcyRjRENjM1REU4OUU0MTNENUM0OTNDQjlGRkU4M0QzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzU1MDQ3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzIwMjE0ODYzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkEyMjk5NzJEOTc3NkIzMkM3RDIyNDEwRDFGQTJCOUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTUwNDc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjAyMTQ4NjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQzAzODJERDlGRDY3RjNCMENCRjc0OTA4NTZGODMwRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1NTA0NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT3Y2cm5hOGNSRkdDUkppX0htX3BoQVwiLFxuICBcInBob25lSWRcIjogXCI1MjcyMjY5Ny1iZmYxLTQ1ZWEtYjViZS02Y2FhNmUxYTllMmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTc0LFxuICAgICAgNzUsXG4gICAgICAxODksXG4gICAgICAyNDMsXG4gICAgICAxMjUsXG4gICAgICAxNTcsXG4gICAgICAzMSxcbiAgICAgIDcyLFxuICAgICAgNjUsXG4gICAgICAxNzAsXG4gICAgICAyMTQsXG4gICAgICA2MyxcbiAgICAgIDU5LFxuICAgICAgMTEyLFxuICAgICAgNyxcbiAgICAgIDEsXG4gICAgICAxMjUsXG4gICAgICAxNTIsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDU4LFxuICAgICAgMTAyLFxuICAgICAgMTEzLFxuICAgICAgMTA2LFxuICAgICAgMTgxLFxuICAgICAgODcsXG4gICAgICA3NyxcbiAgICAgIDE0MSxcbiAgICAgIDE2NCxcbiAgICAgIDUyLFxuICAgICAgNTAsXG4gICAgICAzLFxuICAgICAgNzgsXG4gICAgICAxOTUsXG4gICAgICAxNjUsXG4gICAgICAyMDUsXG4gICAgICAxNTEsXG4gICAgICAyMDUsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjNSWE1USzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwMjE0ODYzOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzYwOTQxNjI0ODk1NTg6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMYXJyeVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYTG1NTUdFSVQ3L3JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMGtoOWl2TXBORVRxL2k4UytOM1lXVWNIWGZqOVRtSFVVTmZhc2JZRVIxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRQVgxbFhuNUdjQzZEdW8zcVhoSmZETTA2R1N2bVJzaHJzcFFXWHo0WEd2dS9ZY281NWNBcVpxVkc5cE8xdHJ6d0ozOGh0Q0JqUUxNQlZzNldzMlBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvUmxOdGY3cjlXeE9ITW94UXkvWmQzZTIrNVBYSjBBemdJeDVkSzZ0ajN3NU5xdmNUUGZtb0cwOVlJc1M2SkhsdEJPcU03RjZKaWJoc0NNZXJSN3JqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDIxNDg2Mzk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzU1MDQ3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjM1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUDZSSU43TDJVTXdLT3JnZTVWSzlJTTExTWM5U0tjNHpKWE91OWtZTnVpaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUxNTI0NzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc1NTA0NzEyNDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
