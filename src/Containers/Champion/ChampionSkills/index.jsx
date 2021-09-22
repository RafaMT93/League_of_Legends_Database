import React from 'react';
import Image from '../../../Components/Image';

import {
  WrapperSkills,
  WrapperSkillsH1,
  WrapperSkillsH2,
  WrapperTabs,
} from '../styled';
import { TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ChampionSkills = ({
  passiveImg,
  altPassive,
  titlePassive,
  passiveDescription,
  spells,
  partype,
  version,
}) => {
  return (
    <WrapperSkills>
      <WrapperSkillsH1>Skills</WrapperSkillsH1>

      <WrapperTabs>
        <TabList>
          <Tab>
            <Image src={passiveImg} alt={altPassive} title={titlePassive} />
          </Tab>
          {spells.map((x, index) => {
            return (
              <Tab key={index}>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${x.image.full}`}
                  alt={x.name}
                  title={x.name}
                />
              </Tab>
            );
          })}
        </TabList>

        <TabPanel>
          <WrapperSkillsH2>{passiveDescription}</WrapperSkillsH2>
        </TabPanel>

        {spells.map((x, index) => {
          return (
            <TabPanel key={index}>
              <WrapperSkillsH2>{x.description}</WrapperSkillsH2>

              <WrapperSkillsH2>
                <b>Cooldown:</b> {x.cooldown.join(' / ')}
              </WrapperSkillsH2>

              <WrapperSkillsH2>
                <b>
                  {partype === 'Mana'
                    ? 'Custo de Mana: '
                    : 'Custo de Energia: '}
                </b>
                {x.cost.join(' / ')}
              </WrapperSkillsH2>

              <WrapperSkillsH2>
                <b>Range:</b> {x.range.join(' / ')}
              </WrapperSkillsH2>
            </TabPanel>
          );
        })}
      </WrapperTabs>
    </WrapperSkills>
  );
};

export default ChampionSkills;
