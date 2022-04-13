var tipuesearch = {"pages": [{'title': 'About', 'text': '組長： \n 40923105 吳芷萱 \n 組員： \n 40923102 王悅禎 \n 40923104 江宜珊 \n 40923106 巫翊婕 \n 49023107 李宛諭 \n 40923110 林芳羽 \n 40923121 \n 40923153 \n', 'tags': '', 'url': 'About.html'}, {'title': '每周討論', 'text': '大組每兩周討論一次 \n', 'tags': '', 'url': '每周討論.html'}, {'title': 'W2', 'text': '分組的 txt 檔： "cd2022_w4_grp.txt" \n # grp_2a_old.py\nstudList = "cd2022_w4_grp.txt"\ncourTitle = "cd2022"\n \n# group title initial\ngrpTitle = studList[:6] + "ag"\n \n# student Account and github Account as inputs\ndef perWeb(s, g):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + courTitle + "\\">" + s + " web</a>"\n    print(pSite)\n \ndef perRepo(s, g):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + courTitle + "\\">" + s + " repo</a>"\n    print(pSite)\n     \ndef grpWeb(s, g, ord):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + grpTitle + str(ord) + "\\">grp web</a>"\n    print(pSite)\n     \ndef grpRepo(s, g, ord):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + grpTitle + str(ord) + "\\">grp repo</a>"\n    print(pSite)\n \n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open(studList) as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n \ngrpCount = 0\nfor i in range(len(data)):\n    # grpCount is the group order\n    grpCount = grpCount + 1\n    group = data[i].rstrip("\\n").split("\\t")\n    # use filter to remove vacant string eleament\n    # use [1:] to remove first element\n    group = list(filter(None, group))[1:]\n    print(grpTitle + str(grpCount) + "<br />")\n    for j in range(0, len(group), 2):\n        # s is the student number\n        s = group[j]\n        # g is the github account\n        g = group[j+1]\n        perWeb(s, g)\n        print("|")\n        perRepo(s, g)\n        print("|")\n        grpWeb(s, g, grpCount)\n        print("|")\n        grpRepo(s, g, grpCount)\n        print("<br />") \n cd2022ag1   40923101 web  |  40923101 repo  |  grp web  |  grp repo     40923103 web  |  40923103 repo  |  grp web  |  grp repo     40923108 web  |  40923108 repo  |  grp web  |  grp repo     40923119 web  |  40923119 repo  |  grp web  |  grp repo     40923137 web  |  40923137 repo  |  grp web  |  grp repo     40923154 web  |  40923154 repo  |  grp web  |  grp repo     40923156 web  |  40923156 repo  |  grp web  |  grp repo     40971134 web  |  40971134 repo  |  grp web  |  grp repo    cd2022ag2   40923102 web  |  40923102 repo  |  grp web  |  grp repo     40923104 web  |  40923104 repo  |  grp web  |  grp repo     40923105 web  |  40923105 repo  |  grp web  |  grp repo     40923106 web  |  40923106 repo  |  grp web  |  grp repo     40923107 web  |  40923107 repo  |  grp web  |  grp repo     40923110 web  |  40923110 repo  |  grp web  |  grp repo     40923121 web  |  40923121 repo  |  grp web  |  grp repo     40923153 web  |  40923153 repo  |  grp web  |  grp repo    cd2022ag3   40923109 web  |  40923109 repo  |  grp web  |  grp repo     40923111 web  |  40923111 repo  |  grp web  |  grp repo     40923114 web  |  40923114 repo  |  grp web  |  grp repo     40923115 web  |  40923115 repo  |  grp web  |  grp repo     40923122 web  |  40923122 repo  |  grp web  |  grp repo     40923129 web  |  40923129 repo  |  grp web  |  grp repo     40923146 web  |  40923146 repo  |  grp web  |  grp repo     40923148 web  |  40923148 repo  |  grp web  |  grp repo    cd2022ag4   40923116 web  |  40923116 repo  |  grp web  |  grp repo     40923124 web  |  40923124 repo  |  grp web  |  grp repo     40923125 web  |  40923125 repo  |  grp web  |  grp repo     40923126 web  |  40923126 repo  |  grp web  |  grp repo     40923127 web  |  40923127 repo  |  grp web  |  grp repo     40923128 web  |  40923128 repo  |  grp web  |  grp repo     40923138 web  |  40923138 repo  |  grp web  |  grp repo     40923143 web  |  40923143 repo  |  grp web  |  grp repo    cd2022ag5   40923123 web  |  40923123 repo  |  grp web  |  grp repo     40923131 web  |  40923131 repo  |  grp web  |  grp repo     40923133 web  |  40923133 repo  |  grp web  |  grp repo     40923134 web  |  40923134 repo  |  grp web  |  grp repo     40923135 web  |  40923135 repo  |  grp web  |  grp repo     40923139 web  |  40923139 repo  |  grp web  |  grp repo     40923142 web  |  40923142 repo  |  grp web  |  grp repo     40923151 web  |  40923151 repo  |  grp web  |  grp repo    cd2022ag6   40923113 web  |  40923113 repo  |  grp web  |  grp repo     40923130 web  |  40923130 repo  |  grp web  |  grp repo     40923140 web  |  40923140 repo  |  grp web  |  grp repo     40923144 web  |  40923144 repo  |  grp web  |  grp repo     40923145 web  |  40923145 repo  |  grp web  |  grp repo     40923149 web  |  40923149 repo  |  grp web  |  grp repo     40923150 web  |  40923150 repo  |  grp web  |  grp repo     40923152 web  |  40923152 repo  |  grp web  |  grp repo    cd2022ag7   40823132 web  |  40823132 repo  |  grp web  |  grp repo     40823143 web  |  40823143 repo  |  grp web  |  grp repo     40923117 web  |  40923117 repo  |  grp web  |  grp repo     40923118 web  |  40923118 repo  |  grp web  |  grp repo     40923120 web  |  40923120 repo  |  grp web  |  grp repo     40923136 web  |  40923136 repo  |  grp web  |  grp repo     40923147 web  |  40923147 repo  |  grp web  |  grp repo     40923157 web  |  40923157 repo  |  grp web  |  grp repo \n', 'tags': '', 'url': 'W2.html'}, {'title': '建立倉儲', 'text': '先建立一個名稱為 cd2022 空倉儲 \n cd tmp\ngit clone --recurse-submodules repo.git\ncd cd2022\ngit submodule add https://github.com/mdecourse/cmsimde.git cmsimde \n 接著到近端的 cmsimde > up_dir 全選複製到近端倉儲 \n \n 再至 cmsimde 將以下檔案拉至近端倉儲 \n \n 更新 cmsimde \n cd tmp\ncd cd2022\ncd cmsimde\ngit pull origin master \n 更新後從 cmsimde>up_dir 把更新後的檔案拉進近端倉儲 \n \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': '建立小組 大組倉儲', 'text': '1.先到小組的 github 網站，按 Fork，複製小組網址 \n 2.開啟 cmd \n 打上 \n \n cd tmp\ngit clone --recurse-submodules 小組網址.git \n \n 3.接著建立一個小組的token \n \n \n', 'tags': '', 'url': '建立小組 大組倉儲.html'}, {'title': '遇到的問題-1', 'text': 'Q： \n \n A：這個是未設置 token 所以要去 Github 的設定裡去設定 token 然後把\xa0 personal access token\xa0 複製貼上至近端倉儲下的 config 裡 \n', 'tags': '', 'url': '遇到的問題-1.html'}, {'title': 'W3', 'text': '參考影片1： \n NX Tutorial 1 \n https://www.youtube.com/watch?v=GUaa97tALxE&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl&index=2 \n \n 操作範例零件下載： \n https://drive.google.com/drive/folders/1aVgB5smkumviEXuhUJ8BHgiekm7ICoip?usp=sharing \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n -------------------------- \n 參考影片2： \n TECH 4472 - Homework 01 \n https://www.youtube.com/watch?v=6CtAJe9acr4&list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl&index=2&t=269s \n \n 操作範例零件下載： \n https://drive.google.com/file/d/1WM55lwriLFrs-CPSK0V5zpg55Kzp44Hm/view?usp=sharing \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n ----------------------------', 'tags': '', 'url': 'W3.html'}, {'title': '遇到的問題-2', 'text': '在 28000@192.168.56.3 開頭打上 REM 變成註解。 \n \n', 'tags': '', 'url': '遇到的問題-2.html'}]};