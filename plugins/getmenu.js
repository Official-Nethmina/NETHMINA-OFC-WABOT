const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "getmenu",
    alise: ["allmenu"],
    react: "🛸",
    desc: "get working menu",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
        ai: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

      *⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*
      
           *${pushname}*
      
      *┕─────────────────❒*
      
      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━
         *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ɴᴇᴛʜᴍɪɴᴀ-ᴏꜰᴄ-ᴡᴀʙᴏᴛ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━
      
      *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰꜰɪᴄɪᴀʟ 👨🏻‍💻*
      
      *╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
      *│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
      *│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* ${runtime(process.uptime())}
      *╰──────────❒⁠*
      
      *╭───────────────❒⁠⁠⁠⁠*
      *│* *❂ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕───────────────❒*
      *╭──────────●●►*
      ${menu.download}
      *╰──────────●●►*
      
      *╭───────────────❒⁠⁠⁠⁠*
      *│* *❂ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕───────────────❒*
      *╭──────────●●►*
      ${menu.main}
      *╰──────────●●►*
      
      *╭───────────────❒⁠⁠⁠⁠*
      *│* *❂ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕───────────────❒*
      
      *╭──────────●●►*
      ${menu.group}
      *╰──────────●●►*
      
      *╭───────────────❒⁠⁠⁠⁠*
      *│* *❂ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕───────────────❒*
      
      *╭──────────●●►*
      ${menu.owner}
      *╰──────────●●►*
      
      *╭───────────────❒⁠⁠⁠⁠*
      *│* *❂ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕───────────────❒*
      
      *╭──────────●●►*
      ${menu.convert}
      *╰──────────●●►*

      *╭───────────────❒⁠⁠⁠⁠*
      *│* *❂ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕───────────────❒*

      *╭──────────●●►*
      ${menu.ai}
      *╰──────────●●►*
      
      *╭─────────────────❒⁠⁠⁠⁠*
      *│* *❂sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs❂*
      *┕─────────────────❒*
      
      *╭──────────●●►*
      ${menu.search}
      *╰──────────●●►*
      
      *❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠
      
      > *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰꜰɪᴄɪᴀʟ ᴄᴏᴍᴍᴜɴɪᴛʏ*
      
      ╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯`;
      
      await robin.sendPresenceUpdate('recording', from);
      await robin.sendMessage(from, { audio: { url: "https://drive.google.com/file/d/1KFXDJIFkchpv7LqB_rAe5fgodl4QXmws/view?usp=drive_link" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://i.ibb.co/VYHLZ8Cv/my-data.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
