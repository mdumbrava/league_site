import { useState } from "react";
import "./Tabs.css";

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
              best shot at ridding the city of its elusive criminal elements.
              She is often paired with Vi, acting as a cool counterpoint to her
              partner’s more impetuous nature. Even though she carries a
              one-of-a-kind hextech rifle, Caitlyn’s most powerful weapon is her
              superior intellect, allowing her to lay elaborate traps for any
              lawbreakers foolish enough to operate in the City of Progress.{" "}
            </span>
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 2</h2> */}
          <hr />
          <p>
            PASSIVE: <br /> Caitlyn's basic attacks generate a stack of Headshot
            on-attack, doubled when attacking from.
            <br />
            <br />
            PILTOVER PEACEMAKER: <br /> Caitlyn fires a piercing shot in the
            target direction that deals physical damage to the first enemy it
            passes through, after which it expands in width but deals only 60%
            damage to enemies it passes thereafter.
            <br />
            <br />
            YORDLE SNAP TRAP: <br /> Caitlyn sets a visible untargetable trap at
            the target location which grants sight of the area for 1 second and
            arms after 1 second, lasting for a duration.
            <br />
            <br />
            90 CALIBER NET: <br /> Caitlyn fires a net in the target direction
            and Dash.png recoils 390 units in the opposite direction. The net
            deals magic damage to the first enemy hit and slows them by 50% for
            1 second.
            <br />
            <br />
            ACE IN THE HOLE: <br /> Caitlyn locks onto the target enemy champion
            and channels for 1 second, revealing them for 2.75 seconds and
            revealing herself in the process from the start of the cast time.
            Once Caitlyn completes the channel, she fires a homing bullet toward
            the target that deals physical damage to the first enemy champion it
            hits.
            <br />
            <br />
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
