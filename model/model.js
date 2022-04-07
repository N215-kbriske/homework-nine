//data for web pages
var homeContent = `<h1 class="home-header">This Week In Destiny</h1>
<img class="ghost-image" src="https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif" alt="">
<div class="explain">
  <h3>Select activities from the navigation to see what this week holds for you and your fireteam!</h3>
</div>`;
var lostSectorContent = `<h1 class="lost-sector-header">LOST SECTOR</h1>
<div class="lost-sector-hero"></div>
<div class="quick-stats">
  <h1 class="power">POWER LEVEL: 1550</h1>
  <h1 class="champions">CHAMPIONS: OVERLOAD/UNSTOPPABLE</h1>
  <h1 class="time">ENDS: TOMORROW</h1>
</div>
<div class="lost-sector-content">
  <h1 class="ls-title">EXTRACTION</h1>
  <hr />
  <h2 class="location">Location: European Dead Zone</h2>
  <div class="burn">
    <h2 class="burnText">Burn:</h2>
    <div class="ls-burn"></div>
  </div>
  <h2 class="shields">Shields: Arc/Void</h2>
  <h2 class="dif">
  Master Difficulty: Locked Equipment, Match Game, Extra Shields, Extra
  Champions
</h2>
  <h2 class="modifiers">Modifiers: Raider Shield, Chaff</h2>
  <hr />
  <div class="locationMapContainer">
    <div class="locationMap"></div>
  </div>
</div>`;
var nightfallContent = `<h1 class="nightfall-header">NIGTHFALL</h1>
<div class="nightfall-hero"></div>
<div class="quick-stats">
  <h1 class="power">POWER LEVEL: 1480-1600</h1>
  <h1 class="champions">CHAMPIONS: OVERLOAD/UNSTOPPABLE</h1>
  <h1 class="time">RESET: TUESDAY 4/12</h1>
</div>
<div class="nightfall-content">
  <h1 class="nf-title">THE SCARLET KEEP</h1>
  <hr />
  <h2 class="location">Location: Moon</h2>
  <div class="burn">
    <h2 class="burnText">Burn:</h2>
    <div class="ls-burn"></div>
  </div>
  <h2 class="shields">Shields: Arc/Solar</h2>
  <h2 class="dif">Difficulty: Grandmaster</h2>
  <h2 class="modifiers">
    Modifiers: Fire Pit, Champion Foes, Chaff, Grandmaster Modifiers,
    Match Game, Equipment Locked, Extinguish, Limited Revives, Champions:
    Mob, Shielded Foes, Double Vanguard Rank, Acute Arc Burn
  </h2>
  <hr />
  <div class="locationMapContainer">
    <div class="locationMap"></div>
  </div>
</div>`;
var raidContent = `<h1 class="raid-header">RAID</h1>
<div class="raid-hero"></div>
<div class="quick-stats">
  <h1 class="power">POWER LEVEL: 1520</h1>
  <h1 class="champions">CHAMPIONS: NONE</h1>
  <h1 class="time">RESET: TUESDAY 4/12</h1>
</div>
<div class="raid-content">
  <h1 class="rd-title">VOW OF THE DISCIPLE</h1>
  <hr />
  <h2 class="location">Location: Savathûn's Throne World</h2>
  <div class="burn">
    <h2 class="burnText">Burn: None</h2>
    <!-- <div class="ls-burn"></div> -->
  </div>
  <h2 class="shields">Shields: Arc/Solar/Void</h2>
  <h2 class="dif">Difficulty: Normal</h2>
  <h2 class="modifiers">
    Modifiers: Defenses Down: A challenge awaits...
  </h2>
  <hr />
  <div class="locationMapContainer">
    <div class="locationMap"></div>
  </div>
  <hr />
  <div class="callouts">
    <h2 class="symbols">Symbols:</h2>
    <div class="symbolImage"></div>
  </div>
  <hr />
  <div class="lootContainer2">
    <h2 class="weaponText">Raid Weapons:</h2>
    <div class="raidExotic">
      <img
        src="./images/weapons/collective-obligation.jpg"
        alt=""
        class="item"
      />
    </div>
    <div class="raidWeapons">
      <img src="./images/weapons/submission.jpg" alt="" class="item" />
      <img src="./images/weapons/insidious.jpg" alt="" class="item" />
      <img src="./images/weapons/deliverance.jpg" alt="" class="item" />
      <img src="./images/weapons/forbearnance.jpg" alt="" class="item" />
      <img src="./images/weapons/lubraes-ruin.jpg" alt="" class="item" />
      <img src="./images/weapons/cataclysmic.jpg" alt="" class="item" />
    </div>
  </div>
  <hr />
  <div class="lootContainer">
    <h2 class="lootText"></h2>
    <div class="lootImage"></div>
  </div>
</div>`;
var wellSpringContent = `<h1 class="ws-header">THE WELLSPRING</h1>
<div class="ws-hero"></div>
<div class="quick-stats">
  <h1 class="power">POWER LEVEL: 1500</h1>
  <h1 class="champions">CHAMPIONS: OVERLOAD/UNSTOPPABLE/BARRIER</h1>
  <h1 class="time">ENDS: TUESDAY 4/12</h1>
</div>
<div class="ws-content">
  <h1 class="ws-title">DEFEND: ZEERIK, LIGHTFLAYER</h1>
  <hr />
  <h2 class="location">Location: Savathûn's Throne World</h2>
  <div class="burn">
    <h2 class="burnText">Burn:</h2>
    <div class="ls-burn"></div>
  </div>
  <h2 class="shields">Shields: Solar</h2>
  <h2 class="dif">Difficulty: Normal
  </h2>
  <h2 class="modifiers">Modifiers: Raider Shield, Chaff</h2>
  <hr />
  <div class="locationMapContainer">
    <div class="locationMap"></div>
  </div>
</div>`;

//sends page (name) information to the view (index.html)
export function modelPageName(pgName) {
  $("#app").html(eval(pgName));
  //   console.log(pgName);
}
