var htmlCode = "<center>
    <h1>Script Deface Generator</h1>
    <hr/>
    <div class="col-lg-13" style="max-width:1350px;min-width:883px;">
    <div class="row">
    <div class="col-lg-prinsley">
    <div class="form-group">
    <h4 class="judulprinsley">Background, Image & Font</h4>
    <table class="table">
    <tr>
    <td>
    <select id="gambar" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/haxorai-icon.svg" />HaxorMyID Image</option>
    <option value="" />DISABLED</option>
    <option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-AnonymousLogo.png" />Anonymous</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-anonymous-face.png" />Anonymous Face</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-IndonesianAnonymous.jpg" />Anonymous Indonesian</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-dracugirl.jpg" />Dark Girl</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-gerryspongebob.gif" />Gerry Spongebob GIF</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-tenor.gif" />Girl GIF</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-Words.jpg" />Girl &amp; Boy</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-hacker-aesthetic.jpg" />Hacker</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-hacker-indonesian.jpg" />Hacker Indonesia</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-hacker-keyboard.jpeg" />Hacker Keyboard</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-bucin-image-in-month.jpg" />Love In Month</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-bucin-image.jpg" />Love In Sunset</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-animasi-bergerak-hujan.gif" />Pohon Hujan</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-robot-girl.jpg" />Robot Girl</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-anonymous-sad.jpg" />Sad Anonymous</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-sad-boy.gif" />Sad Boy GIF</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-boy-sad.gif" />Sad Boy GIF 2</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-giphy.gif" />Sad Boy GIF 3</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-no-estoy-feliz.gif" />Sad Eye</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-sad-girls-beauty.jpg" />Sad Girl</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-sad-girl.jpg" />Sad Girl 2</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-sad-girls-ae.jpg" />Sad Girl 3</option>
<option value="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/SamuelPasaribu-sad-girls.jpg" />Sad Girl 4</option>
    </select>
    </td>
    <td>
    <select id="background" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#222222" />Background</option>
    <option value="#222222" />Dark</option>
    <option value="black" />Black</option>
    <option value="white" />White</option>
    <option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-sadphoto.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Aesthetic Bckground</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-anonymous-background.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Anonymous Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-boy-with-mask.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Boy With Mask Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-dark-anime.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Dark Anime Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-hacker-dark.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Dark Hacker Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-love-in-space.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Love In Space Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-hacker-aesthetic.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Hacker Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-sad-boy-background.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Sad Boy Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-sad-girls-beauty.jpg&quot;) no-repeat center center fixed;background-size:100% 100%" />Sad Girl Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-sad-girl.gif&quot;) no-repeat center center fixed;background-size:100% 100%" />Sad Girl GIF Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-rain-sad.gif&quot;) no-repeat center center fixed;background-size:100% 100%" />Sad Rain GIF Background</option>
<option value="url(&quot;https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/background/SamuelPasaribu-star.gif&quot;) no-repeat center center fixed;background-size:100% 100%" />Star GIF Background</option>
    <option value="#24244d" />Haxor Color</option>
    <option value="#0000FF" />Blue</option>
    <option value="#A0522D" />Brown</option>
    <option value="#00008B" />Dark Blue</option>
    <option value="#FFD700" />Gold</option>
    <option value="#3cb43c" />Green</option>
    <option value="indigo" />Indigo</option>
    <option value="#800000" />Maroon</option>
    <option value="magenta" />Magenta</option>
    <option value="orange" />Orange</option>
    <option value="#FF4500" />Orange Red</option>
    <option value="#ff88e6" />Pink</option>
    <option value="#663399" />Purple</option>
    <option value="red" />Red</option>
    <option value="yellow" />Yellow</option>
    </select>
    </td>
    <td>
    <select id="efek_prinsley" class="form-control" onchange="create_byNathanPrinsley()">
    <option value=''>Animation Background</option>
    <option value='<script src="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/js/efek-salju.js" type="text/javascript"></script>'>Salju Normal</option>
    <option value='<script src="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/js/salju-terbang.js" type="text/javascript"></script>'>Salju Terbang</option>
    <option value='<script src="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/js/daun-berguguran.js" type="text/javascript"></script>'>Daun Berguguran</option>
    <option value='<script src="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/js/green-bintang-jatuh.js" type="text/javascript"></script>'>Bintang Klik</option>
    <option value='<script src="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/js/blue-fireworks.js" type="text/javascript"></script>'>Blue Fireworks</option>
    <option value='<script src="https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/js/pink-fireworks.js" type="text/javascript"></script>'>Pink Fireworks</option>
    </select>
    </td>
    <td>
    <select id="font_body" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="Calibri" />Font</option>
    <option value="Calibri" />Calibri</option>
    <option value="Times New Roman" />Times New Roman</option>
    <option value="Times" />Times</option>
    <option value="courier" />Courier</option>
    <option value="serif" />Serif</option>
    <option value="Arial" />Arial</option>
    <option value="Helvetica" />Helvetica</option>
    <option value="sans-serif" />sans-serif</option>
    <option value="Comic Sans MS" />Comic Sans MS</option>
    <option value="Impact" />Impact</option>
    <option value="Lucida Sans Unicode" />Lucida Sans Unicode</option>
    <option value="Tahoma" />Tahoma</option>
    <option value="Trebuchet MS" />Trebuchet MS</option>
    <option value="Verdana" />Verdana</option>
    <option value="Courier New" />Courier New</option>
    <option value="Lucida Console" />Lucida Console</option>
    </select>
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+----- Your Nick -----+</h4>
    <table class="table">
    <tr>
    <td>
    <select id="nathanprinsley_hacking" class="form-control" onchange="create_byNathanPrinsley()" style="color: #3c08d7;">
    <option value="Hacked By" />Hacked By</option>
    <option value="" />None</option>
    <option value="Defaced By" />Defaced By</option>
    <option value="Pawned By" />Pawned By</option>
    <option value="Owned By" />Owned By</option>
    <option value="Touched By" />Touched By</option>
    <option value="Wh00pz???" />Wh00pz???</option>
    <option value="Hacked???" />Hacked???</option>
    <option value="Got Hacked???" />Got Hacked???</option>
    </select>
    </td>
    <td>
    <input type="text" id="nick" class="form-control prinsin" placeholder="input your nick..." value="HaxorAI" onkeyup="create_byNathanPrinsley()" style="color: #3c08d7;"/>
    </td>
    <td>
    <select id="warna_nick" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#dbd9d9" />Color</option>
    <option value="#dbd9d9" />White</option>
    <option value="#F0F8FF" />Alice Blue</option>
    <option value="#00FFFF" />Aqua</option>
    <option value="#1b1b21" />Black</option>
    <option value="#0000e3" />Blue</option>
    <option value="#8B4513" />Brown</option>
    <option value="#333" />Dark</option>
    <option value="#03036b" />Dark Blue</option>
    <option value="#edc800" />Gold</option>
    <option value="#07ad1d" />Green</option>
    <option value="#560491" />Indigo</option>
    <option value="#00eb00" />Lime</option>
    <option value="#990909" />Maroon</option>
    <option value="#e622df" />Magenta</option>
    <option value="#e89a09" />Orange</option>
    <option value="#e34105" />Orange Red</option>
    <option value="#ed74d4" />Pink</option>
    <option value="#ad06bf" />Purple</option>
    <option value="#de0707" />Red</option>
    <option value="#d96cd9" />Violet</option>
    <option value="#eddd00" />Yellow</option>
    </select>
    </td>
    <td>
    <select id="np_fontnickstyle" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="nprinsley-text-rainbowan" />Rainbow Aesthetic</option>
    <option value="nathan-prinsley_none" />Text Effect</option>
    <option value="nprinsley-text-glitchan" />Glitch Animation</option>
    <option value="nprinsley-detaxt" />Simple Animation</option>
    <option value="nprinsley-text-redan" />Red Animation</option>
    <option value="nprinsley-text-blupelan" />Blue Animation</option>
    <option value="nprinsley-text nprinsley-rainbow" />Rainbow</option>
    <option value="nprinsley-text nprinsley-blure" />Blue Red</option>
    </select>
    </td>
    <td>
    <input id="hacked_size" type="number" min="25" max="72" value="32" class="form-control sizeprinsley" onkeyup="create_byNathanPrinsley()" onchange="create_byNathanPrinsley()"/>
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+----- Your Team -----+</h4>
    <table class="table">
    <tr>
    <td>
    <input type="text" id="tim" class="form-control prinsin" placeholder="input your team..." value="Indonesian DarkNET" onkeyup="create_byNathanPrinsley()" style="color: #3c08d7;" />
    </td>
    <td>
    <select id="npcolor_team" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#dbd9d9" />Color</option>
    <option value="#dbd9d9" />White</option>
    <option value="#F0F8FF" />Alice Blue</option>
    <option value="#00FFFF" />Aqua</option>
    <option value="#1b1b21" />Black</option>
    <option value="#0000e3" />Blue</option>
    <option value="#8B4513" />Brown</option>
    <option value="#333" />Dark</option>
    <option value="#03036b" />Dark Blue</option>
    <option value="#edc800" />Gold</option>
    <option value="#07ad1d" />Green</option>
    <option value="#560491" />Indigo</option>
    <option value="#00eb00" />Lime</option>
    <option value="#990909" />Maroon</option>
    <option value="#e622df" />Magenta</option>
    <option value="#e89a09" />Orange</option>
    <option value="#e34105" />Orange Red</option>
    <option value="#ed74d4" />Pink</option>
    <option value="#ad06bf" />Purple</option>
    <option value="#de0707" />Red</option>
    <option value="#d96cd9" />Violet</option>
    <option value="#eddd00" />Yellow</option>
    </select>
    </td>
    <td>
    <select id="style_prinsteam" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="nathan-prinsley_none" />Text Effect</option>
    <option value="nprinsley-text-glitchan" />Glitch Animation</option>
    <option value="nprinsley-detaxt" />Simple Animation</option>
    <option value="nprinsley-text-rainbowan" />Rainbow Aesthetic</option>
    <option value="nprinsley-text-redan" />Red Animation</option>
    <option value="nprinsley-text-blupelan" />Blue Animation</option>
    <option value="nprinsley-text nprinsley-rainbow" />Rainbow</option>
    <option value="nprinsley-text nprinsley-blure" />Blue Red</option>
    </select>
    </td>
    <td>
    <input id="size_timnathan" type="number" min="16" max="56" value="24" class="form-control sizeprinsley" onkeyup="create_byNathanPrinsley()" onchange="create_byNathanPrinsley()"/>
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+------ Message ------+</h4>
    <table class="table">
    <tr>
    <td>
    <input type="text" id="message_prinsley" class="form-control prinsin" placeholder="Sorry for hack your website..." onkeyup="create_byNathanPrinsley()" style="color: #3c08d7;"/>
    </td>
    <td>
    <select id="npcolor_pesan" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#dbd9d9" />Color</option>
    <option value="#dbd9d9" />White</option>
    <option value="#F0F8FF" />Alice Blue</option>
    <option value="#00FFFF" />Aqua</option>
    <option value="#1b1b21" />Black</option>
    <option value="#0000e3" />Blue</option>
    <option value="#8B4513" />Brown</option>
    <option value="#333" />Dark</option>
    <option value="#03036b" />Dark Blue</option>
    <option value="#edc800" />Gold</option>
    <option value="#07ad1d" />Green</option>
    <option value="#560491" />Indigo</option>
    <option value="#00eb00" />Lime</option>
    <option value="#990909" />Maroon</option>
    <option value="#e622df" />Magenta</option>
    <option value="#e89a09" />Orange</option>
    <option value="#e34105" />Orange Red</option>
    <option value="#ed74d4" />Pink</option>
    <option value="#ad06bf" />Purple</option>
    <option value="#de0707" />Red</option>
    <option value="#d96cd9" />Violet</option>
    <option value="#eddd00" />Yellow</option>
    </select>
    </td>
    <td>
    <select id="style_prinspesan" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="nathan-prinsley_none" />Text Effect</option>
    <option value="nprinsley-text-glitchan" />Glitch Animation</option>
    <option value="nprinsley-detaxt" />Simple Animation</option>
    <option value="nprinsley-text-rainbowan" />Rainbow Aesthetic</option>
    <option value="nprinsley-text-redan" />Red Animation</option>
    <option value="nprinsley-text-blupelan" />Blue Animation</option>
    <option value="nprinsley-text nprinsley-rainbow" />Rainbow</option>
    <option value="nprinsley-text nprinsley-blure" />Blue Red</option>
    </select>
    </td>
    <td>
    <input id="size_messagenathan" type="number" min="12" max="35" value="16" class="form-control sizeprinsley" onkeyup="create_byNathanPrinsley()" onchange="create_byNathanPrinsley()" />
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+-------- Email ---------+</h4>
    <table class="table">
    <tr>
    <td>
    <select id="line_nathanprinsley" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="">Hide Line</option>
    <option value="<hr/>">Show Line</option>
    </select>
    </td>
    <td>
    <input type="email" id="hubungi_prinsh" class="form-control prinsin" placeholder="prinsh@haxor.my.id" onkeyup="create_byNathanPrinsley()" style="color: #3c08d7;"/>
    </td>
    <td>
    <select id="color_emailprins" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#00eb00">Color</option>
    <option value="#00eb00">Lime</option>
    <option value="#dbd9d9">White</option>
    <option value="#1b1b21">Black</option>
    <option value="#0000e3">Blue</option>
    <option value="#de0707">Red</option>
    <option value="#d96cd9">Violet</option>
    <option value="#eddd00">Yellow</option>
    </select>
    </td>
    <td>
    <select id="style_prinsemail" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="nathan-prinsley_none">Text Effect</option>
    <option value="nprinsley-text-glitchan">Glitch Animation</option>
    <option value="nprinsley-detaxt">Simple Animation</option>
    <option value="nprinsley-text-rainbowan">Rainbow Aesthetic</option>
    <option value="nprinsley-text-redan">Red Animation</option>
    <option value="nprinsley-text-blupelan">Blue Animation</option>
    <option value="nprinsley-text nprinsley-rainbow">Rainbow</option>
    <option value="nprinsley-text nprinsley-blure">Blue Red</option>
    </select>
    </td>
    <td>
    <input id="sizeemail_nathanprins" type="number" min="10" max="20" value="14" class="form-control sizeprinsley" onkeyup="create_byNathanPrinsley()" onchange="create_byNathanPrinsley()">
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+-- Other Message --+</h4>
    <table class="table">
    <tr>
    <td>
    <input type="text" id="othermes_nprinsh" class="form-control prinsin" placeholder="Contact me if you need help..." onkeyup="create_byNathanPrinsley()" style="color: #3c08d7;"/>
    </td>
    <td>
    <select id="othermes_nprinshcolor" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#dbd9d9">Color</option>
    <option value="#dbd9d9">White</option>
    <option value="#F0F8FF">Alice Blue</option>
    <option value="#00FFFF">Aqua</option>
    <option value="#1b1b21">Black</option>
    <option value="#0000e3">Blue</option>
    <option value="#8B4513">Brown</option>
    <option value="#333">Dark</option>
    <option value="#03036b">Dark Blue</option>
    <option value="#edc800">Gold</option>
    <option value="#07ad1d">Green</option>
    <option value="#560491">Indigo</option>
    <option value="#00eb00">Lime</option>
    <option value="#990909">Maroon</option>
    <option value="#e622df">Magenta</option>
    <option value="#e89a09">Orange</option>
    <option value="#e34105">Orange Red</option>
    <option value="#ed74d4">Pink</option>
    <option value="#ad06bf">Purple</option>
    <option value="#de0707">Red</option>
    <option value="#d96cd9">Violet</option>
    <option value="#eddd00">Yellow</option>
    </select>
    </td>
    <td>
    <select id="othermes_nprinstyle" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="nathan-prinsley_none">Text Effect</option>
    <option value="nprinsley-text-glitchan">Glitch Animation</option>
    <option value="nprinsley-detaxt">Simple Animation</option>
    <option value="nprinsley-text-rainbowan">Rainbow Aesthetic</option>
    <option value="nprinsley-text-redan">Red Animation</option>
    <option value="nprinsley-text-blupelan">Blue Animation</option>
    <option value="nprinsley-text nprinsley-rainbow">Rainbow</option>
    <option value="nprinsley-text nprinsley-blure">Blue Red</option>
    </select>
    </td>
    <td>
    <input id="size_othermessagenathan" type="number" min="12" max="35" value="16" class="form-control sizeprinsley" onkeyup="create_byNathanPrinsley()" onchange="create_byNathanPrinsley()">
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+-------- Footer --------+</h4>
    <table class="table">
    <tr>
    <td>
    <select id="onoff_thanksprinsley" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="none">Hide Footer</option>
    <option value="">Show Footer</option>
    </select>
    </td>
    <td>
    <input type="text" id="thanks_nprinsh" class="form-control prinsin" placeholder="Greetz To : Anon - Haxor - Etc" onkeyup="create_byNathanPrinsley()" style="color: #3c08d7;"/>
    </td>
    <td>
    <select id="colorthanks_nprinsh" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="#dbd9d9">Color</option>
    <option value="#dbd9d9">White</option>
    <option value="#F0F8FF">Alice Blue</option>
    <option value="#00FFFF">Aqua</option>
    <option value="#1b1b21">Black</option>
    <option value="#0000e3">Blue</option>
    <option value="#8B4513">Brown</option>
    <option value="#333">Dark</option>
    <option value="#03036b">Dark Blue</option>
    <option value="#edc800">Gold</option>
    <option value="#07ad1d">Green</option>
    <option value="#560491">Indigo</option>
    <option value="#00eb00">Lime</option>
    <option value="#990909">Maroon</option>
    <option value="#e622df">Magenta</option>
    <option value="#e89a09">Orange</option>
    <option value="#e34105">Orange Red</option>
    <option value="#ed74d4">Pink</option>
    <option value="#ad06bf">Purple</option>
    <option value="#de0707">Red</option>
    <option value="#d96cd9">Violet</option>
    <option value="#eddd00">Yellow</option>
    </select>
    </td>
    <td>
    <select id="stylethanks_nprinsh" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="nathan-prinsley_none">Text Effect</option>
    <option value="nprinsley-text-glitchan">Glitch Animation</option>
    <option value="nprinsley-detaxt">Simple Animation</option>
    <option value="nprinsley-text-rainbowan">Rainbow Aesthetic</option>
    <option value="nprinsley-text-redan">Red Animation</option>
    <option value="nprinsley-text-blupelan">Blue Animation</option>
    <option value="nprinsley-text nprinsley-rainbow">Rainbow</option>
    <option value="nprinsley-text nprinsley-blure">Blue Red</option>
    </select>
    </td>
    </tr>
    </table>
    </div>
    <div class="form-group">
    <h4 class="judulprinsley">+-------- Music --------+</h4>
    <table class="table">
    <tr>
    <td>
    <select id="controls_musicprinsh" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="">Hide Controls</option>
    <option value="controls">Show Controls</option>
    </select>
    </td>
    <td>
    <select id="amusic_prinsh" class="form-control" onchange="create_byNathanPrinsley()">
    <option value="">Select Music</option>
    <option value="">DISABLED</option>
    <option value="anne-marie_2002.mp3">Anne Marie - 2002</option>
    <option value="alan-walker_alone-remix.mp3">Alan Walker - Alone Remix</option>
    <option value="ava-max_kings_queens.mp3">Ava Max - Kings & Queens</option>
    <option value="amv_scars-to-your-beautiful.mp3">AMV - Scars To Your Beautiful</option>
    <option value="audrey-cantika_bahagia.mp3">Aurel Cantika - Bahagia</option>
    <option value="axel-johansson_miracles.mp3">Axel Johansson - Miracles</option>
    <option value="bale-pulang-2.mp3">Bale Pulang II</option>
    <option value="black-music.mp3">Black Music</option>
    <option value="it-will-rain.mp3">Bruno Mars - It Will Rain</option>
    <option value="clean-bandit_symphony.mp3">Clean Bandit - Symphony</option>
    <option value="dirtyphonics-anonymous.mp3">Dirtyphonics Anonymous</option>
    <option value="dj-all-night-remix.mp3">DJ All Night Remix</option>
    <option value="fatin-shidqia_salahkah-aku-terlalu-mencintaimu.mp3">Fatin Shidqia - Salahkah Aku Terlalu Mencintaimu</option>
    <option value="feby-putri_celengan-rindu.mp3">Feby Putri - Celengan Rindu</option>
    <option value="glass-animals_heat-waves.mp3">Glass Animals - Heat Waves</option>
    <option value="best-hacker-music.mp3">Hacker Music</option>
    <option value="heal-the-world_aviwkila.mp3">Heal The World</option>
    <option value="horizon.mp3">Horizon</option>
    <option value="humble-x-industry-baby.mp3">Humble X Industry Baby</option>
    <option value="i-like-you-so-much.mp3">I Like You So Much</option>
    <option value="imagine-dragons_bad-liar.mp3">Imagine Dragons - Bad Liar</option>
    <option value="instrumental-300-violin_orchestra.mp3">Instrumental 300 Violin - Orchestra</option>
    <option value="jamie-miller_here-s-your-perfect.mp3">Jamie Miller - Here's Your Perfect</option>
    <option value="keisya-levronka_tak-ingin-usai.mp3">Keisya Levronka - Tak Ingin Usai</option>
    <option value="legends-never-die.mp3">Legends Never Die</option>
    <option value="lil-nas-x_old-town-road.mp3">Lil Nas X Old Town Road</option>
    <option value="lost-sky_vision-pt-ii.mp3">Lost Sky - Vision PT.II</option>
    <option value="lost-sky_where-we-started.mp3">Lost Sky - Where We Started</option>
    <option value="love-me-like-you-do.mp3">Love Me Like You Do</option>
    <option value="maggie-lindemann_pretty-girl.mp3">Maggie Lindemann - Pretty Girl</option>
    <option value="maroon-5_girls-ike-you.mp3">Maroon 5 - Girls Like You</option>
    <option value="marsha-zulkarnain_hati-terlatih.mp3">Marsha Zulkarnain - Hati Terlatih</option>
    <option value="meg-amp-dia-monster-dot-exe-remix.mp3">Monster Remix</option>
    <option value="mood_nighttiks.mp3">Mood NightTiks</option>
    <option value="neffex-grateful.mp3">Neffex - Grateful</option>
    <option value="noah-seperti-kemarin.mp3">Noah - Seperti Kemarin</option>
    <option value="price-tag_putih-abu-abu.mp3">Putih Abu Abu - Price tag</option>
    <option value="safe-and-sound_rebelution.mp3">Rebelution - Safe And Sound</option>
    <option value="shania-yan-cover_nothings-gonna-change-my-love-for-you.mp3">Shania Yan - Nothings Gonna Change My Love For You</option>
    <option value="way-back-home_shaun.mp3">Shaun - Way Back Home</option>
    <option value="sia_cheap-thrills.mp3">Sia - Cheap Thrills</option>
    <option value="sia_unstoppable.mp3">Sia - Unstoppable</option>
    <option value="everything-i-need_skylar-grey.mp3">Skylar Grey - Everything I Need</option>
    <option value="thefatrat-anjulie_let-love-win.mp3">TheFatRat - Let Love Win</option>
    <option value="why-do-i.mp3">Unknown Brain - Why Do I</option>
    <option value="beautiful-in-white_west-life.mp3">Westlife - Beautiful In White</option>
    </select>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div class="col-lg-prinsley">
    <div class="form-group">
    <div style="display: flex;justify-content: flex-start;">
    <button class="buttonprinsley">Copy</button>
    <button class="buttonprinsley" id='buttonDownload'>Download</button>
    <h4 style="justify-content: center;margin: 6px 6px 6px 5%;">Source Code : </h4>
    </div>
    <textarea style="background: #3a3a3a;color: #00f8ff;width: 100%;height: 100px;font-size:14px;" class="form-control" id="hasil" onkeyup="RunCode()" rows="8"></textarea>
    </div>    
    <div class="form-group">
    <h4>Preview : </h4>
    <iframe id="result"></iframe>
    </div>
    </div>
    </div>
    </div>
    <hr style="margin-top:80px;"/>
    <h1>Tools</h1>
    <hr/>
    <center>
    <p style="margin-top:30px;"><a style="border:solid 12px #204ecf;font-weight:bold;font-size:24px;" onclick="window.open('https://haxor.my.id','_blank')" class="natsprinsley">Script Deface Uploader - Haxor.My.ID</a></p></center>
    <div class="col-lg-13" style="max-width:1350px;min-width:883px;">
    <div class="row">
    <div class="col-lg-prinsley">
    <p style="margin-top:40px;"><a onclick="window.open('https://www.prinsh.com/','_blank')" class="natsprinsley">Prinsh.com</a></p>
    <p style="margin-top:30px;"><a onclick="window.open('https://tools.prinsh.com/home/?index','_blank')" class="natsprinsley">Online Tools</a></p>
    <p style="margin-top:40px;"><a onclick="window.open('https://shell.prinsh.com/','_blank')" class="natsprinsley">Shell Downloader</a></p>
    <p style="margin-top:40px;"><a onclick="window.open('https://deface.prinsh.com/','_blank')" class="natsprinsley">SC Deface Downloader</a></p>
    </div>
    <div class="col-lg-prinsley">
    <p style="margin-top:40px;"><a onclick="window.open('https://store.prinsh.com/','_blank')" class="natsprinsley">PrinStore</a></p>
    <p style="margin-top:40px;"><a onclick="window.open('https://minipaint.prinsh.com/','_blank')" class="natsprinsley">Mini Paint</a></p>
    <p style="margin-top:40px;"><a onclick="window.open('https://diagram.prinsh.com/','_blank')" class="natsprinsley">Diagram Maker</a></p>
    <p style="margin-top:30px;"><a onclick="window.open('https://codepad.prinsh.com/','_blank')" class="natsprinsley">Smart Text Editor</a></p>
    </div>
    </div>
    </div>
    <hr/>
    <p style="margin-top:40px;text-align:center;">©<b> <a style="color:lime;text-decoration:none;" href="https://wwww.samuelpasaribu.com" onclick="window.location.href='https://wwww.samuelpasaribu.com'">Samuel Pasaribu</a></b><br><a class="nathanlink" href="https://wwww.haxorai.com" onclick="window.location.href='https://www.haxorai.com'">haxorai.com</a><b style="margin-right:10px;margin-left:10px;">X</b><a class="nathanlink" href="https://anonymous.haxorai.com" onclick="window.location.href='https://anonymous.haxorai.com'">anonymous.haxorai.com</a></p>
    </center>";
