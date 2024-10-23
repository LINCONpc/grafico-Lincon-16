const grafico = document.getElementById("meuGrafico").getContext("2dc");
const meuGrafico = new Chart (grafico,{
    type: "pie",
    Date: {
        labels: [
            "Instagram",
            "WhatsApp",
            "Facebook",
            "WeChat",
            "TikTok",
            "DouYin",
            "Twitter",
            "Telegram",
            "FB Messenger",
            "LINE",
        ]
    }
})