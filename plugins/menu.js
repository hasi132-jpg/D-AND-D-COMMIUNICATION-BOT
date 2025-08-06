const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu","2"],
    desc: "get cmd list",
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
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *හායි  ${pushname}*


| *සාදරයෙන් පිළිගනිමු! D&D Communication වෙතින් 🙏**  
 අපි සපයන සේවා:

1.	ප්‍රින්ට් / පිටපත් [printout, photocopy]
2.	වර්ණ මුද්‍රණය [color printing]
3.	මුද්‍රණ සැකැස්ම [type setting]
4.	මොබයිල් රිචාජ් [ relord]
5.	ඡායාරූප මුද්‍රණය [photo printing]
6.	අපි හා සම්බන්ධ වන්න 

ඔබට අවශ්‍ය සංඛ්‍යාව ඇතුළත් කරන්න


`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/hasi132-jpg/logo/refs/heads/main/d%20d%20commiunication1.jpg",
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
