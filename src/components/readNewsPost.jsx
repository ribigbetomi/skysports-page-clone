import React from "react";
import IMG1 from "../images/skysports-bale-page-wales_5796728.png";
import { FaTwitter } from "react-icons/fa";

const ReadNewsPost = () => {
  return (
    <div className="news-read-container">
      <div className="news-read">
        <div className="news-headline space">
          Wales 1-0 Ukraine: Gareth Bale hails victory as -greatest result in
          Welsh football history-
        </div>
        <div className="headline-details space">
          Wales ended their 64-year wait for a place in the World Cup finals as
          they beat Ukraine 1-0 on Sunday to end the war-torn nation's hopes of
          reaching Qatar; Gareth Bale: 'The result is the greatest in Welsh
          football history. We're going to a World Cup!'
        </div>
        <div className="space">
          <div className="news-writer">Ben Grounds</div>
          <div className="new-writer-socials">
            <a
              type="button"
              role="button"
              href="https://twitter.com/JoeShreadSky"
            >
              {" "}
              @Ben_Islington{" "}
            </a>
          </div>
        </div>
        <div className="release-date space">Monday 6 June 2022 17:00, UK</div>
        <div className="space">
          <img src={IMG1} alt="" width="100%" />{" "}
        </div>
        <div className="space">
          <a
            className="btn btn-container btn-primary"
            type="button"
            role="button"
            title="Share on Twitter"
            href="https://twitter.com/intent/tweet?text= Wales 1-0 Ukraine- Gareth Bale hails victory as greatest result in Welsh football history"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="news-intro space">
          Gareth Bale hailed Wales' 'greatest result' in the country's
          footballing history as an own goal from Ukraine winger Andriy
          Yarmolenko ended 64 years of World Cup hurt.
        </div>
        <div className="space">
          It was a cruel way for Ukraine's qualification effort to end with
          Oleksandr Petrakov's side, who beat Scotland in the play-off
          semi-final, again showing a level of football which would have
          certainly merited a place in the 32-team tournament in November and
          December.
        </div>
        <div className="space">
          With half the team not having played competitive club football since
          the Russian invasion began in February and with their nation's tragedy
          never far from their minds, Ukraine deserve huge credit for coming so
          close to making the finals for the second time in their country's
          history as an independent nation.
        </div>
        <div className="space">
          There were emotional scenes at the end of the game as Ukraine's
          disappointed players showed their appreciation to their more than
          2,000 supporters at the Cardiff City Stadium. They were then joined by
          the Wales players who, before undertaking their own lap of honour,
          also saluted the Ukrainian fans.
        </div>
        <div className="space">
          <ul style={{ "margin-left": "20px" }}>
            <li className="space">Wales 1-0 Ukraine</li>
            <li className="space">
              Player ratings: Hennessey the red wall, magnificient Davies
            </li>
            <li className="space">How the teams lined up / Match stats</li>
            <li className="space">Qatar 2022 World Cup fixtures and venues</li>
            <li className="space">Download the Sky sports app</li>
          </ul>
        </div>
        <div className="space">
          Bale, though, would not be denied his moment, and it was entirely
          fitting that he would play an integral part in the decisive goal.
        </div>
        <div className="space">
          Speaking to Sky Sports afterwards, a jubilant Bale said: "It's the
          greatest result in the history of Welsh football. We're going to a
          World Cup!
        </div>
        <div className="space">
          "Words can't describe how we feel at the moment."
        </div>
        <div className="space">
          <div className="also-see space">Also See:</div>
          <div className="grid--1x2 space">
            <div className="space">Wales 1-0 Ukraine - Match Report</div>
            <div className="space">
              Wales Player ratings: Hennessey the red wall
            </div>
            <div>Qatar 2022 World Cup fixtures and venues</div>
            <div>Get Sky Sports</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadNewsPost;
