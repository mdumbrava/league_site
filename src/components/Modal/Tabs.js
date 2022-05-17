import { useState } from "react";
import "./Tabs.css";
import CaitPassive from "../../images/caitlin/passive.jpg";
import CaitQ from "../../images/caitlin/q.jpg";
import CaitW from "../../images/caitlin/w.jpg";
import CaitE from "../../images/caitlin/e.jpg";
import CaitR from "../../images/caitlin/r.jpg";
import CaitModel from "../../images/caitlin/ingamemodel.png";
import Arcade from "../../images/caitlin/arcade.jpg";
import Battle from "../../images/caitlin/battle.jpg";
import Hunter from "../../images/caitlin/hunter.jpg";
import Lunar from "../../images/caitlin/lunar.jpg";
import Officer from "../../images/caitlin/officer.jpg";
import Prestige from "../../images/caitlin/prestige.jpg";
import Pulsefire from "../../images/caitlin/pulsefire.jpg";
import Safari from "../../images/caitlin/safari.jpg";
import Sherrif from "../../images/caitlin/sherrif.jpg";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About Champion
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Champion Abilities
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Cosmetics
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="flex-column">
            <div>
              <h2>Caitlyn the Sheriff of Piltover</h2>
              <hr />
              <p>
                Position: Bot
                <br />
                Class:Marksman
                <br />
                <br />
                <u>About Her:</u>
                <br />
                <br />
                <span>
                  Renowned as its finest peacekeeper, Caitlyn is also Piltover’s
                  best shot at ridding the city of its elusive criminal
                  elements. She is often paired with Vi, acting as a cool
                  counterpoint to her partner’s more impetuous nature. Even
                  though she carries a one-of-a-kind hextech rifle, Caitlyn’s
                  most powerful weapon is her superior intellect, allowing her
                  to lay elaborate traps for any lawbreakers foolish enough to
                  operate in the City of Progress.
                  <br />
                  <br />
                  Caitlyn is a woman who is quite loyal to the town of Piltover,
                  she loves her job as a sheriff to help people and capture
                  criminals so that they have a fair trial, which indicates that
                  she is quite fair with good or bad people.
                  <br />
                  <br />
                  However, Caitlyn can also be somewhat rebellious, as she often
                  breaks the rules to make her the sheriff's job, such as
                  allowing Vi, a girl from Zaun to join her and chaperone her on
                  missions. she.
                </span>
              </p>
            </div>
            <div>
              <img className="img-model" src={CaitModel} alt="model" />
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 2</h2> */}
          <hr />
          <p>
            <div className="flex-column">
              <div className="img-flex">
                <img className="img-abc" src={CaitPassive} alt="passive" />{" "}
                <br />
              </div>
              <div className="text-flex">
                PASSIVE: <br /> Caitlyn's basic attacks generate a stack of
                Headshot on-attack, doubled when attacking from.
              </div>
            </div>
            <br />
            <div className="flex-column">
              <div className="img-flex">
                <img className="img-abc" src={CaitQ} alt="q" /> <br />
              </div>
              <div className="text-flex">
                PILTOVER PEACEMAKER: <br /> Caitlyn fires a piercing shot in the
                target direction that deals physical damage to the first enemy
                it passes through, after which it expands in width but deals
                only 60% damage to enemies it passes thereafter.
              </div>
            </div>
            <br />
            <div className="flex-column">
              <div className="img-flex">
                <img className="img-abc" src={CaitW} alt="q" /> <br />
              </div>
              <div className="text-flex">
                YORDLE SNAP TRAP: <br /> Caitlyn sets a visible untargetable
                trap at the target location which grants sight of the area for 1
                second and arms after 1 second, lasting for a duration.
              </div>
            </div>
            <br />
            <div className="flex-column">
              <div className="img-flex">
                <img className="img-abc" src={CaitE} alt="q" /> <br />
              </div>
              <div className="text-flex">
                90 CALIBER NET: <br /> Caitlyn fires a net in the target
                direction and Dash.png recoils 390 units in the opposite
                direction. The net deals magic damage to the first enemy hit and
                slows them by 50% for 1 second.
              </div>
            </div>
            <br />
            <div className="flex-column">
              <div className="img-flex">
                <img className="img-abc" src={CaitR} alt="q" /> <br />
              </div>
              <div className="text-flex">
                ACE IN THE HOLE: <br /> Caitlyn locks onto the target enemy
                champion and channels for 1 second, revealing them for 2.75
                seconds and revealing herself in the process from the start of
                the cast time. Once Caitlyn completes the channel, she fires a
                homing bullet toward the target that deals physical damage to
                the first enemy champion it hits.
              </div>
            </div>

            <br />
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 3</h2> */}
          <hr />
          <p>
            <div className="skins-div">
              <img className="img-skins" src={Sherrif} alt="arcade" />
              <img className="img-skins" src={Safari} alt="arcade" />
              <img className="img-skins" src={Officer} alt="arcade" />
              <img className="img-skins" src={Hunter} alt="arcade" />
              <img className="img-skins" src={Pulsefire} alt="arcade" />
              <img className="img-skins" src={Lunar} alt="arcade" />
              <img className="img-skins" src={Arcade} alt="arcade" />
              <img className="img-skins" src={Prestige} alt="arcade" />
              <img className="img-skins" src={Battle} alt="arcade" />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
